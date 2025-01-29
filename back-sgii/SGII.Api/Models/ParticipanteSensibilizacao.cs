using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.InteropServices;
using System.Text.Json.Serialization;

namespace SGII.Api.Models
{
    public partial class ParticipanteSensibilizacao
    {
        public int Id { get; set; }
        public string Nome { get; set; } = null!;
        public long? IdSensibilizacao { get; set; }

        [JsonIgnore]
        public virtual Sensibilizacao? Sensibilizacao { get; set; } = null!;

    }
}
