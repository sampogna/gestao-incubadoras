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
            return await _context.Sensibilizacaos.FindAsync(id);
        }

        public async Task AddAsync(Sensibilizacao sensibilizacao)
        {
            try
            {
                sensibilizacao.DataAcao = DateTime.Now;
                sensibilizacao.DataRegistro = DateTime.Now;
                sensibilizacao.IdUsuarioResponsavel = 3;
                sensibilizacao.IdUsuRegistrou = 3;

                _context.Sensibilizacaos.Add(sensibilizacao);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task UpdateAsync(Sensibilizacao Sensibilizacao)
        {
            _context.Entry(Sensibilizacao).State = EntityState.Modified;
            await _context.SaveChangesAsync();
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
    }
}