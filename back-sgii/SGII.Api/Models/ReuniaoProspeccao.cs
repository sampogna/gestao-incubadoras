using SGII.Api.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace SGII.Api.Models
{
    public partial class ReuniaoProspeccao
    {
        public ReuniaoProspeccao()
        {
            ImagemReuniaoProspeccaos = new HashSet<ImagemReuniaoProspeccao>();
            ParticipanteReuniaoProspeccaos = new HashSet<ParticipanteReuniaoProspeccao>();
        }

        public long Id { get; set; }
        public string Email { get; set; } = null!;
        public int IdNucleoIncubador { get; set; }
        public TiposAcaoProspeccao IdTipoAcaoProspeccao { get; set; }
        public string TemaAcao { get; set; } = null!;
        public DateTime DataAcao { get; set; }
        public string Local { get; set; } = null!;
        public string Perfil { get; set; } = null!;
        public string Descricao { get; set; } = null!;
        public EstagiosMaturidadeProspeccao IdEstagioMaturidade { get; set; }
        public string? Observacoes { get; set; }
        public long IdResponsavel { get; set; }
        public long IdUsuRegistrou { get; set; }
        public DateTime DataRegistro { get; set; }

        [NotMapped]
        public virtual NucleoIncubador IdNucleoIncubadorNavigation { get; set; } = null!;
        [NotMapped]
        public virtual Usuario IdUsuRegistrouNavigation { get; set; } = null!;
        [NotMapped]
        public virtual ICollection<ParticipanteReuniaoProspeccao> ParticipanteReuniaoProspeccaos { get; set; }
        [NotMapped]
        public virtual ICollection<ImagemReuniaoProspeccao> ImagemReuniaoProspeccaos { get; set; }
    }
}
