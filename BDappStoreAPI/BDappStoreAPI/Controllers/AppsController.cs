using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BDappStoreAPI.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace BDappStoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _hostEnv;

        public AppsController(AppDbContext context, IWebHostEnvironment hostEnv)
        {
            _context = context;
            this._hostEnv = hostEnv;
        }

        // GET: api/Apps
        [HttpGet]
        public async Task<ActionResult<IEnumerable<App>>> Getapps()
        {
            return await _context.apps.Include(x=>x.AppCategory).ToListAsync();
        }

        // GET: api/Apps/5
        [HttpGet("{id}")]
        public async Task<ActionResult<App>> GetApp(int id)
        {
            var app = await _context.apps.FindAsync(id);

            if (app == null)
            {
                return NotFound();
            }

            return app;
        }

        // PUT: api/Apps/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult PutApp(int id, [FromForm] AppVM vm)
        {
            if (id != vm.AppId)
            {
                return BadRequest();
            }
            //file update
            if (vm.Image != null)
            {
                var extFile = Path.Combine(_hostEnv.ContentRootPath, "wwwroot", "Uploads", vm.ExtImageName);

                if (System.IO.File.Exists(extFile))
                {
                    System.IO.File.Delete(extFile);
                }
            }

            string NewFileName = Guid.NewGuid().ToString() + "_" + vm.Image.FileName;
            string NewfilePath = Path.Combine("Uploads", NewFileName);
            string file = Path.Combine(_hostEnv.ContentRootPath, "wwwroot", NewfilePath);
            var f = new FileStream(file, FileMode.Create);
            vm.Image.CopyTo(f);
            f.Close();
            App post = new App
            {
                AppName = vm.AppName,
                AppSize = vm.AppSize,
                AppDescription = vm.AppDescription,
                Picture = NewfilePath,
                AppCategoryId = vm.AppCategoryId,
                AppPublish = vm.AppPublish,
                PayOrNot = vm.PayOrNot,
            };

            _context.Entry(post).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
                vm.AppId = post.AppId;
                vm.Image = null;
                vm.Picture = post.Picture;
                return Ok(vm);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }

        // POST: api/Apps
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public IActionResult PostApp([FromForm] AppVM vm)
        {
            string NewFileName = Guid.NewGuid().ToString() + "_" + vm.Image.FileName;
            string NewfilePath = Path.Combine("Uploads", NewFileName);
            string file = Path.Combine(_hostEnv.ContentRootPath, "wwwroot", NewfilePath);
            var f = new FileStream(file, FileMode.Create);
            vm.Image.CopyTo(f);
            f.Close();
            App post = new App
            {
                AppName = vm.AppName,
                AppSize = vm.AppSize,
                AppDescription = vm.AppDescription,
                Picture = NewfilePath,
                AppCategoryId = vm.AppCategoryId,
                AppPublish = vm.AppPublish,
                PayOrNot = vm.PayOrNot,
            };
            _context.apps.Add(post);
            _context.SaveChanges();
            vm.AppId = post.AppId;
            vm.Image = null;
            vm.Picture = post.Picture;
            return Ok(vm);
        }

        // DELETE: api/Apps/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteApp(int id)
        {
            var app = await _context.apps.FindAsync(id);
            if (app == null)
            {
                return NotFound();
            }

            _context.apps.Remove(app);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //[HttpPost("Uploads/{id}")]
        //public async Task<ActionResult<ImagePathResponse>> PostImage(int id, IFormFile file)
        //{
        //    var app = await _context.apps.FindAsync(id);
        //    if (app == null)
        //    {
        //        return NotFound();
        //    }
        //    try
        //    {
        //        string ext = Path.GetExtension(file.FileName);
        //        string f = Guid.NewGuid() + ext;
        //        if (!Directory.Exists(env.WebRootPath + "\\Uploads\\"))
        //        {
        //            Directory.CreateDirectory(env.WebRootPath + "\\Uploads\\");
        //        }
        //        using FileStream fileStream = System.IO.File.Create(env.WebRootPath + "\\Uploads\\" + f);
        //        file.CopyTo(fileStream);
        //        fileStream.Flush();
        //        app.Picture = f;
        //        fileStream.Close();
        //        await _context.SaveChangesAsync();
        //        return new ImagePathResponse { ImagePath = f };
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex.Message);
        //    }
        //}

        private bool AppExists(int id)
        {
            return _context.apps.Any(e => e.AppId == id);
        }
    }
}
