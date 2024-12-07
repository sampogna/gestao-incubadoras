using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class Usuario
    {
        public Usuario()
        {
            CapacitacaoIdResponsavelNavigations = new HashSet<Capacitacao>();
            CapacitacaoIdUsuRegistrouNavigations = new HashSet<Capacitacao>();
            DesafioInovacaos = new HashSet<DesafioInovacao>();
            Editals = new HashSet<Edital>();
            PreIncubacaoIdResponsavelNavigations = new HashSet<PreIncubacao>();
            PreIncubacaoIdUsuRegistrouNavigations = new HashSet<PreIncubacao>();
            Proposta = new HashSet<Propostum>();
            ReuniaoProspeccaos = new HashSet<ReuniaoProspeccao>();
            SensibilizacaoIdUsuRegistrouNavigations = new HashSet<Sensibilizacao>();
            SensibilizacaoIdUsuarioResponsavelNavigations = new HashSet<Sensibilizacao>();
        }

        public long Id { get; set; }
        public string Nome { get; set; } = null!;
        public string Sobrenome { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Senha { get; set; } = null!;
        public int IdNucleoIncubador { get; set; }
        public int IdTipo { get; set; }
        public int? IdCargo { get; set; }

        public virtual Cargo? IdCargoNavigation { get; set; }
        public virtual NucleoIncubador IdNucleoIncubadorNavigation { get; set; } = null!;
        public virtual TiposUsuario IdTipoNavigation { get; set; } = null!;
        public virtual ICollection<Capacitacao> CapacitacaoIdResponsavelNavigations { get; set; }
        public virtual ICollection<Capacitacao> CapacitacaoIdUsuRegistrouNavigations { get; set; }
        public virtual ICollection<DesafioInovacao> DesafioInovacaos { get; set; }
        public virtual ICollection<Edital> Editals { get; set; }
        public virtual ICollection<PreIncubacao> PreIncubacaoIdResponsavelNavigations { get; set; }
        public virtual ICollection<PreIncubacao> PreIncubacaoIdUsuRegistrouNavigations { get; set; }
        public virtual ICollection<Propostum> Proposta { get; set; }
        public virtual ICollection<ReuniaoProspeccao> ReuniaoProspeccaos { get; set; }
        public virtual ICollection<Sensibilizacao> SensibilizacaoIdUsuRegistrouNavigations { get; set; }
        public virtual ICollection<Sensibilizacao> SensibilizacaoIdUsuarioResponsavelNavigations { get; set; }
    }
}
