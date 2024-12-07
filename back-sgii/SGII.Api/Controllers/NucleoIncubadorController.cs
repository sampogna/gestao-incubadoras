using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using SGII.Api.Models;

namespace SGII.Api.Controllers
{
    public class NucleoIncubadorController : Controller
    {
        private readonly IncubadoraContext _context;

        public NucleoIncubadorController(IncubadoraContext context)
        {
            _context = context;
        }

        // GET: NucleoIncubador
        public async Task<IActionResult> Index()
        {
              return _context.NucleoIncubadors != null ? 
                          View(await _context.NucleoIncubadors.ToListAsync()) :
                          Problem("Entity set 'IncubadoraContext.NucleoIncubadors'  is null.");
        }

        // GET: NucleoIncubador/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.NucleoIncubadors == null)
            {
                return NotFound();
            }

            var nucleoIncubador = await _context.NucleoIncubadors
                .FirstOrDefaultAsync(m => m.Id == id);
            if (nucleoIncubador == null)
            {
                return NotFound();
            }

            return View(nucleoIncubador);
        }

        // GET: NucleoIncubador/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: NucleoIncubador/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Descricao")] NucleoIncubador nucleoIncubador)
        {
            if (ModelState.IsValid)
            {
                _context.Add(nucleoIncubador);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(nucleoIncubador);
        }

        // GET: NucleoIncubador/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.NucleoIncubadors == null)
            {
                return NotFound();
            }

            var nucleoIncubador = await _context.NucleoIncubadors.FindAsync(id);
            if (nucleoIncubador == null)
            {
                return NotFound();
            }
            return View(nucleoIncubador);
        }

        // POST: NucleoIncubador/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Descricao")] NucleoIncubador nucleoIncubador)
        {
            if (id != nucleoIncubador.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(nucleoIncubador);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!NucleoIncubadorExists(nucleoIncubador.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(nucleoIncubador);
        }

        // GET: NucleoIncubador/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.NucleoIncubadors == null)
            {
                return NotFound();
            }

            var nucleoIncubador = await _context.NucleoIncubadors
                .FirstOrDefaultAsync(m => m.Id == id);
            if (nucleoIncubador == null)
            {
                return NotFound();
            }

            return View(nucleoIncubador);
        }

        // POST: NucleoIncubador/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.NucleoIncubadors == null)
            {
                return Problem("Entity set 'IncubadoraContext.NucleoIncubadors'  is null.");
            }
            var nucleoIncubador = await _context.NucleoIncubadors.FindAsync(id);
            if (nucleoIncubador != null)
            {
                _context.NucleoIncubadors.Remove(nucleoIncubador);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool NucleoIncubadorExists(int id)
        {
          return (_context.NucleoIncubadors?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
