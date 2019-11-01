using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using T_Cleveland_Backend.Interfaces;
using T_Cleveland_Backend.Repositories;

namespace T_Cleveland_Backend.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class MedicosController : ControllerBase
    {
        private IMedicosRepository medicosRepository { get; set; }
            
        public MedicosController()
        {
            medicosRepository = new MedicosRepository();
        }
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(medicosRepository.Listar());  
        }
    }
}