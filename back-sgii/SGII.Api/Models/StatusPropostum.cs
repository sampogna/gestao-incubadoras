using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class StatusPropostum
    {
        public StatusPropostum()
        {
            Proposta = new HashSet<Propostum>();
        }

        public int Id { get; set; }
        public string Descricao { get; set; } = null!;

        public virtual ICollection<Propostum> Proposta { get; set; }
    }
}
