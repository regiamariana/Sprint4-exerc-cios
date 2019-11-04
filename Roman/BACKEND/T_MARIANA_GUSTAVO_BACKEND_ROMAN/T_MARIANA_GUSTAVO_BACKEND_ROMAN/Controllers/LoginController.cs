using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Domains;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Repositories;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.ViewModels;

namespace T_MARIANA_GUSTAVO_BACKEND_ROMAN.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IProfessoresRepository professoresRepository { get; set; }

        public LoginController()
        {
            professoresRepository = new ProfessoresRepository();

        }

        [HttpPost]
        public IActionResult Login(LoginViewModel login)
        {
            try
            {
                Professores professores = professoresRepository.BuscarPorEmailESenha(login);
                if (professores == null)
                    return NotFound(new { mensagem = "deu rui" });

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, professores.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, professores.IdProfessor.ToString()),
                    // é a permissão do usuário
                    //new Claim(ClaimTypes.Role, usuarioBuscado.IdtipousuarioNavigation.Tipousuario1),
                    // new Claim("permissao", usuarioBuscado.IdtipousuarioNavigation.Tipousuario1)
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("Roman-chave-autenticacao"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "Roman.WebApi",
                    audience: "Roman.WebApi",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: creds);

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });

            }
            catch (Exception ex)
            {

                return BadRequest(new { mensagem = ex.Message });
            }
        }
    }
}