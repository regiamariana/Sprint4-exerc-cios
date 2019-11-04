using System;
using System.Collections.Generic;

namespace T_MARIANA_GUSTAVO_BACKEND_ROMAN.Domains
{
    public partial class Professores
    {
        public Professores()
        {
            Projetos = new HashSet<Projetos>();
        }

        public int IdProfessor { get; set; }
        public string NomeProfessor { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        public ICollection<Projetos> Projetos { get; set; }
    }
}
