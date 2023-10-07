DROP DATABASE IF EXISTS safesync;

CREATE DATABASE safesync;
USE safesync;

CREATE TABLE IF NOT EXISTS empresa (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nomeFantasia VARCHAR(100) NOT NULL,
    razaoSocial VARCHAR(100) NOT NULL,
    cnpj CHAR(14) NOT NULL UNIQUE,
    cep CHAR(8) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(10),
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    senhaEmpresa VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS funcionario (
    idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
    nomeFuncionario VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    cpf CHAR(11) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(15) NOT NULL,
    senha VARCHAR(20),
    fkEmpresa INT,
    FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa)
);

CREATE TABLE IF NOT EXISTS hardware (
    idHardware INT PRIMARY KEY AUTO_INCREMENT,
    numeroSerie VARCHAR(40) NOT NULL UNIQUE,
    marca VARCHAR(40) NOT NULL,
    modelo VARCHAR(40) NOT NULL,
    processador VARCHAR(20) NOT NULL,
    geracao INT NOT NULL,
    memoria VARCHAR(10) NOT NULL,
    disco VARCHAR(50) NOT NULL,
    fkFuncionario INT,
    FOREIGN KEY (fkFuncionario) REFERENCES funcionario(idFuncionario)
);

CREATE TABLE IF NOT EXISTS dadosProcessos (
    idProcesso INT PRIMARY KEY AUTO_INCREMENT,
    dtHora DATETIME,
    nomeProcesso VARCHAR(100),
    tipo VARCHAR(50),
    fkHardware INT,
    FOREIGN KEY (fkHardware) REFERENCES hardware(idHardware)
);

CREATE TABLE IF NOT EXISTS dadosCpu (
    idCpu INT PRIMARY KEY AUTO_INCREMENT,
    uso DECIMAL(6, 4),
    velocidade DECIMAL(6, 4),
    nucleos INT,
    temperatura DECIMAL(6, 4),
    dtHoraCpu DATETIME,
    fkHardware INT,
    FOREIGN KEY (fkHardware) REFERENCES hardware(idHardware)
);

CREATE TABLE IF NOT EXISTS dadosDisco (
    idDisco INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(20),
    usoDisco DECIMAL(6, 4),
    espacoLivre DECIMAL(10, 5),
    temperatura DECIMAL(6, 4),
    dtHoraDisco DATETIME,
    fkHardware INT,
    FOREIGN KEY (fkHardware) REFERENCES hardware(idHardware)
);

CREATE TABLE IF NOT EXISTS dadosMemoria (
    idMemoria INT PRIMARY KEY AUTO_INCREMENT,
    uso DECIMAL(6, 4),
    usoPercentual DECIMAL(10, 5),
    escrita DECIMAL(6, 4),
    leitura DECIMAL(6, 4),
    temperatura DECIMAL(6, 4),
    dtHoraMemoria DATETIME,
    fkHardware INT,
    FOREIGN KEY (fkHardware) REFERENCES hardware(idHardware)
);

SHOW TABLES;
DESC funcionario;