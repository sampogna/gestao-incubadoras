using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class ImagemDesafioInovacao
    {
        public long Id { get; set; }
        public long IdDesafioInovacao { get; set; }
        public byte[] Arquivo { get; set; } = null!;

        public virtual DesafioInovacao IdDesafioInovacaoNavigation { get; set; } = null!;
    }
}
