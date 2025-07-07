using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace SGII.Api.Models
{
    public partial class IdeiaDesafioInovacao
    {
        public long Id { get; set; }
        public long IdDesafioInovacao { get; set; }
        public string Ideia { get; set; } = null!;
        [NotMapped]
        [JsonIgnore]
        public virtual DesafioInovacao IdDesafioInovacaoNavigation { get; set; } = null!;
    }
}
