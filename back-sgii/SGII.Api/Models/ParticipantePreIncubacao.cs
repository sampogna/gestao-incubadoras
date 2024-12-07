using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class ParticipantePreIncubacao
    {
        public long Id { get; set; }
        public long IdPreIncubacao { get; set; }
        public string Nome { get; set; } = null!;
        public string? Contato { get; set; }

        public virtual PreIncubacao IdPreIncubacaoNavigation { get; set; } = null!;
    }
}
