using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BDappStoreAPI.Models
{
    public class AppVM
    {
        public int AppId { get; set; }

        public int AppCategoryId { get; set; }
        public string AppName { get; set; }
        public double AppSize { get; set; }
        public string Picture { get; set; }
        public IFormFile Image { get; set; }
        public string ExtImageName { get; set; }
        public DateTime AppPublish { get; set; }
        public string AppDescription { get; set; }
        public string PayOrNot { get; set; }
    }
}
