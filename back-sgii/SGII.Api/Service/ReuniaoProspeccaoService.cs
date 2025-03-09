using SGII.Api.Models;
using SGII.Api.Repositories;
using SGII.Api.Repository.Interfaces;
using SGII.Api.Service.Interfaces;
using SGII.Api.Services;

namespace SGII.Api.Service
{
    public class ReuniaoProspeccaoService : IReuniaoProspeccaoService
    {
        private readonly IReuniaoProspeccaoRepository _repository;

        public ReuniaoProspeccaoService(IReuniaoProspeccaoRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<ReuniaoProspeccao>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<(IEnumerable<ReuniaoProspeccao> Data, int TotalCount)> GetAllPaginatedAsync(int page, int pageSize, string term)
        {
            return await _repository.GetAllPaginatedAsync(page, pageSize, term);
        }

        public async Task<ReuniaoProspeccao> GetByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task AddAsync(ReuniaoProspeccao reuniaoProspeccao)
        {
            await _repository.AddAsync(reuniaoProspeccao);
        }

        public async Task UpdateAsync(ReuniaoProspeccao reuniaoProspeccao)
        {
            await _repository.UpdateAsync(reuniaoProspeccao);
        }

        public async Task DeleteAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }

        public async Task UploadImage(ImagemReuniaoProspeccao image)
        {
            await _repository.UploadImage(image);
        }
    }
}
