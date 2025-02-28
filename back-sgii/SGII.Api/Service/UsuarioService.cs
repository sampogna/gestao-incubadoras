using SGII.Api.Helpers;
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

        public async Task<Usuario> GetByIdAsync(long id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task AddAsync(Usuario usuario)
        {

            //TO DO: Add password strength validation

            //Caso o email seja invalido, retorna um argument exception
            if (!usuario.IsValidEmail())
                throw new ArgumentException("E-mail inserido inválido, não é possível registrar.");

            //Caso email ja esteja sendo usado, retorna um argument exception
            if (await _repository.CheckIfEmailIsAlreadyRegistered(usuario.Email))
                throw new ArgumentException("E-mail já está sendo usado na plataforma. Por favor, escolha outro.");

            usuario.Senha = PasswordHasher.HashPassword(usuario.Senha);

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
