CREATE DATABASE T_Roman

use T_Roman;

create table Professores(IdProfessor int primary key identity,NomeProfessor varchar (250),Email varchar(250),Senha varchar(250),)

create table Temas(IdTema int primary key identity,NomeTema varchar(250))

create table Projetos(
	IdProjeto int primary key identity,
	IdProfessor int foreign key references Professores (IdProfessor),
	NomeProjeto varchar(250),
	IdTema int foreign key references Temas(IdTema)
)

insert into Professores(NomeProfessor,Email,Senha) values ('Erik','erikinho@gmail.com',1234)
insert into Professores(NomeProfessor,Email,Senha) values ('Helena','heleninha@gmail.com',1234)
insert into Professores(NomeProfessor,Email,Senha) values ('Possarle','possinho@gmail.com',1234)

insert into Temas(NomeTema) values('HQs')
insert into Temas(NomeTema) values('Empresas')
insert into Temas(NomeTema) values('Petshop')
insert into Temas(NomeTema) values('Hospitais')
insert into Temas(NomeTema) values('Mercado')
insert into Temas(NomeTema) values('biologia')

insert into Projetos(IdProfessor,NomeProjeto,IdTema) values (1,'Hroads',2)
insert into Projetos(IdProfessor,NomeProjeto,IdTema) values (1,'Pet shop vitelli',3)
insert into Projetos(IdProfessor,NomeProjeto,IdTema) values (3,'Teoria das cores',2)
insert into Projetos(IdProfessor,NomeProjeto,IdTema) values (2,'dinossauro_dancando_applebottomjeans_em_camera_lenta.mp4',2)

select * from Professores
select * from Projetos
select * from Temas