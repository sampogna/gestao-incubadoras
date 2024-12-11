using SGII.Api.Models;
using SGII.Api.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SGII.Api.Services
{
    public class NucleoIncubadorService : INucleoIncubadorService
    {
        private readonly INucleoIncubadorRepository _repository;

        public NucleoIncubadorService(INucleoIncubadorRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<NucleoIncubador>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<(IEnumerable<NucleoIncubador> Data, int TotalCount)> GetAllPaginatedAsync(int page, int pageSize, string term)
        {
            return await _repository.GetAllPaginatedAsync(page, pageSize, term);
        }

        public async Task<NucleoIncubador> GetByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task AddAsync(NucleoIncubador nucleoIncubador)
        {
            await _repository.AddAsync(nucleoIncubador);
        }

        public async Task UpdateAsync(NucleoIncubador nucleoIncubador)
        {
            await _repository.UpdateAsync(nucleoIncubador);
        }

        public async Task DeleteAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }
    }
}
