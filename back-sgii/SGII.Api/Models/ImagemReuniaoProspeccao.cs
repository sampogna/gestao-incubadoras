using SGII.Api.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace SGII.Api.Models
{
    public partial class ImagemReuniaoProspeccao
    {
        public long Id { get; set; }
        public long? IdReuniaoProspeccao { get; set; }
        public byte[]? Arquivo { get; set; } = null!;
        public string? Nome { get; set; }


        [NotMapped]
        public string? ArquivoBase64 { get; set; } = null;
        [NotMapped]
        [JsonIgnore]
        public virtual ReuniaoProspeccao ReuniaoProspeccao { get; set; } = null!;
    }
}
