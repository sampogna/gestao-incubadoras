using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class ImagemPreIncubacao
    {
        public long Id { get; set; }
        public long IdPreIncubacao { get; set; }
        public byte[] Imagem { get; set; } = null!;

        public virtual PreIncubacao IdPreIncubacaoNavigation { get; set; } = null!;
    }
}
