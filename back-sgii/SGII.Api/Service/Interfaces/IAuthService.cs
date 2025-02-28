using SGII.Api.Models;
using SGII.Api.Models.DTO;

namespace SGII.Api.Service.Interfaces
{
    public interface IAuthService
    {
        Task<Usuario> Authenticate(UsuarioAutenticaDTO usuario);
    }
}
