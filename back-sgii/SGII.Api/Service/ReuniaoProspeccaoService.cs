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
        private readonly ICurrentUserService _currentUserService;

        public ReuniaoProspeccaoService(IReuniaoProspeccaoRepository repository, ICurrentUserService currentUserService)
        {
            _repository = repository;
            _currentUserService = currentUserService;
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
            var userIdClaim = _currentUserService.UserId;
            reuniaoProspeccao.IdResponsavel = (long)userIdClaim;
            reuniaoProspeccao.IdUsuRegistrou = (long)userIdClaim;
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
