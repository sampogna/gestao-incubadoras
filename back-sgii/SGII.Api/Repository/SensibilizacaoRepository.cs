using Microsoft.EntityFrameworkCore;
using SGII.Api.Models;

namespace SGII.Api.Repositories
{
    public class SensibilizacaoRepository : ISensibilizacaoRepository
    {
        private readonly IncubadoraContext _context;

        public SensibilizacaoRepository(IncubadoraContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Sensibilizacao>> GetAllAsync()
        {
            return await _context.Sensibilizacaos.ToListAsync();
        }

        public async Task<(IEnumerable<Sensibilizacao> Data, int TotalCount)> GetAllPaginatedAsync(int page, int pageSize, string term)
        {
            // Base query
            var query = _context.Sensibilizacaos.AsQueryable();

            // Aplica filtro se necessario
            if (!string.IsNullOrWhiteSpace(term))
            {
                query = query.Where(n => n.Tema.Contains(term));
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

        public async Task<Sensibilizacao> GetByIdAsync(int id)
        {
            var sensibilizacao = await _context.Sensibilizacaos
            .Include(s => s.ParticipanteSensibilizacaos)
            .Include(i => i.ImagemSensibilizacaos)
            .FirstOrDefaultAsync(s => s.Id == (long)id);

            return sensibilizacao;
        }

        public async Task AddAsync(Sensibilizacao sensibilizacao)
        {
            // TO DO: Remover ids chumbados
            sensibilizacao.DataRegistro = DateTime.Now;
            sensibilizacao.IdUsuarioResponsavel = 3;
            sensibilizacao.IdUsuRegistrou = 3;


            _context.Sensibilizacaos.Add(sensibilizacao);
            await _context.SaveChangesAsync();

        }

        public async Task UpdateAsync(Sensibilizacao sensibilizacao)
        {

            var existingSensibilizacao = await _context.Sensibilizacaos
                .Include(s => s.ParticipanteSensibilizacaos)
                .Include(s => s.ImagemSensibilizacaos)
                .FirstOrDefaultAsync(s => s.Id == sensibilizacao.Id);

            if (existingSensibilizacao == null)
                throw new KeyNotFoundException("Sensibilização não encontrada.");

            _context.Entry(existingSensibilizacao).CurrentValues.SetValues(sensibilizacao);

            // Update ParticipanteSensibilizacaos
            UpdateCollection(existingSensibilizacao.ParticipanteSensibilizacaos, sensibilizacao.ParticipanteSensibilizacaos);

            // Update ImagemSensibilizacaos
            UpdateCollection(existingSensibilizacao.ImagemSensibilizacaos, sensibilizacao.ImagemSensibilizacaos);

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
                _context.Sensibilizacaos.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }

        public async Task UploadImage(ImagemSensibilizacao image)
        {
            await _context.ImagemSensibilizacaos.AddAsync(image);
            await _context.SaveChangesAsync();
        }
    }
}