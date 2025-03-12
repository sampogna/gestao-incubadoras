using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace SGII.Api.Models
{
    public partial class DesafioInovacao
    {
        public DesafioInovacao()
        {
            IdeiaDesafioInovacaos = new HashSet<IdeiaDesafioInovacao>();
            ImagemDesafioInovacaos = new HashSet<ImagemDesafioInovacao>();
            ParticipanteDesafioInovacaos = new HashSet<ParticipanteDesafioInovacao>();
        }

        public long Id { get; set; }
        public string Email { get; set; } = null!;
        public int IdNucleoIncubador { get; set; }
        public string Titulo { get; set; } = null!;
        public long IdResponsavel { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFinal { get; set; }
        public string Local { get; set; } = null!;
        public string Perfil { get; set; } = null!;
        public int NumeroOportunidades { get; set; }
        public string? Observacoes { get; set; }

        [NotMapped]
        public virtual NucleoIncubador IdNucleoIncubadorNavigation { get; set; } = null!;
        [NotMapped]
        public virtual Usuario IdResponsavelNavigation { get; set; } = null!;
        [NotMapped]
        public virtual ICollection<IdeiaDesafioInovacao> IdeiaDesafioInovacaos { get; set; }
        [NotMapped]
        public virtual ICollection<ImagemDesafioInovacao> ImagemDesafioInovacaos { get; set; }
        [NotMapped]
        public virtual ICollection<ParticipanteDesafioInovacao> ParticipanteDesafioInovacaos { get; set; }
    }
}
