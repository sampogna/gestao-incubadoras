using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace SGII.Api.Models
{
    public partial class ParticipanteDesafioInovacao
    {
        public long Id { get; set; }
        public long IdDesafioInovacao { get; set; }
        public string Nome { get; set; } = null!;

        [JsonIgnore]
        public virtual DesafioInovacao DesafioInovacao { get; set; } = null!;
    }
}
