using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class ImagemCapacitacao
    {
        public long Id { get; set; }
        public long IdCapacitacao { get; set; }
        public byte[] Arquivo { get; set; } = null!;

        public virtual Capacitacao IdCapacitacaoNavigation { get; set; } = null!;
    }
}
