using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Interfaces;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Repositories;

namespace T_MARIANA_GUSTAVO_BACKEND_ROMAN.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class TemasController : ControllerBase
    {
        private ITemasRepository temasRepository { get; set; }

        public TemasController()
        {
            temasRepository = new TemasRepository();
        }

        //[Authorize]
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(temasRepository.Listar());
        }

    }
}