using Microsoft.EntityFrameworkCore;
using SGII.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SGII.Api.Repositories
{
    public interface INucleoIncubadorRepository
    {
        Task<IEnumerable<NucleoIncubador>> GetAllAsync();
        Task<(IEnumerable<NucleoIncubador> Data, int TotalCount)> GetAllPaginatedAsync(int page, int pageSize, string term);
        Task<NucleoIncubador> GetByIdAsync(int id);
        Task AddAsync(NucleoIncubador nucleoIncubador);
        Task UpdateAsync(NucleoIncubador nucleoIncubador);
        Task DeleteAsync(int id);

    }
}