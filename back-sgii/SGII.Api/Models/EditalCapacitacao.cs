using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class EditalCapacitacao
    {
        public EditalCapacitacao()
        {
            Capacitacaos = new HashSet<Capacitacao>();
        }

        public long Id { get; set; }
        public byte[] Arquivo { get; set; } = null!;

        public virtual ICollection<Capacitacao> Capacitacaos { get; set; }
    }
}
