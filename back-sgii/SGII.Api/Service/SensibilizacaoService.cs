using SGII.Api.Models;
using SGII.Api.Repositories;
using SGII.Api.Service.Interfaces;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SGII.Api.Services
{
    public class SensibilizacaoService : ISensibilizacaoService
    {
        private readonly ISensibilizacaoRepository _repository;
        private readonly ICurrentUserService _currentUser;


        public SensibilizacaoService(ISensibilizacaoRepository repository, ICurrentUserService currentUser)
        {
            _repository = repository;
            _currentUser = currentUser;
        }

        public async Task<IEnumerable<Sensibilizacao>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<(IEnumerable<Sensibilizacao> Data, int TotalCount)> GetAllPaginatedAsync(int page, int pageSize, string term)
        {
            return await _repository.GetAllPaginatedAsync(page, pageSize, term);
        }

        public async Task<Sensibilizacao> GetByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task AddAsync(Sensibilizacao sensibilizacao)
        {
            var userIdClaim = _currentUser.UserId;
            sensibilizacao.IdUsuarioResponsavel = (long)userIdClaim;
            sensibilizacao.IdUsuRegistrou = (long)userIdClaim;

            await _repository.AddAsync(sensibilizacao);
        }

        public async Task UpdateAsync(Sensibilizacao sensibilizacao)
        {
            await _repository.UpdateAsync(sensibilizacao);
        }

        public async Task DeleteAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }

        public async Task UploadImage(ImagemSensibilizacao image)
        {
            await _repository.UploadImage(image);
        }
    }
}
