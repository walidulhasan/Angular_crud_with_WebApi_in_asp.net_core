// <auto-generated />
using System;
using BDappStoreAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BDappStoreAPI.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20210919165750_ScriptA")]
    partial class ScriptA
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.8")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BDappStoreAPI.Models.App", b =>
                {
                    b.Property<int>("AppId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AppCategoryId")
                        .HasColumnType("int");

                    b.Property<string>("AppDescription")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("nvarchar(300)");

                    b.Property<string>("AppName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("AppPublish")
                        .HasColumnType("date");

                    b.Property<double>("AppSize")
                        .HasColumnType("float");

                    b.Property<string>("PayOrNot")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Picture")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("AppId");

                    b.HasIndex("AppCategoryId");

                    b.ToTable("apps");
                });

            modelBuilder.Entity("BDappStoreAPI.Models.AppCategory", b =>
                {
                    b.Property<int>("AppCategoryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AppCategoryName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("AppCategoryId");

                    b.ToTable("appcategories");
                });

            modelBuilder.Entity("BDappStoreAPI.Models.App", b =>
                {
                    b.HasOne("BDappStoreAPI.Models.AppCategory", "AppCategory")
                        .WithMany("Apps")
                        .HasForeignKey("AppCategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("AppCategory");
                });

            modelBuilder.Entity("BDappStoreAPI.Models.AppCategory", b =>
                {
                    b.Navigation("Apps");
                });
#pragma warning restore 612, 618
        }
    }
}
