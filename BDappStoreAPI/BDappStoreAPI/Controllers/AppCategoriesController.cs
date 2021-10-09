using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BDappStoreAPI.Models;

namespace BDappStoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppCategoriesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AppCategoriesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/AppCategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppCategory>>> Getappcategories()
        {
            return await _context.appcategories.ToListAsync();
        }

        // GET: api/AppCategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AppCategory>> GetAppCategory(int id)
        {
            var appCategory = await _context.appcategories.FindAsync(id);

            if (appCategory == null)
            {
                return NotFound();
            }

            return appCategory;
        }

        // PUT: api/AppCategories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAppCategory(int id, AppCategory appCategory)
        {
            if (id != appCategory.AppCategoryId)
            {
                return BadRequest();
            }

            _context.Entry(appCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppCategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/AppCategories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AppCategory>> PostAppCategory(AppCategory appCategory)
        {
            _context.appcategories.Add(appCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAppCategory", new { id = appCategory.AppCategoryId }, appCategory);
        }

        // DELETE: api/AppCategories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAppCategory(int id)
        {
            var appCategory = await _context.appcategories.FindAsync(id);
            if (appCategory == null)
            {
                return NotFound();
            }

            _context.appcategories.Remove(appCategory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AppCategoryExists(int id)
        {
            return _context.appcategories.Any(e => e.AppCategoryId == id);
        }
    }
}
