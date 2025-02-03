using SGII.Api.Models;
using SGII.Api.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SGII.Api.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _repository;

        public UsuarioService(IUsuarioRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Usuario>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<(IEnumerable<Usuario> Data, int TotalCount)> GetAllPaginatedAsync(int page, int pageSize, string term)
        {
            return await _repository.GetAllPaginatedAsync(page, pageSize, term);
        }

        public async Task<Usuario> GetByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task AddAsync(Usuario usuario)
        {
            await _repository.AddAsync(usuario);
        }

        public async Task UpdateAsync(Usuario usuario)
        {
            await _repository.UpdateAsync(usuario);
        }

        public async Task DeleteAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }
    }
}
