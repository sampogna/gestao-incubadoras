﻿using SGII.Api.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace SGII.Api.Models
{
    public partial class ImagemDesafioInovacao
    {
        public long Id { get; set; }
        public long IdDesafioInovacao { get; set; }
        public byte[] Arquivo { get; set; } = null!;
        public string? Nome { get; set; }


        [NotMapped]
        public string? ArquivoBase64 { get; set; } = null;

        public virtual DesafioInovacao IdDesafioInovacaoNavigation { get; set; } = null!;
    }
}
