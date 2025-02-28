using SGII.Api.Models;
using SGII.Api.Models.DTO;

namespace SGII.Api.Repository.Interfaces
{
    public interface IAuthRepository
    {
        Task<Usuario> GetUserFromDb(UsuarioAutenticaDTO usuario);
    }
}
