using Microsoft.EntityFrameworkCore;
using SGII.Api.Models;
using SGII.Api.Repositories;
using SGII.Api.Repository.Interfaces;

namespace SGII.Api.Repository
{
    public class DesafioInovacaoRepository : IDesafioInovacaoRepository
    {
        private readonly IncubadoraContext _context;

        public DesafioInovacaoRepository(IncubadoraContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<DesafioInovacao>> GetAllAsync()
        {
            return await _context.DesafioInovacaos.ToListAsync();
        }

        public async Task<(IEnumerable<DesafioInovacao> Data, int TotalCount)> GetAllPaginatedAsync(int page, int pageSize, string term)
        {
            // Base query
            var query = _context.DesafioInovacaos.AsQueryable();

            // Aplica filtro se necessario
            if (!string.IsNullOrWhiteSpace(term))
            {
                query = query.Where(n => n.Titulo.Contains(term));
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

        public async Task<DesafioInovacao> GetByIdAsync(int id)
        {
            var reuniaoProspeccao = await _context.DesafioInovacaos
            .Include(s => s.ParticipanteDesafioInovacaos)
            .Include(i => i.ImagemDesafioInovacaos)
            .Include(i => i.IdeiaDesafioInovacaos)
            .FirstOrDefaultAsync(s => s.Id == (long)id);

            return reuniaoProspeccao;
        }

        public async Task AddAsync(DesafioInovacao desafioInovacao)
        {
            _context.DesafioInovacaos.Add(desafioInovacao);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(DesafioInovacao desafioInovacao)
        {

            var existingDesafioInovacao = await _context.DesafioInovacaos
                .Include(s => s.ParticipanteDesafioInovacaos)
                .Include(s => s.ImagemDesafioInovacaos)
                .Include(s => s.IdeiaDesafioInovacaos)
                .FirstOrDefaultAsync(s => s.Id == desafioInovacao.Id);

            if (existingDesafioInovacao == null)
                throw new KeyNotFoundException("Reunião de prospecção não encontrada.");

            _context.Entry(existingDesafioInovacao).CurrentValues.SetValues(desafioInovacao);

            // Update ParticipanteDesafioInovacaos
            UpdateCollection(existingDesafioInovacao.ParticipanteDesafioInovacaos, desafioInovacao.ParticipanteDesafioInovacaos);

            // Update ImagemDesafioInovacaos
            UpdateCollection(existingDesafioInovacao.ImagemDesafioInovacaos, desafioInovacao.ImagemDesafioInovacaos);

            // Update IdeiaDesafioInovacaos
            UpdateCollection(existingDesafioInovacao.IdeiaDesafioInovacaos, desafioInovacao.IdeiaDesafioInovacaos);

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
                _context.DesafioInovacaos.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }

        public async Task UploadImage(ImagemDesafioInovacao image)
        {
            await _context.ImagemDesafioInovacaos.AddAsync(image);
            await _context.SaveChangesAsync();
        }
    }
}
