using SGII.Api.Models;

namespace SGII.Api.Service.Interfaces
{
    public interface IReuniaoProspeccaoService
    {
        Task<IEnumerable<ReuniaoProspeccao>> GetAllAsync();
        Task<(IEnumerable<ReuniaoProspeccao> Data, int TotalCount)> GetAllPaginatedAsync(int page, int pageSize, string term);
        Task<ReuniaoProspeccao> GetByIdAsync(int id);
        Task AddAsync(ReuniaoProspeccao reuniaoProspeccao);
        Task UpdateAsync(ReuniaoProspeccao reuniaoProspeccao);
        Task DeleteAsync(int id);

        Task UploadImage(ImagemReuniaoProspeccao image);
    }
}
