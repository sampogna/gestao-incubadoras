using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class NucleoIncubador
    {
        public NucleoIncubador()
        {
            Capacitacaos = new HashSet<Capacitacao>();
            DesafioInovacaos = new HashSet<DesafioInovacao>();
            PreIncubacaos = new HashSet<PreIncubacao>();
            Proposta = new HashSet<Propostum>();
            ReuniaoProspeccaos = new HashSet<ReuniaoProspeccao>();
            Sensibilizacaos = new HashSet<Sensibilizacao>();
            Usuarios = new HashSet<Usuario>();
        }

        public int Id { get; set; }
        public string? Descricao { get; set; }

        public virtual ICollection<Capacitacao> Capacitacaos { get; set; }
        public virtual ICollection<DesafioInovacao> DesafioInovacaos { get; set; }
        public virtual ICollection<PreIncubacao> PreIncubacaos { get; set; }
        public virtual ICollection<Propostum> Proposta { get; set; }
        public virtual ICollection<ReuniaoProspeccao> ReuniaoProspeccaos { get; set; }
        public virtual ICollection<Sensibilizacao> Sensibilizacaos { get; set; }
        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
