using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Domains;

namespace T_MARIANA_GUSTAVO_BACKEND_ROMAN.Interfaces
{
    interface IProjetosRepository
    {
        //listar e cadastrar

        List<Projetos> Listar();
        void Cadastrar(Projetos projetos);
    }
}
