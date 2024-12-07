using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class Propostum
    {
        public long Id { get; set; }
        public string Nome { get; set; } = null!;
        public int IdModalidade { get; set; }
        public string Email { get; set; } = null!;
        public string Telefone { get; set; } = null!;
        public string IdCampus { get; set; } = null!;
        public DateTime DataRegistro { get; set; }
        public long IdUsuRegistrou { get; set; }
        public int IdNucleoIncubador { get; set; }
        public int IdStatus { get; set; }
        public long IdEdital { get; set; }

        public virtual Edital IdEditalNavigation { get; set; } = null!;
        public virtual NucleoIncubador IdNucleoIncubadorNavigation { get; set; } = null!;
        public virtual StatusPropostum IdStatusNavigation { get; set; } = null!;
        public virtual Usuario IdUsuRegistrouNavigation { get; set; } = null!;
    }
}
