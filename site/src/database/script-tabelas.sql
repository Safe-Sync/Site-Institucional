CREATE DATABASE safesync;
USE safesync;

CREATE TABLE IF NOT EXISTS empresa(
	idEmpresa INT PRIMARY KEY auto_increment,
    razaoSocial VARCHAR(100) NOT NULL, 
    nomeFantasia VARCHAR(100) NOT NULL,
    cnpj CHAR(14) NOT NULL UNIQUE,
    cep CHAR(8) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(10),
    telefone1 VARCHAR(15) NOT NULL,
    email1 VARCHAR(100) NOT NULL,
    senha VARCHAR(45) NOT NULL
);
select * from empresa;
show tables;
desc empresa;

drop table empresa;