using SGII.Api.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace SGII.Api.Models
{
    public partial class ImagemSensibilizacao
    {
        public long Id { get; set; }
        public long? IdSensibilizacao { get; set; }
        public byte[]? Arquivo { get; set; } = null!;
        public TiposImagemSensibilizacao? Tipo { get; set; }
        public string? Nome { get; set; }


        [NotMapped]
        public string? ArquivoBase64 { get; set; } = null;

        [JsonIgnore]
        public virtual Sensibilizacao? Sensibilizacao { get; set; } = null!;
    }
}
