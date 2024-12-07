using System;
using System.Collections.Generic;

namespace SGII.Api.Models
{
    public partial class ImagemReuniaoProspeccao
    {
        public long Id { get; set; }
        public long IdReuniaoProspeccao { get; set; }
        public byte[] Arquivo { get; set; } = null!;

        public virtual ReuniaoProspeccao IdReuniaoProspeccaoNavigation { get; set; } = null!;
    }
}
