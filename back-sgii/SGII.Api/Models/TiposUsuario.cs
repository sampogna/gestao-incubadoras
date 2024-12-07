using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class TiposUsuario
    {
        public TiposUsuario()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public int Id { get; set; }
        public string Descricao { get; set; } = null!;

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
