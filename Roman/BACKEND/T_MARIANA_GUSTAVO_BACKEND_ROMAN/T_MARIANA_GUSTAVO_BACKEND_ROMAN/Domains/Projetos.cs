using System;
using System.Collections.Generic;

namespace T_MARIANA_GUSTAVO_BACKEND_ROMAN.Domains
{
    public partial class Projetos
    {
        public int IdProjeto { get; set; }
        public int? IdProfessor { get; set; }
        public string NomeProjeto { get; set; }
        public int? IdTema { get; set; }

        public Professores IdProfessorNavigation { get; set; }
        public Temas IdTemaNavigation { get; set; }
    }
}
