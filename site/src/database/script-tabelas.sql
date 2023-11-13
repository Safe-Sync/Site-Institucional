
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
    INSERT INTO empresas VALUES 
    (null, 'Nome Fantasia Empresa', 'Razão Social Empresa', '12345678901234', '12345-678', 123, 'Compleme', 'empresa@example.com', '123456789', 'senha123');



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
    INSERT INTO funcionarios VALUES 
    (null, 'Nome Funcionário', 'Cargo Funcionário', '123.456.789-01', 'funcionario@example.com', '987654321', 'senha456', 1);
    
    Insert into funcionarios values
    (null, 'Pedro', 'Gerente', '123.456.789-01', 'Pedroo@gmail.com', '987654321', '12345', 1);
    select * from funcionarios;




create table if not exists hardwares(
	id int primary key auto_increment,
	sistemaOperacional varchar(50),
    totalCpu double not null,
	totalDisco double NOT NULL,
	totalRam double NOT NULL
);

INSERT INTO hardwares (sistemaOperacional, totalCpu, totalDisco, totalRam)
VALUES ('Windows 10', 3.4, 500.0, 8.0),
       ('macOS Catalina', 2.8, 256.0, 16.0),
       ('Ubuntu 20.04', 2.2, 128.0, 4.0),
       ('Windows 11', 4.0, 512.0, 12.0),
       ('macOS Big Sur', 3.0, 256.0, 8.0);


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



CREATE TABLE IF NOT EXISTS tarefa (
  idTarefa INT PRIMARY KEY auto_increment,
  nome_tarefa LONGTEXT NOT NULL,
  data_upload DATE NOT NULL,
  progresso VARCHAR(45) NOT NULL,
  CONSTRAINT check_progresso CHECK (progresso IN ('Não iniciado', 'Em Andamento', 'Concluído', 'A Fazer')),
  fkFuncionario INT,
  FOREIGN KEY (fkfuncionario) REFERENCES funcionarios(idFuncionario)
);

select * from funcionarios;
select * from empresas;
select * from tarefa;

SELECT idFuncionario FROM funcionarios;

select idFuncionario, nomeFuncionario, cargo, email from funcionarios;

SELECT idTarefa, nome_tarefa, data_upload, progresso FROM tarefa WHERE fkFuncionario = 3;

SELECT COUNT(idFuncionario) AS quantidade_funcionarios FROM funcionarios WHERE fkEmpresa = 1;

SELECT COUNT(*) AS quantidade_de_tarefas FROM tarefa;

SELECT COUNT(*) AS quantidade_tarefas_entregues
FROM tarefa WHERE progresso = 'Concluído';

SELECT COUNT(*) AS total_tarefas_entregues
FROM tarefa
WHERE progresso != 'Concluído' AND MONTH(data_upload) = MONTH(NOW()) AND fkFuncionario = 3;


SELECT  COUNT(*) as Tarefas_Concluidas
FROM tarefa
WHERE progresso = 'Concluído';

select * from tarefa 
WHERE progresso = 'Concluído';

SELECT COUNT(*) as Tarefas_Pendentes
FROM tarefa
WHERE progresso != 'Concluído';

SELECT f.nomeFuncionario, COUNT(t.idTarefa) AS totalTarefasConcluidas
	FROM funcionarios f LEFT JOIN tarefa t 
		ON f.idFuncionario = t.fkFuncionario AND t.progresso = 'Concluído' WHERE f.fkEmpresa = 1 
			GROUP BY f.nomeFuncionario
				ORDER BY totalTarefasConcluidas DESC LIMIT 5;

SELECT COUNT(t.idTarefa) AS totalTarefasEntregues FROM empresas e
	JOIN funcionarios f ON e.idEmpresa = f.fkEmpresa
		JOIN tarefa t ON f.idFuncionario = t.fkFuncionario
			WHERE e.idEmpresa = 1 AND t.progresso = 'Concluído'
				AND MONTH(t.data_upload) = MONTH(CURRENT_DATE())
					AND YEAR(t.data_upload) = YEAR(CURRENT_DATE());

SELECT f.nomeFuncionario, f.cargo,
    SUM(CASE WHEN t.progresso = 'Não Iniciado' THEN 1 ELSE 0 END) AS tarefasNaoIniciado,
    SUM(CASE WHEN t.progresso = 'Concluído' THEN 1 ELSE 0 END) AS tarefasConcluido,
    SUM(CASE WHEN t.progresso IN ('A Fazer', 'Em Andamento') THEN 1 ELSE 0 END) AS tarefasAFazerEmAndamento
		FROM funcionarios f LEFT JOIN tarefa t ON f.idFuncionario = t.fkFuncionario WHERE fkEmpresa = 2
			GROUP BY f.nomeFuncionario, f.cargo;


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


