using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class ParticipanteReuniaoProspeccao
    {
        public long Id { get; set; }
        public long IdReuniaoProspeccao { get; set; }
        public string NomeParticipante { get; set; } = null!;
        public string? Contato { get; set; }

        public virtual ReuniaoProspeccao IdNavigation { get; set; } = null!;
    }
}
