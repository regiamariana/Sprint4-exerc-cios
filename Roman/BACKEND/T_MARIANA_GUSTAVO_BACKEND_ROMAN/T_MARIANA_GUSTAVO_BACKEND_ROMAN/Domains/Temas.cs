using System;
using System.Collections.Generic;

namespace T_MARIANA_GUSTAVO_BACKEND_ROMAN.Domains
{
    public partial class Temas
    {
        public Temas()
        {
            Projetos = new HashSet<Projetos>();
        }

        public int IdTema { get; set; }
        public string NomeTema { get; set; }

        public ICollection<Projetos> Projetos { get; set; }
    }
}
