using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BDappStoreAPI.Migrations
{
    public partial class ScriptA : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "appcategories",
                columns: table => new
                {
                    AppCategoryId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AppCategoryName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_appcategories", x => x.AppCategoryId);
                });

            migrationBuilder.CreateTable(
                name: "apps",
                columns: table => new
                {
                    AppId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AppCategoryId = table.Column<int>(type: "int", nullable: false),
                    AppName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    AppSize = table.Column<double>(type: "float", nullable: false),
                    Picture = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AppPublish = table.Column<DateTime>(type: "date", nullable: false),
                    AppDescription = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    PayOrNot = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_apps", x => x.AppId);
                    table.ForeignKey(
                        name: "FK_apps_appcategories_AppCategoryId",
                        column: x => x.AppCategoryId,
                        principalTable: "appcategories",
                        principalColumn: "AppCategoryId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_apps_AppCategoryId",
                table: "apps",
                column: "AppCategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "apps");

            migrationBuilder.DropTable(
                name: "appcategories");
        }
    }
}
