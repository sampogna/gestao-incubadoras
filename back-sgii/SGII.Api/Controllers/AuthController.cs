using Microsoft.AspNetCore.Mvc;
using SGII.Api.Models;
using SGII.Api.Models.DTO;
using SGII.Api.Service.Interfaces;
using SGII.Api.Services;

namespace SGII.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {

        private readonly IAuthService _service;

        public AuthController(IAuthService service)
        {
            _service = service;
        }

        [HttpPost("SignIn")]
        public async Task<IActionResult> Authenticate([FromBody] UsuarioAutenticaDTO usuario)
        {
            try
            {
                if (usuario == null)
                {
                    return BadRequest();
                }

                var usuarioNoDB = await _service.Authenticate(usuario);

                return Ok(usuarioNoDB);
            }
            catch (ArgumentException e)
            {
                return NotFound(e.Message);
            }
        }

    }
}
