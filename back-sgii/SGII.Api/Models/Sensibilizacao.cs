using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class Sensibilizacao
    {
        public Sensibilizacao()
        {
            ImagemSensibilizacaos = new HashSet<ImagemSensibilizacao>();
            ParticipanteSensibilizacaos = new HashSet<ParticipanteSensibilizacao>();
        }

        public long Id { get; set; }
        public int IdNucleoIncubador { get; set; }
        public int IdTipoSensibilizacao { get; set; }
        public string Tema { get; set; } = null!;
        public long IdUsuarioResponsavel { get; set; }
        public DateTime DataAcao { get; set; }
        public string Local { get; set; } = null!;
        public string Perfil { get; set; } = null!;
        public int NumeroSensibilizados { get; set; }
        public string? Observacoes { get; set; }
        public DateTime DataRegistro { get; set; }
        public long IdUsuRegistrou { get; set; }

        public virtual NucleoIncubador IdNucleoIncubadorNavigation { get; set; } = null!;
        public virtual TipoSensibilizacao IdTipoSensibilizacaoNavigation { get; set; } = null!;
        public virtual Usuario IdUsuRegistrouNavigation { get; set; } = null!;
        public virtual Usuario IdUsuarioResponsavelNavigation { get; set; } = null!;
        public virtual ICollection<ImagemSensibilizacao> ImagemSensibilizacaos { get; set; }
        public virtual ICollection<ParticipanteSensibilizacao> ParticipanteSensibilizacaos { get; set; }
    }
}
