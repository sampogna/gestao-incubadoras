using Microsoft.EntityFrameworkCore;
using SGII.Api.Models;

namespace SGII.Api.Repositories
{
    public class NucleoIncubadorRepository : INucleoIncubadorRepository
    {
        private readonly IncubadoraContext _context;

        public NucleoIncubadorRepository(IncubadoraContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<NucleoIncubador>> GetAllAsync()
        {
            return await _context.NucleoIncubadors.ToListAsync();
        }

        public async Task<(IEnumerable<NucleoIncubador> Data, int TotalCount)> GetAllPaginatedAsync(int page, int pageSize, string term)
        {
            // Base query
            var query = _context.NucleoIncubadors.AsQueryable();

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

        public async Task<NucleoIncubador> GetByIdAsync(int id)
        {
            return await _context.NucleoIncubadors.FindAsync(id);
        }

        public async Task AddAsync(NucleoIncubador nucleoIncubador)
        {
            _context.NucleoIncubadors.Add(nucleoIncubador);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(NucleoIncubador nucleoIncubador)
        {
            _context.Entry(nucleoIncubador).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await GetByIdAsync(id);
            if (entity != null)
            {
                _context.NucleoIncubadors.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}