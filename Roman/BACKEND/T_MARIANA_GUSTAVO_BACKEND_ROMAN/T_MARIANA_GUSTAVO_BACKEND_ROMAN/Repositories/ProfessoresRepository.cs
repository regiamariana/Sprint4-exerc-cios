using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Domains;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.ViewModels;

namespace T_MARIANA_GUSTAVO_BACKEND_ROMAN.Repositories
{
    public class ProfessoresRepository : IProfessoresRepository
    {
        public Professores BuscarPorEmailESenha(LoginViewModel login)
        {
            using (RomanContext ctx = new RomanContext())
            {
                Professores professores = ctx.Professores.FirstOrDefault(x => x.Email == login.Email && x.Senha == login.Senha);
                if (professores == null)
                    return null;
                return professores;
            }
        }

        public void Cadastrar(Professores professores)
        {
            using (RomanContext ctx = new RomanContext())
            {
                ctx.Professores.Add(professores);
                ctx.SaveChanges();
            }
        }
    }
}
