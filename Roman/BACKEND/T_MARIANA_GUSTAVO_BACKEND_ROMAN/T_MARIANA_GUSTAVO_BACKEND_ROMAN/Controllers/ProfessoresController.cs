using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Domains;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Repositories;

namespace T_MARIANA_GUSTAVO_BACKEND_ROMAN.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class ProfessoresController : ControllerBase
    {
        private IProfessoresRepository professoresRepository { get; set; }

        public ProfessoresController()
        {
            professoresRepository = new ProfessoresRepository();
        }

        [HttpPost]
        public IActionResult Cadastrar (Professores professores)
        {
            try
            {
                professoresRepository.Cadastrar(professores);
                return Ok(professores);
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "erro" + ex.Message });
            }
        }
    }
}