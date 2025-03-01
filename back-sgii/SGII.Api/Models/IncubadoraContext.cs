using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SGII.Api.Models
{
    public partial class IncubadoraContext : DbContext
    {
        public IncubadoraContext()
        {
        }

        public IncubadoraContext(DbContextOptions<IncubadoraContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CampusPropostum> CampusProposta { get; set; } = null!;
        public virtual DbSet<Capacitacao> Capacitacaos { get; set; } = null!;
        public virtual DbSet<DesafioInovacao> DesafioInovacaos { get; set; } = null!;
        public virtual DbSet<Edital> Editals { get; set; } = null!;
        public virtual DbSet<EditalCapacitacao> EditalCapacitacaos { get; set; } = null!;
        public virtual DbSet<EstagioMaturidade> EstagioMaturidades { get; set; } = null!;
        public virtual DbSet<IdeiaDesafioInovacao> IdeiaDesafioInovacaos { get; set; } = null!;
        public virtual DbSet<ImagemCapacitacao> ImagemCapacitacaos { get; set; } = null!;
        public virtual DbSet<ImagemDesafioInovacao> ImagemDesafioInovacaos { get; set; } = null!;
        public virtual DbSet<ImagemPreIncubacao> ImagemPreIncubacaos { get; set; } = null!;
        public virtual DbSet<ImagemReuniaoProspeccao> ImagemReuniaoProspeccaos { get; set; } = null!;
        public virtual DbSet<ImagemSensibilizacao> ImagemSensibilizacaos { get; set; } = null!;
        public virtual DbSet<ModalidadePropostum> ModalidadeProposta { get; set; } = null!;
        public virtual DbSet<NucleoIncubador> NucleoIncubadors { get; set; } = null!;
        public virtual DbSet<ParticipanteCapacitacao> ParticipanteCapacitacaos { get; set; } = null!;
        public virtual DbSet<ParticipanteDesafioInovacao> ParticipanteDesafioInovacaos { get; set; } = null!;
        public virtual DbSet<ParticipantePreIncubacao> ParticipantePreIncubacaos { get; set; } = null!;
        public virtual DbSet<ParticipanteReuniaoProspeccao> ParticipanteReuniaoProspeccaos { get; set; } = null!;
        public virtual DbSet<ParticipanteSensibilizacao> ParticipanteSensibilizacaos { get; set; } = null!;
        public virtual DbSet<PreIncubacao> PreIncubacaos { get; set; } = null!;
        public virtual DbSet<Propostum> Proposta { get; set; } = null!;
        public virtual DbSet<ReuniaoProspeccao> ReuniaoProspeccaos { get; set; } = null!;
        public virtual DbSet<Sensibilizacao> Sensibilizacaos { get; set; } = null!;
        public virtual DbSet<StatusPropostum> StatusProposta { get; set; } = null!;
        public virtual DbSet<TipoAcaoProspeccao> TipoAcaoProspeccaos { get; set; } = null!;
        public virtual DbSet<Usuario> Usuarios { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=(LocalDb)\\MSSQLLocalDB;Initial Catalog=Incubadora;Integrated Security=True;TrustServerCertificate=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CampusPropostum>(entity =>
            {
                entity.Property(e => e.Descricao)
                    .HasMaxLength(10)
                    .IsFixedLength();
            });

            modelBuilder.Entity<Capacitacao>(entity =>
            {
                entity.ToTable("Capacitacao");

                entity.Property(e => e.Data).HasColumnType("date");

                entity.Property(e => e.DataRegistro).HasColumnType("datetime");

                entity.Property(e => e.Email).HasMaxLength(532);

                entity.Property(e => e.Local).HasMaxLength(400);

                entity.Property(e => e.NumeroParticipantes).HasMaxLength(400);

                entity.Property(e => e.Tema).HasMaxLength(400);

                entity.HasOne(d => d.IdEditalNavigation)
                    .WithMany(p => p.Capacitacaos)
                    .HasForeignKey(d => d.IdEdital)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Capacitacao_EditalCapacitacao");

                //entity.HasOne(d => d.IdNucleoIncubadorNavigation)
                //    .WithMany(p => p.Capacitacaos)
                //    .HasForeignKey(d => d.IdNucleoIncubador)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_Capacitacao_NucleoIncubador");

                entity.HasOne(d => d.IdResponsavelNavigation)
                    .WithMany(p => p.CapacitacaoIdResponsavelNavigations)
                    .HasForeignKey(d => d.IdResponsavel)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Capacitacao_Usuario");

                entity.HasOne(d => d.IdUsuRegistrouNavigation)
                    .WithMany(p => p.CapacitacaoIdUsuRegistrouNavigations)
                    .HasForeignKey(d => d.IdUsuRegistrou)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Capacitacao_Usuario1");
            });

            modelBuilder.Entity<DesafioInovacao>(entity =>
            {
                entity.ToTable("DesafioInovacao");

                entity.Property(e => e.DataFinal).HasColumnType("date");

                entity.Property(e => e.DataInicio).HasColumnType("date");

                entity.Property(e => e.Email).HasMaxLength(532);

                entity.Property(e => e.Local).HasMaxLength(200);

                entity.Property(e => e.Perfil).HasMaxLength(200);

                entity.Property(e => e.Titulo).HasMaxLength(400);

                //entity.HasOne(d => d.IdNucleoIncubadorNavigation)
                //    .WithMany(p => p.DesafioInovacaos)
                //    .HasForeignKey(d => d.IdNucleoIncubador)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_DesafioInovacao_NucleoIncubador");

                entity.HasOne(d => d.IdResponsavelNavigation)
                    .WithMany(p => p.DesafioInovacaos)
                    .HasForeignKey(d => d.IdResponsavel)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DesafioInovacao_Usuario");
            });

            modelBuilder.Entity<Edital>(entity =>
            {
                entity.ToTable("Edital");

                entity.Property(e => e.Arquivo).HasColumnType("image");

                entity.Property(e => e.DataRegistro).HasColumnType("datetime");

                entity.HasOne(d => d.IdUsuRegistrouNavigation)
                    .WithMany(p => p.Editals)
                    .HasForeignKey(d => d.IdUsuRegistrou)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Edital_Usuario");
            });

            modelBuilder.Entity<EditalCapacitacao>(entity =>
            {
                entity.ToTable("EditalCapacitacao");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Arquivo).HasColumnType("image");
            });

            modelBuilder.Entity<EstagioMaturidade>(entity =>
            {
                entity.ToTable("EstagioMaturidade");

                entity.Property(e => e.Descricao).HasMaxLength(200);
            });

            modelBuilder.Entity<IdeiaDesafioInovacao>(entity =>
            {
                entity.ToTable("IdeiaDesafioInovacao");

                entity.HasOne(d => d.IdDesafioInovacaoNavigation)
                    .WithMany(p => p.IdeiaDesafioInovacaos)
                    .HasForeignKey(d => d.IdDesafioInovacao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IdeiaDesafioInovacao_DesafioInovacao");
            });

            modelBuilder.Entity<ImagemCapacitacao>(entity =>
            {
                entity.ToTable("ImagemCapacitacao");

                entity.Property(e => e.Arquivo).HasColumnType("image");

                entity.HasOne(d => d.IdCapacitacaoNavigation)
                    .WithMany(p => p.ImagemCapacitacaos)
                    .HasForeignKey(d => d.IdCapacitacao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ImagemCapacitacao_Capacitacao");
            });

            modelBuilder.Entity<ImagemDesafioInovacao>(entity =>
            {
                entity.ToTable("ImagemDesafioInovacao");

                entity.Property(e => e.Arquivo).HasColumnType("image");

                entity.HasOne(d => d.IdDesafioInovacaoNavigation)
                    .WithMany(p => p.ImagemDesafioInovacaos)
                    .HasForeignKey(d => d.IdDesafioInovacao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ImagemDesafioInovacao_DesafioInovacao");
            });

            modelBuilder.Entity<ImagemPreIncubacao>(entity =>
            {
                entity.ToTable("ImagemPreIncubacao");

                entity.Property(e => e.Imagem).HasColumnType("image");

                entity.HasOne(d => d.IdPreIncubacaoNavigation)
                    .WithMany(p => p.ImagemPreIncubacaos)
                    .HasForeignKey(d => d.IdPreIncubacao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ImagemPreIncubacao_PreIncubacao");
            });

            modelBuilder.Entity<ImagemReuniaoProspeccao>(entity =>
            {
                entity.ToTable("ImagemReuniaoProspeccao");

                entity.Property(e => e.Arquivo).HasColumnType("image");

                entity.HasOne(d => d.IdReuniaoProspeccaoNavigation)
                    .WithMany(p => p.ImagemReuniaoProspeccaos)
                    .HasForeignKey(d => d.IdReuniaoProspeccao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ImagemReuniaoProspeccao_ReuniaoProspeccao");
            });

            modelBuilder.Entity<ImagemSensibilizacao>(entity =>
            {
                entity.ToTable("ImagemSensibilizacao");

                entity.Property(e => e.Arquivo).HasColumnType("image");

                entity.HasOne(d => d.Sensibilizacao)
                    .WithMany(p => p.ImagemSensibilizacaos)
                    .HasForeignKey(d => d.IdSensibilizacao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ImagemSensibilizacao_Sensibilizacao");

                //entity.HasOne(d => d.IdSensibilizacaoNavigation)
                //    .WithMany(p => p.ImagemSensibilizacaos)
                //    .HasForeignKey(d => d.IdSensibilizacao)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_ImagemSensibilizacao_Sensibilizacao");
            });

            modelBuilder.Entity<ModalidadePropostum>(entity =>
            {
                entity.Property(e => e.Descricao).HasMaxLength(500);
            });

            modelBuilder.Entity<NucleoIncubador>(entity =>
            {
                entity.ToTable("NucleoIncubador");

                entity.Property(e => e.Descricao).HasMaxLength(100);
            });

            modelBuilder.Entity<ParticipanteCapacitacao>(entity =>
            {
                entity.ToTable("ParticipanteCapacitacao");

                entity.Property(e => e.Contato).HasMaxLength(532);

                entity.Property(e => e.Nome).HasMaxLength(50);

                entity.HasOne(d => d.IdCapacitacaoNavigation)
                    .WithMany(p => p.ParticipanteCapacitacaos)
                    .HasForeignKey(d => d.IdCapacitacao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ParticipanteCapacitacao_Capacitacao");
            });

            modelBuilder.Entity<ParticipanteDesafioInovacao>(entity =>
            {
                entity.ToTable("ParticipanteDesafioInovacao");

                entity.Property(e => e.Nome).HasMaxLength(200);

                entity.HasOne(d => d.IdDesafioInovacaoNavigation)
                    .WithMany(p => p.ParticipanteDesafioInovacaos)
                    .HasForeignKey(d => d.IdDesafioInovacao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ParticipanteDesafioInovacao_DesafioInovacao");
            });

            modelBuilder.Entity<ParticipantePreIncubacao>(entity =>
            {
                entity.ToTable("ParticipantePreIncubacao");

                entity.Property(e => e.Contato)
                    .HasMaxLength(532)
                    .IsFixedLength();

                entity.Property(e => e.Nome)
                    .HasMaxLength(50)
                    .IsFixedLength();

                entity.HasOne(d => d.IdPreIncubacaoNavigation)
                    .WithMany(p => p.ParticipantePreIncubacaos)
                    .HasForeignKey(d => d.IdPreIncubacao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ParticipantePreIncubacao_PreIncubacao");
            });

            modelBuilder.Entity<ParticipanteReuniaoProspeccao>(entity =>
            {
                entity.ToTable("ParticipanteReuniaoProspeccao");

                entity.Property(e => e.Id).ValueGeneratedOnAdd();

                entity.Property(e => e.Contato).HasMaxLength(532);

                entity.Property(e => e.NomeParticipante).HasMaxLength(200);

                entity.HasOne(d => d.IdNavigation)
                    .WithOne(p => p.ParticipanteReuniaoProspeccao)
                    .HasForeignKey<ParticipanteReuniaoProspeccao>(d => d.Id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ParticipanteReuniaoProspeccao_ReuniaoProspeccao");
            });

            modelBuilder.Entity<ParticipanteSensibilizacao>(entity =>
            {
                entity.ToTable("ParticipanteSensibilizacao");

                entity.Property(e => e.Nome).HasMaxLength(200);

                entity.HasOne(d => d.Sensibilizacao)
                    .WithMany(p => p.ParticipanteSensibilizacaos)
                    .HasForeignKey(d => d.IdSensibilizacao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ParticipanteSensibilizacao_Sensibilizacao");
            });

            modelBuilder.Entity<PreIncubacao>(entity =>
            {
                entity.ToTable("PreIncubacao");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.DataFim).HasColumnType("date");

                entity.Property(e => e.DataInicio).HasColumnType("date");

                entity.Property(e => e.DataRegistro).HasColumnType("datetime");

                entity.Property(e => e.Edital).HasColumnType("image");

                entity.Property(e => e.Email).HasMaxLength(532);

                entity.Property(e => e.Local).HasMaxLength(200);

                entity.Property(e => e.Perfil).HasMaxLength(200);

                entity.Property(e => e.Resumo).HasColumnType("image");

                entity.Property(e => e.Titulo).HasMaxLength(400);

                //entity.HasOne(d => d.IdNucleoIncubadorNavigation)
                //    .WithMany(p => p.PreIncubacaos)
                //    .HasForeignKey(d => d.IdNucleoIncubador)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_PreIncubacao_NucleoIncubador");

                entity.HasOne(d => d.IdResponsavelNavigation)
                    .WithMany(p => p.PreIncubacaoIdResponsavelNavigations)
                    .HasForeignKey(d => d.IdResponsavel)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PreIncubacao_Usuario");

                entity.HasOne(d => d.IdUsuRegistrouNavigation)
                    .WithMany(p => p.PreIncubacaoIdUsuRegistrouNavigations)
                    .HasForeignKey(d => d.IdUsuRegistrou)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PreIncubacao_Usuario1");
            });

            modelBuilder.Entity<Propostum>(entity =>
            {
                entity.Property(e => e.DataRegistro).HasColumnType("date");

                entity.Property(e => e.Email).HasMaxLength(532);

                entity.Property(e => e.IdCampus)
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.Nome).HasMaxLength(500);

                entity.Property(e => e.Telefone).HasMaxLength(200);

                entity.HasOne(d => d.IdEditalNavigation)
                    .WithMany(p => p.Proposta)
                    .HasForeignKey(d => d.IdEdital)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Proposta_Edital");

                //entity.HasOne(d => d.IdNucleoIncubadorNavigation)
                //    .WithMany(p => p.Proposta)
                //    .HasForeignKey(d => d.IdNucleoIncubador)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_Proposta_NucleoIncubador");

                entity.HasOne(d => d.IdStatusNavigation)
                    .WithMany(p => p.Proposta)
                    .HasForeignKey(d => d.IdStatus)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Proposta_StatusProposta");

                entity.HasOne(d => d.IdUsuRegistrouNavigation)
                    .WithMany(p => p.Proposta)
                    .HasForeignKey(d => d.IdUsuRegistrou)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Proposta_Usuario");
            });

            modelBuilder.Entity<ReuniaoProspeccao>(entity =>
            {
                entity.ToTable("ReuniaoProspeccao");

                entity.Property(e => e.DataAcao).HasColumnType("date");

                entity.Property(e => e.DataRegistro).HasColumnType("datetime");

                entity.Property(e => e.Email).HasMaxLength(532);

                entity.Property(e => e.Local).HasMaxLength(200);

                entity.Property(e => e.Perfil).HasMaxLength(200);

                entity.Property(e => e.TemaAcao).HasMaxLength(400);

                entity.HasOne(d => d.IdEstagioMaturidadeNavigation)
                    .WithMany(p => p.ReuniaoProspeccaos)
                    .HasForeignKey(d => d.IdEstagioMaturidade)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ReuniaoProspeccao_EstagioMaturidade");

                //entity.HasOne(d => d.IdNucleoIncubadorNavigation)
                //    .WithMany(p => p.ReuniaoProspeccaos)
                //    .HasForeignKey(d => d.IdNucleoIncubador)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_ReuniaoProspeccao_NucleoIncubador");

                //entity.HasOne(d => d.IdTipoAcaoProspeccaoNavigation)
                //    .WithMany(p => p.ReuniaoProspeccaos)
                //    .HasForeignKey(d => d.IdTipoAcaoProspeccao)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK_ReuniaoProspeccao_TipoAcaoProspeccao");

                entity.HasOne(d => d.IdUsuRegistrouNavigation)
                    .WithMany(p => p.ReuniaoProspeccaos)
                    .HasForeignKey(d => d.IdUsuRegistrou)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ReuniaoProspeccao_Usuario");
            });

            modelBuilder.Entity<Sensibilizacao>(entity =>
            {
                entity.ToTable("Sensibilizacao");

                entity.Property(e => e.DataAcao).HasColumnType("datetime");

                entity.Property(e => e.DataRegistro)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Local).HasMaxLength(200);

                entity.Property(e => e.Observacoes).HasMaxLength(600);

                entity.Property(e => e.Perfil).HasMaxLength(200);

                entity.Property(e => e.Tema).HasMaxLength(200);

                entity.HasOne(d => d.IdNucleoIncubadorNavigation)
                    .WithMany(p => p.Sensibilizacaos)
                    .HasForeignKey(d => d.IdNucleoIncubador)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Sensibilizacao_NucleoIncubador");

                entity.HasOne(d => d.IdUsuRegistrouNavigation)
                    .WithMany(p => p.SensibilizacaoIdUsuRegistrouNavigations)
                    .HasForeignKey(d => d.IdUsuRegistrou)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Sensibilizacao_Usuario1");

                entity.HasOne(d => d.IdUsuarioResponsavelNavigation)
                    .WithMany(p => p.SensibilizacaoIdUsuarioResponsavelNavigations)
                    .HasForeignKey(d => d.IdUsuarioResponsavel)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Sensibilizacao_Usuario");

                entity.HasMany(s => s.ParticipanteSensibilizacaos)
                    .WithOne(p => p.Sensibilizacao)
                    .HasForeignKey(p => p.IdSensibilizacao);

                entity.HasMany(s => s.ImagemSensibilizacaos)
                    .WithOne(p => p.Sensibilizacao)
                    .HasForeignKey(p => p.IdSensibilizacao);


            });

            modelBuilder.Entity<StatusPropostum>(entity =>
            {
                entity.Property(e => e.Descricao).HasMaxLength(100);
            });

            modelBuilder.Entity<TipoAcaoProspeccao>(entity =>
            {
                entity.ToTable("TipoAcaoProspeccao");

                entity.Property(e => e.Descricao).HasMaxLength(350);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.ToTable("Usuario");

                entity.Property(e => e.Email).HasMaxLength(512);

                entity.Property(e => e.Nome).HasMaxLength(50);

                entity.Property(e => e.Senha).HasMaxLength(60);

                entity.Property(e => e.Sobrenome).HasMaxLength(100);

                entity.HasOne(d => d.NucleoIncubador)
                    .WithMany(p => p.Usuario)
                    .HasForeignKey(d => d.IdNucleoIncubador);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
