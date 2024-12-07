using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class IdeiaDesafioInovacao
    {
        public long Id { get; set; }
        public long IdDesafioInovacao { get; set; }
        public string Ideia { get; set; } = null!;

        public virtual DesafioInovacao IdDesafioInovacaoNavigation { get; set; } = null!;
    }
}
