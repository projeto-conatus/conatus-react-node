-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 20/01/2021 às 13:07
-- Versão do servidor: 8.0.22-0ubuntu0.20.04.3
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
  `imagem` varchar(45) DEFAULT NULL,
  `data` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `autor` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `artigo`
--

INSERT INTO `artigo` (`id`, `titulo`, `subtitulo`, `texto`, `imagem`, `data`, `autor`) VALUES
(1, 'Teste Titulo novo', 'novo sub', 'Olá, tudo bem? oi de novo', 'fotonova.jpeg', '2021-01-16 14:45:51', NULL),
(4, 'oioi', 'teste', 'wwewewew.\r\nidiijdijiw.\r\nswswsw', 'novafoto.png', '2021-01-16 18:31:38', NULL),
(6, 'teste', 'teste', ' teste', 'teste.png', '2021-01-20 00:00:00', 'A001'),
(7, 'Com join', 'Pós join', 'testando o join', 'fotonova.jpeg', '2021-01-20 12:22:04', 'A001');

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
  `idColaborador` varchar(10) NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `senha` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `colaborador`
--

INSERT INTO `colaborador` (`idColaborador`, `nome`, `senha`) VALUES
('1', 'root', 'conatus');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL,
  `nome` varchar(100) NOT NULL,
  `sobrenome` varchar(100) NOT NULL,
  `cpf` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `dataNascimento` varchar(10) NOT NULL,
  `escolaridade` varchar(50) DEFAULT NULL,
  `tipoEscola` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nome`, `sobrenome`, `cpf`, `dataNascimento`, `escolaridade`, `tipoEscola`, `email`, `senha`) VALUES
(7, 'kadu', 'duka', '432f45b44c432414d2f97df0e5743818', '2012-02-08', 'sexologia aplicada', 'universidade', 'c@c', 'e10adc3949ba59abbe56e057f20f883e'),
(8, 'Ana', 'Souza', 'bfd81ee3ed27ad31c95ca75e21365973', '2000-02-01', 'Ensino Médio', 'Publica', 'ana@souza.com', 'e10adc3949ba59abbe56e057f20f883e');

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
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `id_Usuario` (`idUsuario`),
  ADD UNIQUE KEY `cpf` (`cpf`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `artigo`
--
ALTER TABLE `artigo`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
