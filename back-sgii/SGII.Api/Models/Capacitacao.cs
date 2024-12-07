using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class Capacitacao
    {
        public Capacitacao()
        {
            ImagemCapacitacaos = new HashSet<ImagemCapacitacao>();
            ParticipanteCapacitacaos = new HashSet<ParticipanteCapacitacao>();
        }

        public long Id { get; set; }
        public string Email { get; set; } = null!;
        public int IdNucleoIncubador { get; set; }
        public string Tema { get; set; } = null!;
        public long IdResponsavel { get; set; }
        public DateTime Data { get; set; }
        public string Local { get; set; } = null!;
        public string NumeroParticipantes { get; set; } = null!;
        public string? Observacoes { get; set; }
        public long IdEdital { get; set; }
        public long IdUsuRegistrou { get; set; }
        public DateTime DataRegistro { get; set; }

        public virtual EditalCapacitacao IdEditalNavigation { get; set; } = null!;
        public virtual NucleoIncubador IdNucleoIncubadorNavigation { get; set; } = null!;
        public virtual Usuario IdResponsavelNavigation { get; set; } = null!;
        public virtual Usuario IdUsuRegistrouNavigation { get; set; } = null!;
        public virtual ICollection<ImagemCapacitacao> ImagemCapacitacaos { get; set; }
        public virtual ICollection<ParticipanteCapacitacao> ParticipanteCapacitacaos { get; set; }
    }
}
