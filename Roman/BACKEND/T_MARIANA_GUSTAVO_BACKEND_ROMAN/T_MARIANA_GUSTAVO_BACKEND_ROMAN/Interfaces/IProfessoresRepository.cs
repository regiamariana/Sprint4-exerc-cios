using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.Domains;
using T_MARIANA_GUSTAVO_BACKEND_ROMAN.ViewModels;

namespace T_MARIANA_GUSTAVO_BACKEND_ROMAN
{
    interface IProfessoresRepository
    {
        //cadastrar e logar
        void Cadastrar(Professores professores);
        Professores BuscarPorEmailESenha(LoginViewModel login);

    }
}
