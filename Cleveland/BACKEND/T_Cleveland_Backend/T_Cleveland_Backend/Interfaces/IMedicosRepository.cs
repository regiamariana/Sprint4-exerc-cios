using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using T_Cleveland_Backend.Domains;

namespace T_Cleveland_Backend.Interfaces
{
    interface IMedicosRepository
    {
        List<Medicos> Listar();
    }
}
