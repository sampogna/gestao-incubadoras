using SGII.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SGII.Api.Services
{
    public interface ISensibilizacaoService
    {
        Task<IEnumerable<Sensibilizacao>> GetAllAsync();
        Task<(IEnumerable<Sensibilizacao> Data, int TotalCount)> GetAllPaginatedAsync(int page, int pageSize, string term);
        Task<Sensibilizacao> GetByIdAsync(int id);
        Task AddAsync(Sensibilizacao sensibilizacao);
        Task UpdateAsync(Sensibilizacao sensibilizacao);
        Task DeleteAsync(int id);
    }
}