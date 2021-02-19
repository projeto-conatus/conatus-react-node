-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 17/02/2021 às 17:46
-- Versão do servidor: 8.0.23-0ubuntu0.20.04.1
-- Versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `conatus`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `artigo`
--

CREATE TABLE `artigo` (
  `id` int NOT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `subtitulo` varchar(50) DEFAULT NULL,
  `texto` longtext,
  `imagem` varchar(300) DEFAULT NULL,
  `data` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `autor` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `artigo`
--

INSERT INTO `artigo` (`id`, `titulo`, `subtitulo`, `texto`, `imagem`, `data`, `autor`) VALUES
(7, 'Com join', 'Pós join', 'testando o join', 'fotonova.jpeg', '2021-01-20 12:22:04', 'A001'),
(8, 'testando refatoração', 'teste no insomnia', 'texto teste refatoração e insomnia - fazendo update aqui', 'teste.png', '2021-02-14 12:57:59', 'A001');

-- --------------------------------------------------------

--
-- Estrutura para tabela `autores`
--

CREATE TABLE `autores` (
  `idAutor` varchar(10) NOT NULL,
  `nome` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `autores`
--

INSERT INTO `autores` (`idAutor`, `nome`) VALUES
('A001', 'Nathalia Dantas'),
('A002', 'Carlos Eduardo'),
('A003', 'Marcos Antônio'),
('A004', 'Welington Miranda'),
('A005', 'Larissa Oliveira'),
('A006', 'Midian Brandão');

-- --------------------------------------------------------

--
-- Estrutura para tabela `colaborador`
--

CREATE TABLE `colaborador` (
  `idColaborador` int NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `senha` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `colaborador`
--

INSERT INTO `colaborador` (`idColaborador`, `nome`, `senha`) VALUES
(1, 'root', '$2a$10$s9dT2.pHleTJZ7oRmuO41eMStVywUwpUEm1AcVBRQ552C.hOD/s8C'),
(2, 'teste1', '123456'),
(13, 'testeCrypto', 'e10adc3949ba59abbe56e057f20f883e');

-- --------------------------------------------------------

--
-- Estrutura para tabela `mentor`
--

CREATE TABLE `mentor` (
  `idMentor` int NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `cargoAtual` varchar(45) DEFAULT NULL,
  `formacao` varchar(45) DEFAULT NULL,
  `descricao` longtext,
  `linkedin` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `foto` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `mentor`
--

INSERT INTO `mentor` (`idMentor`, `nome`, `cargoAtual`, `formacao`, `descricao`, `linkedin`, `email`, `foto`) VALUES
(1, 'Exemplo1', 'Desenvolvedora Full Stack', 'Tecnologo em Análise de Sistemas', 'Sou desenvolvedora há cerca de X anos. Tenho experiência com as linguagens W, K e L. Gosto muito de trabalhar com tal, tal e tal coisa. ', 'https://www.linkedin.com/', 'exemplo@gmail.com', 'http://carismartes.com.br/assets/global/images/avatars/avatar5_big@2x.png');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL,
  `nome` varchar(100) NOT NULL,
  `sobrenome` varchar(100) NOT NULL,
  `cpf` varchar(100) NOT NULL,
  `dataNascimento` varchar(10) NOT NULL,
  `escolaridade` varchar(50) DEFAULT NULL,
  `tipoEscola` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `vaga`
--

CREATE TABLE `vaga` (
  `idVaga` int NOT NULL,
  `cargo` varchar(45) DEFAULT NULL,
  `empresa` varchar(45) DEFAULT NULL,
  `descricao` longtext,
  `requisitos` longtext,
  `contato` mediumtext,
  `dataCadastro` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `vaga`
--

INSERT INTO `vaga` (`idVaga`, `cargo`, `empresa`, `descricao`, `requisitos`, `contato`, `dataCadastro`) VALUES
(1, 'Desenvolvedor Full Stack Jr', 'Exemplo', 'Desenvolvimento e manutenção de aplicações web; Realização de manutenção e criação de novas funcionalidades; Desenvolvimento Frontend; Desenvolvimento Backend.', 'Experiência PHP. Conhecimentos desejáveis : Experiência com CakePHP ou outro framework PHP; Conhecimento em MySQL, jQuery, Bootstrap, Framework MVC, API Restful;', 'https://neuvoo.com.br/', '2021-02-15 09:43:53');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `artigo`
--
ALTER TABLE `artigo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_artigo_1_idx` (`autor`);

--
-- Índices de tabela `autores`
--
ALTER TABLE `autores`
  ADD PRIMARY KEY (`idAutor`);

--
-- Índices de tabela `colaborador`
--
ALTER TABLE `colaborador`
  ADD PRIMARY KEY (`idColaborador`);

--
-- Índices de tabela `mentor`
--
ALTER TABLE `mentor`
  ADD PRIMARY KEY (`idMentor`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `id_Usuario` (`idUsuario`),
  ADD UNIQUE KEY `cpf` (`cpf`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `escolaridade_idx` (`escolaridade`),
  ADD KEY `escola_idx` (`tipoEscola`);

--
-- Índices de tabela `vaga`
--
ALTER TABLE `vaga`
  ADD PRIMARY KEY (`idVaga`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `artigo`
--
ALTER TABLE `artigo`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `colaborador`
--
ALTER TABLE `colaborador`
  MODIFY `idColaborador` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `mentor`
--
ALTER TABLE `mentor`
  MODIFY `idMentor` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `vaga`
--
ALTER TABLE `vaga`
  MODIFY `idVaga` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `artigo`
--
ALTER TABLE `artigo`
  ADD CONSTRAINT `fk_artigo_1` FOREIGN KEY (`autor`) REFERENCES `autores` (`idAutor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
