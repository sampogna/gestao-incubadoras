using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class PreIncubacao
    {
        public PreIncubacao()
        {
            ImagemPreIncubacaos = new HashSet<ImagemPreIncubacao>();
            ParticipantePreIncubacaos = new HashSet<ParticipantePreIncubacao>();
        }

        public long Id { get; set; }
        public string Email { get; set; } = null!;
        public int IdNucleoIncubador { get; set; }
        public int IdTipoAcaoQualificacao { get; set; }
        public string Titulo { get; set; } = null!;
        public DateTime DataInicio { get; set; }
        public DateTime DataFim { get; set; }
        public string Local { get; set; } = null!;
        public string Perfil { get; set; } = null!;
        public string? Observacoes { get; set; }
        public long IdUsuRegistrou { get; set; }
        public DateTime DataRegistro { get; set; }
        public byte[] Edital { get; set; } = null!;
        public long IdResponsavel { get; set; }
        public int NumeroParticipantes { get; set; }
        public byte[] Resumo { get; set; } = null!;

        public virtual NucleoIncubador IdNucleoIncubadorNavigation { get; set; } = null!;
        public virtual Usuario IdResponsavelNavigation { get; set; } = null!;
        public virtual Usuario IdUsuRegistrouNavigation { get; set; } = null!;
        public virtual ICollection<ImagemPreIncubacao> ImagemPreIncubacaos { get; set; }
        public virtual ICollection<ParticipantePreIncubacao> ParticipantePreIncubacaos { get; set; }
    }
}
