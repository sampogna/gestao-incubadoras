using SGII.Api.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace SGII.Api.Models
{
    public partial class Usuario
    {
        public long Id { get; set; }
        public string Nome { get; set; } = null!;
        public string Sobrenome { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Senha { get; set; } = null!;
        public int IdNucleoIncubador { get; set; }
        public TiposUsuario IdTipo { get; set; }
        public int? IdCargo { get; set; }

        [NotMapped]
        public virtual Cargo? IdCargoNavigation { get; set; }
        //public virtual NucleoIncubador IdNucleoIncubadorNavigation { get; set; } = null!;
        [NotMapped]
        public virtual ICollection<Capacitacao> CapacitacaoIdResponsavelNavigations { get; set; }
        [NotMapped]
        public virtual ICollection<Capacitacao> CapacitacaoIdUsuRegistrouNavigations { get; set; }
        [NotMapped]
        public virtual ICollection<DesafioInovacao> DesafioInovacaos { get; set; }
        [NotMapped]
        public virtual ICollection<Edital> Editals { get; set; }
        [NotMapped]
        public virtual ICollection<PreIncubacao> PreIncubacaoIdResponsavelNavigations { get; set; }
        [NotMapped]
        public virtual ICollection<PreIncubacao> PreIncubacaoIdUsuRegistrouNavigations { get; set; }
        [NotMapped]
        public virtual ICollection<Propostum> Proposta { get; set; }
        [NotMapped]
        public virtual ICollection<ReuniaoProspeccao> ReuniaoProspeccaos { get; set; }
        [NotMapped]
        public virtual ICollection<Sensibilizacao> SensibilizacaoIdUsuRegistrouNavigations { get; set; }
        [NotMapped]
        public virtual ICollection<Sensibilizacao> SensibilizacaoIdUsuarioResponsavelNavigations { get; set; }
    }
}
