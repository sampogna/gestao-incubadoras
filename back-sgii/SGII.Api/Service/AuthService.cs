using SGII.Api.Helpers;
using SGII.Api.Models;
using SGII.Api.Models.DTO;
using SGII.Api.Repositories;
using SGII.Api.Repository.Interfaces;
using SGII.Api.Service.Interfaces;

namespace SGII.Api.Services
{
    public class AuthService : IAuthService
    {
        private readonly IAuthRepository _repository;

        public AuthService(IAuthRepository repository)
        {
            _repository = repository;
        }

        public async Task<Usuario> Authenticate(UsuarioAutenticaDTO usuario)
        {

            var userFromDB =  await _repository.GetUserFromDb(usuario);

            if (userFromDB == null)
                throw new ArgumentException("E-mail inválido.");

            if (!PasswordHasher.VerifyPassword(usuario.senha, userFromDB.Senha))
            {
                throw new ArgumentException("Senha inválida.");
            }

            return userFromDB;
        }
    }
}
