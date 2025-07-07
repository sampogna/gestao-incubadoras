using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml;
using SGII.Api.Models;
using SGII.Api.Services;
using System.Threading.Tasks;

namespace SGII.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioService _service;

        public UsuarioController(IUsuarioService service)
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
        public async Task<IActionResult> GetById(long id)
        {
            var usuario = await _service.GetByIdAsync(id);
            if (usuario == null)
                return NotFound();

            return Ok(usuario);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Usuario usuario)
        {
            try
            {
                await _service.AddAsync(usuario);
                return CreatedAtAction(nameof(GetById), new { id = usuario.Id }, usuario);
            }
            catch (ArgumentException e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Usuario usuario)
        {
            if (id != usuario.Id)
                return BadRequest();

            await _service.UpdateAsync(usuario);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.DeleteAsync(id);
            return NoContent();
        }

        [HttpGet("export-excel")]
        public async Task<IActionResult> ExportToExcel()
        {
            var raw = await _service.GetAllAsync(); // Replace with your real data source
            var dataDTO = raw.Select(x =>
            new {
                Id = x.Id,
                Nome = x.Nome,
                Email = x.Email,
                Senha = x.Senha,
                IdNucleoIncubador = x.IdNucleoIncubador,
                NucleoIncubador = x.NucleoIncubador.Descricao
            });
            using var package = new ExcelPackage();

            var worksheet = package.Workbook.Worksheets.Add("Data");
            worksheet.Cells["A1"].LoadFromCollection(dataDTO, PrintHeaders: true);

            var stream = new MemoryStream();
            package.SaveAs(stream);
            stream.Position = 0;

            var contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
            var fileName = "data-export.xlsx";

            return File(stream, contentType, fileName);
        }
    }
}