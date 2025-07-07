using Microsoft.EntityFrameworkCore;
using SGII.Api.Models;
using SGII.Api.Repositories;
using SGII.Api.Repository.Interfaces;

namespace SGII.Api.Repository
{
    public class ReuniaoProspeccaoRepository : IReuniaoProspeccaoRepository
    {
        private readonly IncubadoraContext _context;

        public ReuniaoProspeccaoRepository(IncubadoraContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ReuniaoProspeccao>> GetAllAsync()
        {
            return await _context.ReuniaoProspeccaos.ToListAsync();
        }

        public async Task<(IEnumerable<ReuniaoProspeccao> Data, int TotalCount)> GetAllPaginatedAsync(int page, int pageSize, string term)
        {
            // Base query
            var query = _context.ReuniaoProspeccaos.AsQueryable();

            // Aplica filtro se necessario
            if (!string.IsNullOrWhiteSpace(term))
            {
                query = query.Where(n => n.Descricao.Contains(term));
            }

            // Total count for pagination
            var totalCount = await query.CountAsync();

            // Paginated results
            var data = await query
                .OrderBy(n => n.Id)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            return (data, totalCount);
        }

        public async Task<ReuniaoProspeccao> GetByIdAsync(int id)
        {
            var reuniaoProspeccao = await _context.ReuniaoProspeccaos
            .Include(s => s.ParticipanteReuniaoProspeccaos)
            .Include(i => i.ImagemReuniaoProspeccaos)
            .FirstOrDefaultAsync(s => s.Id == (long)id);

            return reuniaoProspeccao;
        }

        public async Task AddAsync(ReuniaoProspeccao reuniaoProspeccao)
        {
            reuniaoProspeccao.DataRegistro = DateTime.Now;

            _context.ReuniaoProspeccaos.Add(reuniaoProspeccao);
            await _context.SaveChangesAsync();

        }

        public async Task UpdateAsync(ReuniaoProspeccao reuniaoProspeccao)
        {

            var existingReuniaoProspeccao = await _context.ReuniaoProspeccaos
                .Include(s => s.ParticipanteReuniaoProspeccaos)
                .Include(s => s.ImagemReuniaoProspeccaos)
                .FirstOrDefaultAsync(s => s.Id == reuniaoProspeccao.Id);

            if (existingReuniaoProspeccao == null)
                throw new KeyNotFoundException("Reunião de prospecção não encontrada.");

            _context.Entry(existingReuniaoProspeccao).CurrentValues.SetValues(reuniaoProspeccao);

            // Update ParticipanteReuniaoProspeccaos
            UpdateCollection(existingReuniaoProspeccao.ParticipanteReuniaoProspeccaos, reuniaoProspeccao.ParticipanteReuniaoProspeccaos);

            // Update ImagemReuniaoProspeccaos
            UpdateCollection(existingReuniaoProspeccao.ImagemReuniaoProspeccaos, reuniaoProspeccao.ImagemReuniaoProspeccaos);

            await _context.SaveChangesAsync();
        }

        private void UpdateCollection<T>(ICollection<T> existingEntities, ICollection<T> newEntities) where T : class
        {
            var existingIds = existingEntities.Select(e => _context.Entry(e).Property("Id").CurrentValue).ToList();
            var newIds = newEntities.Select(e => _context.Entry(e).Property("Id").CurrentValue).ToList();

            // Remove entities that are no longer in the new list
            var toRemove = existingEntities.Where(e => !newIds.Contains(_context.Entry(e).Property("Id").CurrentValue)).ToList();
            foreach (var entity in toRemove)
            {
                existingEntities.Remove(entity);
            }

            // Add new entities that don't already exist
            foreach (var newEntity in newEntities)
            {
                var newEntityId = _context.Entry(newEntity).Property("Id").CurrentValue;
                if (!existingIds.Contains(newEntityId))
                {
                    existingEntities.Add(newEntity);
                }
                else
                {
                    // If entity already exists, update its values
                    var existingEntity = existingEntities.First(e =>
                        _context.Entry(e).Property("Id").CurrentValue.Equals(newEntityId));
                    _context.Entry(existingEntity).CurrentValues.SetValues(newEntity);
                }
            }
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await GetByIdAsync(id);
            if (entity != null)
            {
                _context.ReuniaoProspeccaos.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }

        public async Task UploadImage(ImagemReuniaoProspeccao image)
        {
            await _context.ImagemReuniaoProspeccaos.AddAsync(image);
            await _context.SaveChangesAsync();
        }
    }
}
