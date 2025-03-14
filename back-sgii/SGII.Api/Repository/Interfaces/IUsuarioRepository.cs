﻿using SGII.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SGII.Api.Repositories
{
    public interface IUsuarioRepository
    {
        Task<IEnumerable<Usuario>> GetAllAsync();
        Task<(IEnumerable<Usuario> Data, int TotalCount)> GetAllPaginatedAsync(int page, int pageSize, string term);
        Task<Usuario> GetByIdAsync(long id);
        Task AddAsync(Usuario usuario);
        Task UpdateAsync(Usuario usuario);
        Task DeleteAsync(int id);

        Task<bool> CheckIfEmailIsAlreadyRegistered(string email);
    }
}