using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BDappStoreAPI.Models
{
    public class AppCategory
    {
        public AppCategory() { this.Apps = new List<App>(); }
        public int AppCategoryId { get; set; }
        [Required, StringLength(50)]
        public string AppCategoryName { get; set; }
        //nav
        public virtual ICollection<App> Apps { get; set; }
    }
    public class App
    {
        public int AppId { get; set; }

        [Required, ForeignKey("AppCategory")]
        public int AppCategoryId { get; set; }
        [Required, StringLength(50)]
        public string AppName { get; set; }
        [Required]
        public double AppSize { get; set; }
        public string Picture { get; set; }
        [Required, Column(TypeName = "date")]
        public DateTime AppPublish { get; set; }
        [Required, StringLength(300)]
        public string AppDescription { get; set; }
        public string PayOrNot { get; set; }

        //navigation
        public virtual AppCategory AppCategory { get; set; }
    }
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<App> apps { get; set; }
        public DbSet<AppCategory> appcategories { get; set; }
    }
}
