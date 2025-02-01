using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SGII.Api.Models;
using SGII.Api.Services;
using System.Threading.Tasks;

namespace SGII.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SensibilizacaoController : ControllerBase
    {
        private readonly ISensibilizacaoService _service;

        public SensibilizacaoController(ISensibilizacaoService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var nucleos = await _service.GetAllAsync();
            return Ok(nucleos);
        }

        [HttpGet("paginated")]
        public async Task<IActionResult> GetAllPaginated([FromQuery] int page = 1, [FromQuery] int pageSize = 10, [FromQuery] string? filter = null)
        {
            if (page < 1 || pageSize < 1)
                return BadRequest("Page and PageSize must be greater than zero.");

            var (data, totalCount) = await _service.GetAllPaginatedAsync(page, pageSize, filter);

            var response = new
            {
                TotalCount = totalCount,
                Page = page,
                PageSize = pageSize,
                TotalPages = (int)Math.Ceiling((double)totalCount / pageSize),
                Data = data
            };

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var nucleo = await _service.GetByIdAsync(id);
            if (nucleo == null)
                return NotFound();

            return Ok(nucleo);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Sensibilizacao Sensibilizacao)
        {
            foreach (var image in Sensibilizacao.ImagemSensibilizacaos)
            {
                if (!string.IsNullOrEmpty(image.ArquivoBase64))
                {
                    // Convert Base64 string to byte[]
                    image.Arquivo = Convert.FromBase64String(image.ArquivoBase64);
                }
            }

            await _service.AddAsync(Sensibilizacao);
            return CreatedAtAction(nameof(GetById), new { id = Sensibilizacao.Id }, Sensibilizacao);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Sensibilizacao Sensibilizacao)
        {
            if (id != Sensibilizacao.Id)
                return BadRequest();

            foreach (var image in Sensibilizacao.ImagemSensibilizacaos)
            {
                if (!string.IsNullOrEmpty(image.ArquivoBase64))
                {
                    // Convert Base64 string to byte[]
                    image.Arquivo = Convert.FromBase64String(image.ArquivoBase64);
                }
            }

            await _service.UpdateAsync(Sensibilizacao);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.DeleteAsync(id);
            return NoContent();
        }

        [HttpPost]
        [Route("api/imagem-sensibilizacao")]
        public async Task<IActionResult> UploadImage([FromForm] long idSensibilizacao, [FromForm] IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            using (var memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);
                var image = new ImagemSensibilizacao
                {
                    IdSensibilizacao = idSensibilizacao,
                    Arquivo = memoryStream.ToArray()
                };

                //// Save to the database
                await _service.UploadImage(image);
            }

            return Ok("Image uploaded successfully.");
        }
    }
}