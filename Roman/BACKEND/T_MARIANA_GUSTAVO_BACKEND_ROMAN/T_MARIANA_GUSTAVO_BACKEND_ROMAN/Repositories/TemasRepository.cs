using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Domains;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Interfaces;

namespace T_MARIANA_GUSTAVO_BACKEND_ROMAN.Repositories
{
    public class TemasRepository : ITemasRepository
    {
        public List<Temas> Listar()
        {
           using(RomanContext ctx = new RomanContext())
            {
                return ctx.Temas.ToList();
            }
        }
    }
}
