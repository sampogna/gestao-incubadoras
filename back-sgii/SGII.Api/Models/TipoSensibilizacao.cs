using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class TipoSensibilizacao
    {
        public TipoSensibilizacao()
        {
            Sensibilizacaos = new HashSet<Sensibilizacao>();
        }

        public int Id { get; set; }
        public string Descricao { get; set; } = null!;

        public virtual ICollection<Sensibilizacao> Sensibilizacaos { get; set; }
    }
}
