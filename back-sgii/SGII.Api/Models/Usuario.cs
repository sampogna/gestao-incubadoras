using SGII.Api.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;

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

        [NotMapped]
        public string RefreshToken { get; set; }
        [NotMapped]
        public DateTime TokenCreated { get; set; }
        [NotMapped]
        public DateTime TokenExpires { get; set; }

        //BEGIN - Auxiliar methods

        public bool IsValidEmail()
        {
            var emailRegex = new Regex(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
            return emailRegex.IsMatch(this.Email);
        }
    }
}
