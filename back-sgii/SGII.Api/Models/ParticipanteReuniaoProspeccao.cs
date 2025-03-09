using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace SGII.Api.Models
{
    public partial class ParticipanteReuniaoProspeccao
    {
        public long Id { get; set; }
        public long IdReuniaoProspeccao { get; set; }
        public string NomeParticipante { get; set; } = null!;
        public string? Contato { get; set; }

        [JsonIgnore]
        public virtual ReuniaoProspeccao? ReuniaoProspeccao { get; set; } = null!;
    }
}
