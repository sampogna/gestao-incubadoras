using SGII.Api.Models;

namespace SGII.Api.Repository.Interfaces
{
    public interface IDesafioInovacaoRepository
    {
        Task<IEnumerable<DesafioInovacao>> GetAllAsync();
        Task<(IEnumerable<DesafioInovacao> Data, int TotalCount)> GetAllPaginatedAsync(int page, int pageSize, string term);
        Task<DesafioInovacao> GetByIdAsync(int id);
        Task AddAsync(DesafioInovacao desafioInovacao);
        Task UpdateAsync(DesafioInovacao desafioInovacao);
        Task DeleteAsync(int id);
        Task UploadImage(ImagemDesafioInovacao image);
    }
}
