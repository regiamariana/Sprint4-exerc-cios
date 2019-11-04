using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Domains;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Interfaces;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.ViewModels;

namespace T_MARIANA_GUSTAVO_BACKEND_ROMAN.Repositories
{
    public class ProjetosRepository : IProjetosRepository
    {
        public void Cadastrar(Projetos projetos)
        {
            using (RomanContext ctx = new RomanContext())
            {
                ctx.Projetos.Add(projetos);
                ctx.SaveChanges();
            }
        }

        public List<Projetos> Listar()
        {
            using (RomanContext ctx = new RomanContext())
            {
                return ctx.Projetos.ToList();
            }
        }
    }
}
