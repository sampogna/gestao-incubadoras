using SGII.Api.Models;
using SGII.Api.Repositories;
using SGII.Api.Repository.Interfaces;
using SGII.Api.Service.Interfaces;
using SGII.Api.Services;

namespace SGII.Api.Service
{
    public class DesafioInovacaoService : IDesafioInovacaoService
    {
        private readonly IDesafioInovacaoRepository _repository;

        public DesafioInovacaoService(IDesafioInovacaoRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<DesafioInovacao>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<(IEnumerable<DesafioInovacao> Data, int TotalCount)> GetAllPaginatedAsync(int page, int pageSize, string term)
        {
            return await _repository.GetAllPaginatedAsync(page, pageSize, term);
        }

        public async Task<DesafioInovacao> GetByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task AddAsync(DesafioInovacao desafioInovacao)
        {
            await _repository.AddAsync(desafioInovacao);
        }

        public async Task UpdateAsync(DesafioInovacao desafioInovacao)
        {
            await _repository.UpdateAsync(desafioInovacao);
        }

        public async Task DeleteAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }

        public async Task UploadImage(ImagemDesafioInovacao image)
        {
            await _repository.UploadImage(image);
        }
    }
}
