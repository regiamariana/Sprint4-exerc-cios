using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Domains;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Interfaces;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Repositories;

namespace T_MARIANA_GUSTAVO_BACKEND_ROMAN.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class ProjetosController : ControllerBase
    {
        private IProjetosRepository projetosRepository { get; set; }

        public ProjetosController()
        {
            projetosRepository = new ProjetosRepository();
        }
        //[Authorize]
        [HttpPost]
        public IActionResult Cadastrar(Projetos projetos)
        {
            try
            {
                projetosRepository.Cadastrar(projetos);
                return Ok(projetos);
            }
            catch (Exception ex)
            {

                return BadRequest(new { mensagem = "Eita, erro: " + ex.Message });
            }

            //try
            //{
            //    int Idlancamentos = Convert.ToInt32(HttpContext.User.Claims.First(x => x.Type == JwtRegisteredClaimNames.Jti).Value);
            //    lancamentos.Idlancamentos = Idlancamentos;
            //    lancamentos.Datalancamento = DateTime.Now;

            //    lancamentosRepository.Cadastrar(lancamentos);
            //    return Ok();
            //}
            //catch (System.Exception ex)
            //{
            //    return BadRequest(new { mensagem = ex.Message });
            //}
        }
        //[Authorize]
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(projetosRepository.Listar());
        }
    }
}