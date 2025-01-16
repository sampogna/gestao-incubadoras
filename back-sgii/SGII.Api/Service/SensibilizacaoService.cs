using SGII.Api.Models;
using SGII.Api.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SGII.Api.Services
{
    public class SensibilizacaoService : ISensibilizacaoService
    {
        private readonly ISensibilizacaoRepository _repository;

        public SensibilizacaoService(ISensibilizacaoRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Sensibilizacao>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<(IEnumerable<Sensibilizacao> Data, int TotalCount)> GetAllPaginatedAsync(int page, int pageSize, string term)
        {
            return await _repository.GetAllPaginatedAsync(page, pageSize, term);
        }

        public async Task<Sensibilizacao> GetByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task AddAsync(Sensibilizacao sensibilizacao)
        {
            await _repository.AddAsync(sensibilizacao);
        }

        public async Task UpdateAsync(Sensibilizacao sensibilizacao)
        {
            await _repository.UpdateAsync(sensibilizacao);
        }

        public async Task DeleteAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }
    }
}
