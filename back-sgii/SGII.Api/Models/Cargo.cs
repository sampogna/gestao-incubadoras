using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class Cargo
    {
        public Cargo()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public int Id { get; set; }
        public string? Descricao { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
