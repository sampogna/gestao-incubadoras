using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class ReuniaoProspeccao
    {
        public ReuniaoProspeccao()
        {
            ImagemReuniaoProspeccaos = new HashSet<ImagemReuniaoProspeccao>();
        }

        public long Id { get; set; }
        public string Email { get; set; } = null!;
        public int IdNucleoIncubador { get; set; }
        public int IdTipoAcaoProspeccao { get; set; }
        public string TemaAcao { get; set; } = null!;
        public DateTime DataAcao { get; set; }
        public string Local { get; set; } = null!;
        public string Perfil { get; set; } = null!;
        public string Descricao { get; set; } = null!;
        public int IdEstagioMaturidade { get; set; }
        public string? Observacoes { get; set; }
        public long IdResponsavel { get; set; }
        public long IdUsuRegistrou { get; set; }
        public DateTime DataRegistro { get; set; }

        public virtual EstagioMaturidade IdEstagioMaturidadeNavigation { get; set; } = null!;
        public virtual NucleoIncubador IdNucleoIncubadorNavigation { get; set; } = null!;
        public virtual TipoAcaoProspeccao IdTipoAcaoProspeccaoNavigation { get; set; } = null!;
        public virtual Usuario IdUsuRegistrouNavigation { get; set; } = null!;
        public virtual ParticipanteReuniaoProspeccao? ParticipanteReuniaoProspeccao { get; set; }
        public virtual ICollection<ImagemReuniaoProspeccao> ImagemReuniaoProspeccaos { get; set; }
    }
}
