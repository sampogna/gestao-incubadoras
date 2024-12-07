using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class Edital
    {
        public Edital()
        {
            Proposta = new HashSet<Propostum>();
        }

        public long Id { get; set; }
        public byte[] Arquivo { get; set; } = null!;
        public long IdUsuRegistrou { get; set; }
        public DateTime DataRegistro { get; set; }

        public virtual Usuario IdUsuRegistrouNavigation { get; set; } = null!;
        public virtual ICollection<Propostum> Proposta { get; set; }
    }
}
