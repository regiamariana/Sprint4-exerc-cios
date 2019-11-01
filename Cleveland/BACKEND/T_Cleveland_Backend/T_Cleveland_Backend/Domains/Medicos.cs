using System;
using System.Collections.Generic;

namespace T_Cleveland_Backend.Domains
{
    public partial class Medicos
    {
        public int Idmedico { get; set; }
        public string Nome { get; set; }
        public DateTime? Datanascimento { get; set; }
        public int? Crm { get; set; }
        public string Especialidade { get; set; }
        public string Ativo { get; set; }
    }
}
