using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class EstagioMaturidade
    {
        public EstagioMaturidade()
        {
            ReuniaoProspeccaos = new HashSet<ReuniaoProspeccao>();
        }

        public int Id { get; set; }
        public string? Descricao { get; set; }

        public virtual ICollection<ReuniaoProspeccao> ReuniaoProspeccaos { get; set; }
    }
}
