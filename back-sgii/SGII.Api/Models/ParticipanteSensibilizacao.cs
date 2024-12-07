using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class ParticipanteSensibilizacao
    {
        public int Id { get; set; }
        public string Nome { get; set; } = null!;
        public long IdSensibilizacao { get; set; }

        public virtual Sensibilizacao IdSensibilizacaoNavigation { get; set; } = null!;
    }
}
