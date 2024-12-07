using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class ImagemSensibilizacao
    {
        public long Id { get; set; }
        public long IdSensibilizacao { get; set; }
        public byte[] Arquivo { get; set; } = null!;

        public virtual Sensibilizacao IdSensibilizacaoNavigation { get; set; } = null!;
    }
}
