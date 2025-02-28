using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SGII.Api.Models;
using SGII.Api.Models.DTO;
using SGII.Api.Service.Interfaces;
using SGII.Api.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SGII.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {

        private readonly IAuthService _service;
        private readonly IConfiguration _configuration;

        public AuthController(IAuthService service, IConfiguration configuration)
        {
            _service = service;
            _configuration = configuration;
        }

        [HttpPost("SignIn")]
        [AllowAnonymous]
        public async Task<IActionResult> Authenticate([FromBody] UsuarioAutenticaDTO usuario)
        {
            try
            {
                if (usuario == null)
                {
                    return BadRequest();
                }

                var usuarioNoDB = await _service.Authenticate(usuario);

                string token = CreateToken(usuarioNoDB);

                return Ok(token);
            }
            catch (ArgumentException e)
            {
                return NotFound(e.Message);
            }
        }

        private string CreateToken(Usuario user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email,user.Email),
                new Claim(ClaimTypes.Name, $"{user.Nome} {user.Sobrenome}"),
                new Claim(ClaimTypes.Role, "Colaborador")
            };

            var key = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

    }
}
