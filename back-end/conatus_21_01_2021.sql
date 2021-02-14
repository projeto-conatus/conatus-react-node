-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 20, 2021 at 07:53 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `conatus`
--

-- --------------------------------------------------------

--
-- Table structure for table `artigo`
--

DROP TABLE IF EXISTS `artigo`;
CREATE TABLE IF NOT EXISTS `artigo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) DEFAULT NULL,
  `subtitulo` varchar(50) DEFAULT NULL,
  `texto` longtext,
  `imagem` varchar(45) DEFAULT NULL,
  `data` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `autor` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_artigo_1_idx` (`autor`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `artigo`
--

INSERT INTO `artigo` (`id`, `titulo`, `subtitulo`, `texto`, `imagem`, `data`, `autor`) VALUES
(1, 'Teste Titulo novo', 'novo sub', 'Olá, tudo bem? oi de novo', 'fotonova.jpeg', '2021-01-16 14:45:51', NULL),
(4, 'oioi', 'teste', 'wwewewew.\r\nidiijdijiw.\r\nswswsw', 'novafoto.png', '2021-01-16 18:31:38', NULL),
(6, 'teste', 'teste', ' teste', 'teste.png', '2021-01-20 00:00:00', 'A001'),
(7, 'Com join', 'Pós join', 'testando o join', 'fotonova.jpeg', '2021-01-20 12:22:04', 'A001');

-- --------------------------------------------------------

--
-- Table structure for table `autores`
--

DROP TABLE IF EXISTS `autores`;
CREATE TABLE IF NOT EXISTS `autores` (
  `idAutor` varchar(10) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idAutor`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `autores`
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
-- Table structure for table `colaborador`
--

DROP TABLE IF EXISTS `colaborador`;
CREATE TABLE IF NOT EXISTS `colaborador` (
  `idColaborador` varchar(10) NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `senha` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idColaborador`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `colaborador`
--

INSERT INTO `colaborador` (`idColaborador`, `nome`, `senha`) VALUES
('1', 'root', 'conatus');

-- --------------------------------------------------------

--
-- Table structure for table `nivelescolaridade`
--

DROP TABLE IF EXISTS `nivelescolaridade`;
CREATE TABLE IF NOT EXISTS `nivelescolaridade` (
  `idEscolaridade` int(11) NOT NULL,
  `escolaridade` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idEscolaridade`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nivelescolaridade`
--

INSERT INTO `nivelescolaridade` (`idEscolaridade`, `escolaridade`) VALUES
(1, 'Ensino Fundamental'),
(2, 'Ensino Médio'),
(3, 'Ensino Superior');

-- --------------------------------------------------------

--
-- Table structure for table `tipoescola`
--

DROP TABLE IF EXISTS `tipoescola`;
CREATE TABLE IF NOT EXISTS `tipoescola` (
  `idEscola` int(11) NOT NULL,
  `escola` varchar(25) NOT NULL,
  PRIMARY KEY (`idEscola`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tipoescola`
--

INSERT INTO `tipoescola` (`idEscola`, `escola`) VALUES
(1, 'Pública - Rede Municipal'),
(2, 'Pública - Rede Federal'),
(3, 'Pública - Rede Estadual');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `sobrenome` varchar(100) NOT NULL,
  `cpf` varchar(100) NOT NULL,
  `dataNascimento` varchar(10) NOT NULL,
  `escolaridade` int(11) DEFAULT NULL,
  `tipoEscola` int(11) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `id_Usuario` (`idUsuario`),
  UNIQUE KEY `cpf` (`cpf`),
  UNIQUE KEY `email` (`email`),
  KEY `escolaridade_idx` (`escolaridade`),
  KEY `escola_idx` (`tipoEscola`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nome`, `sobrenome`, `cpf`, `dataNascimento`, `escolaridade`, `tipoEscola`, `email`, `senha`) VALUES
(10, 'maria', 'socorro', 'f24382c1a76dfb5b74f0266cfb048161', '1975-08-07', 1, 1, 'maria@socorro.com', 'e10adc3949ba59abbe56e057f20f883e');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
