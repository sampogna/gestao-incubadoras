using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class ParticipanteCapacitacao
    {
        public long Id { get; set; }
        public long IdCapacitacao { get; set; }
        public string Nome { get; set; } = null!;
        public string? Contato { get; set; }

        public virtual Capacitacao IdCapacitacaoNavigation { get; set; } = null!;
    }
}
