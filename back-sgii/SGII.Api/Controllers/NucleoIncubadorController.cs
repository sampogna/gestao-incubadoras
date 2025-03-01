using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SGII.Api.Models;
using SGII.Api.Services;
using System.Threading.Tasks;

namespace SGII.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NucleoIncubadorController : ControllerBase
    {
        private readonly INucleoIncubadorService _service;

        public NucleoIncubadorController(INucleoIncubadorService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var nucleos = await _service.GetAllAsync();
                return Ok(nucleos);
            }
            catch (Exception e)
            {

                throw e;
            }
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
        public async Task<IActionResult> Add([FromBody] NucleoIncubador nucleoIncubador)
        {
            await _service.AddAsync(nucleoIncubador);
            return CreatedAtAction(nameof(GetById), new { id = nucleoIncubador.Id }, nucleoIncubador);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] NucleoIncubador nucleoIncubador)
        {
            if (id != nucleoIncubador.Id)
                return BadRequest();

            await _service.UpdateAsync(nucleoIncubador);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _service.DeleteAsync(id);
                return NoContent();
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}