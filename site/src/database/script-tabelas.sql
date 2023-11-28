CREATE DATABASE IF NOT EXISTS SafeSync;
USE SafeSync;

 -- drop database SafeSync;

CREATE TABLE IF NOT EXISTS empresas (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nomeFantasia VARCHAR(100) NOT NULL,
    razaoSocial VARCHAR(100) NOT NULL,
    cnpj CHAR(18) NOT NULL UNIQUE,
    cep CHAR(9) NOT NULL,
    numero VARCHAR(5) NOT NULL,
    complemento VARCHAR(100),
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    senhaEmpresa VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS funcionarios (
    idFuncionario INT AUTO_INCREMENT,
    nomeFuncionario VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    cpf CHAR(14) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(15) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    fkEmpresa INT,
    FOREIGN KEY (fkEmpresa) REFERENCES empresas(idEmpresa),
    PRIMARY KEY (idFuncionario, fkEmpresa) 
);

CREATE TABLE IF NOT EXISTS hardwares(
	idHardware INT AUTO_INCREMENT,
	sistemaOperacional VARCHAR(50),
    totalCpu DOUBLE NOT NULL,
	totalDisco DOUBLE NOT NULL,
	totalRam DOUBLE NOT NULL,
    fkEmpresa INT NOT NULL,
	fkFuncionario INT NOT NULL,
	FOREIGN KEY (fkFuncionario) REFERENCES funcionarios(idFuncionario),
    FOREIGN KEY (fkEmpresa) REFERENCES empresas(idEmpresa),
    PRIMARY KEY (idHardware, fkEmpresa, fkFuncionario)
);

CREATE TABLE IF NOT EXISTS volateis(
	idVolateis INT AUTO_INCREMENT,
	consumoCpu DOUBLE NOT NULL,
	consumoDisco DOUBLE NOT NULL,
	consumoRam DOUBLE NOT NULL,
	totalJanelas INT NOT NULL,
	dataHora DATETIME,
	fkHardware INT,
	FOREIGN KEY (fkHardware) REFERENCES hardwares(idHardware),
	PRIMARY KEY (idVolateis, fkHardware)
);

CREATE TABLE IF NOT EXISTS limitador(
	idLimitador INT AUTO_INCREMENT,
    maxCpu INT NOT NULL,
    maxDisco INT NOT NULL,
	maxRam INT NOT NULL,
	fkEmpresa INT NOT NULL,
	FOREIGN KEY (fkEmpresa) REFERENCES empresas(idEmpresa),
    PRIMARY KEY (idLimitador, fkEmpresa)
);

CREATE TABLE IF NOT EXISTS tarefa (
  idTarefa INT auto_increment,
  nome_tarefa LONGTEXT NOT NULL,
  data_upload DATE NOT NULL,
  progresso VARCHAR(45) NOT NULL,
  CONSTRAINT check_progresso CHECK (progresso IN ('Não iniciado', 'Em Andamento', 'Concluído', 'A Fazer')),
  fkFuncionario INT,
  FOREIGN KEY (fkfuncionario) REFERENCES funcionarios(idFuncionario),
  PRIMARY KEY (idTarefa, fkFuncionario)
);



show tables;

-- Inserts para a tabela empresas
INSERT INTO empresas (nomeFantasia, razaoSocial, cnpj, cep, numero, complemento, email, telefone, senhaEmpresa) 
VALUES ('Empresa A', 'Razao Social A', '12345678901234', '12345678', '123', 'Sala 1', 'empresaA@email.com', '123456789', 'senha123'),
       ('Empresa B', 'Razao Social B', '56789012345678', '87654321', '456', 'Sala 2', 'empresaB@email.com', '987654321', 'senha456');

-- Inserts para a tabela funcionarios
INSERT INTO funcionarios (nomeFuncionario, cargo, cpf, email, telefone, senha, fkEmpresa) 
VALUES ('Funcionario 1', 'Cargo 1', '12345678901', 'funcionario1@email.com', '111222333', 'senhaFunc1', 1),
       ('Funcionario 2', 'Cargo 2', '98765432109', 'funcionario2@email.com', '444555666', 'senhaFunc2', 2);

-- Inserts para a tabela hardwares
-- INSERT INTO hardwares (sistemaOperacional, totalCpu, totalDisco, totalRam, fkEmpresa, fkFuncionario) 
-- VALUES ('Windows', 4.0, 1024.0, 8.0, 1, 1),
   --    ('Linux', 2.0, 512.0, 4.0, 2, 2);

-- Inserts para a tabela limitador
 -- INSERT INTO limitador (tipoComponente, maxCpu, maxDisco, maxRam, fkEmpresa) 
-- VALUES ('CPU', 80, 1024, 16, 1),
   --    ('Disco', 512, 2048, 8, 2);
       
SELECT f.idFuncionario, 
       f.nomeFuncionario,
		v.idVolateis, 
       ROUND(v.consumoCpu, 2) AS consumoCpu, 
       v.totalJanelas, 
       v.dataHora,
		ROUND(v.consumoRam, 2) AS consumoRam,
       ROUND(v.consumoDisco, 2) AS consumoDisco,
       Round(h.totalDisco, 2) AS totalDisco       
FROM volateis v
JOIN hardwares h ON v.fkHardware = h.idHardware
JOIN funcionarios f ON h.fkFuncionario = f.idFuncionario
WHERE f.idFuncionario = 1  
       AND v.dataHora = (SELECT MAX(dataHora) FROM volateis WHERE fkHardware = h.idHardware)
       AND h.totalCpu IS NOT NULL
ORDER BY v.dataHora DESC
LIMIT 1;



	
select * from empresas;
select * from funcionarios;
select * from volateis;
select * from hardwares;
select * from limitador;

  SELECT v.*, h.*
    FROM hardwares h
    LEFT JOIN volateis v ON h.idHardware = v.fkHardware
    WHERE h.fkFuncionario = 1 AND (
        v.idVolateis IS NULL OR
        (v.fkHardware, v.dataHora) = (
            SELECT v1.fkHardware, MAX(v1.dataHora) AS ultima_data
            FROM volateis v1
            WHERE v1.fkHardware =1  
            GROUP BY v1.fkHardware
        )
    )
    LIMIT 1;
    
       SELECT v.*, h.*
    FROM hardwares h
    LEFT JOIN volateis v ON h.idHardware = v.fkHardware
    WHERE h.fkFuncionario = 1 AND (
        v.idVolateis IS NULL OR
        (v.fkHardware, v.dataHora) = (
            SELECT v1.fkHardware, MAX(v1.dataHora) AS ultima_data
            FROM volateis v1
            WHERE v1.fkHardware = 1  
            GROUP BY v1.fkHardware
        )
    );