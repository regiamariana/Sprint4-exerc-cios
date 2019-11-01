using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace T_Cleveland_Backend.Domains
{
    public partial class ClevelandContext : DbContext
    {
        public ClevelandContext()
        {
        }

        public ClevelandContext(DbContextOptions<ClevelandContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Medicos> Medicos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=.\\SqlExpress; Initial Catalog=T_Cleaveland;User Id=sa;Pwd=132");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Medicos>(entity =>
            {
                entity.HasKey(e => e.Idmedico);

                entity.ToTable("MEDICOS");

                entity.HasIndex(e => e.Crm)
                    .HasName("UQ__MEDICOS__C1F887FF97886C39")
                    .IsUnique();

                entity.Property(e => e.Idmedico).HasColumnName("IDMEDICO");

                entity.Property(e => e.Ativo)
                    .HasColumnName("ATIVO")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Crm).HasColumnName("CRM");

                entity.Property(e => e.Datanascimento)
                    .HasColumnName("DATANASCIMENTO")
                    .HasColumnType("date");

                entity.Property(e => e.Especialidade)
                    .HasColumnName("ESPECIALIDADE")
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .HasColumnName("NOME")
                    .HasMaxLength(250)
                    .IsUnicode(false);
            });
        }
    }
}
