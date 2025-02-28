using Microsoft.EntityFrameworkCore;
using SGII.Api.Models;
using SGII.Api.Models.DTO;
using SGII.Api.Repository.Interfaces;

namespace SGII.Api.Repository
{
    public class AuthRepository : IAuthRepository
    {
        private readonly IncubadoraContext _context;

        public AuthRepository(IncubadoraContext context)
        {
            _context = context;
        }
        
        public async Task<Usuario> GetUserFromDb(UsuarioAutenticaDTO usuario)
        {
            return await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == usuario.email);
        }

    }
}
