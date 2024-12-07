using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class ParticipanteDesafioInovacao
    {
        public long Id { get; set; }
        public long IdDesafioInovacao { get; set; }
        public string Nome { get; set; } = null!;

        public virtual DesafioInovacao IdDesafioInovacaoNavigation { get; set; } = null!;
    }
}
