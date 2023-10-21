
DROP DATABASE IF EXISTS safesync;

CREATE DATABASE safesync;
USE safesync;

CREATE TABLE IF NOT EXISTS empresas (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nomeFantasia VARCHAR(100) NOT NULL,
    razaoSocial VARCHAR(100) NOT NULL,
    cnpj CHAR(18) NOT NULL UNIQUE,
    cep CHAR(9) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(10),
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    senhaEmpresa VARCHAR(20)
    );


CREATE TABLE IF NOT EXISTS funcionarios (
    idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
    nomeFuncionario VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    cpf CHAR(14) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(15) NOT NULL,
    senha VARCHAR(20),
    fkEmpresa INT,
    FOREIGN KEY (fkEmpresa) REFERENCES empresas(idEmpresa)
    );


create table if not exists hardwares(
	id int primary key auto_increment,
	sistemaOperacional varchar(50),
    totalCpu double not null,
	totalDisco double NOT NULL,
	totalRam double NOT NULL,
	fkFuncionario int,
	foreign key (fkFuncionario) references funcionarios(idFuncionario)
);

create table volateis(
id int primary key auto_increment,
consumoCpu double not null,
consumoDisco double not null,
consumoRam double not null,
totalJanelas int not null,
dataHora datetime,
fkHardware int,
foreign key (fkHardware) references hardwares(id)
);

create table if not exists limitador(
	id int primary key auto_increment,
	tipoComponente varchar(45),
	min int,
	max int,
	fkEmpresa int not null,
	foreign key (fkEmpresa) references empresas(idEmpresa)
);

CREATE TABLE IF NOT EXISTS arquivos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome_arquivo LONGTEXT NOT NULL,
  tipo_arquivo VARCHAR(100) NOT NULL,
  tamanho_arquivo INT NOT NULL,
  dados_arquivo LONGBLOB NOT NULL,
  data_upload TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fkFuncionario INT not null,
  FOREIGN KEY (fkfuncionario) REFERENCES funcionarios(idFuncionario)
);

create table if not exists hardwares(
    id int primary key auto_increment,
    sistemaOperacional varchar(50),
    consumoCpu double not null,
    consumoDisco double not null,
    consumoRam double not null,
    totalCpu double NOT NULL,
    totalDisco double NOT NULL,
    totalRam double NOT NULL,
    dataHora datetime,
    fkFuncionario int,
    foreign key (fkFuncionario) references funcionarios(idFuncionario)
    );

create table if not exists tipoDeHardware(
    id int primary key auto_increment,
    tipoComponente varchar(45),
    min int,
    max int,
    fkHardware int,
    foreign key (fkHardware) references hardwares(id)
    );

select * from empresas;

select * from funcionarios;

select * from volateis;

select * from hardwares;

select * from tipoDeHardware;

select * from limitador;

select * from arquivos;
