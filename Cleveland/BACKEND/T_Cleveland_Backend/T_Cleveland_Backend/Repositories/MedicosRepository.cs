using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using T_Cleveland_Backend.Domains;
using T_Cleveland_Backend.Interfaces;

namespace T_Cleveland_Backend.Repositories
{
    public class MedicosRepository : IMedicosRepository
    {
        public List<Medicos> Listar()
        {
            using(ClevelandContext ctx= new ClevelandContext())
            {
                return ctx.Medicos.ToList();    
            }
        }
    }
}
