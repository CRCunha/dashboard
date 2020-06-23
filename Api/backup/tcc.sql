-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 21-Jun-2020 às 23:50
-- Versão do servidor: 8.0.20
-- versão do PHP: 7.3.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `tcc`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `bar`
--

CREATE TABLE `bar` (
  `country` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `hot dog` varchar(7) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `hot dogColor` varchar(18) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `burger` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `burgerColor` varchar(18) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sandwich` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sandwichColor` varchar(18) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `kebab` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `kebabColor` varchar(18) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `fries` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `friesColor` varchar(18) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `donut` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `donutColor` varchar(18) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `bar`
--

INSERT INTO `bar` (`country`, `hot dog`, `hot dogColor`, `burger`, `burgerColor`, `sandwich`, `sandwichColor`, `kebab`, `kebabColor`, `fries`, `friesColor`, `donut`, `donutColor`) VALUES
('AD', '109', 'hsl(11, 70%, 50%)', '26', 'hsl(231, 70%, 50%)', '97', 'hsl(359, 70%, 50%)', '40', 'hsl(190, 70%, 50%)', '120', 'hsl(94, 70%, 50%)', '4', 'hsl(28, 70%, 50%)'),
('AE', '181', 'hsl(164, 70%, 50%)', '67', 'hsl(17, 70%, 50%)', '146', 'hsl(115, 70%, 50%)', '191', 'hsl(187, 70%, 50%)', '157', 'hsl(289, 70%, 50%)', '199', 'hsl(109, 70%, 50%)'),
('AF', '126', 'hsl(93, 70%, 50%)', '14', 'hsl(102, 70%, 50%)', '138', 'hsl(260, 70%, 50%)', '49', 'hsl(330, 70%, 50%)', '125', 'hsl(42, 70%, 50%)', '160', 'hsl(354, 70%, 50%)'),
('AG', '41', 'hsl(62, 70%, 50%)', '103', 'hsl(330, 70%, 50%)', '166', 'hsl(87, 70%, 50%)', '39', 'hsl(130, 70%, 50%)', '90', 'hsl(149, 70%, 50%)', '120', 'hsl(48, 70%, 50%)'),
('AI', '86', 'hsl(67, 70%, 50%)', '197', 'hsl(30, 70%, 50%)', '24', 'hsl(84, 70%, 50%)', '62', 'hsl(225, 70%, 50%)', '50', 'hsl(204, 70%, 50%)', '164', 'hsl(288, 70%, 50%)'),
('AL', '194', 'hsl(226, 70%, 50%)', '77', 'hsl(271, 70%, 50%)', '85', 'hsl(316, 70%, 50%)', '156', 'hsl(177, 70%, 50%)', '125', 'hsl(77, 70%, 50%)', '121', 'hsl(171, 70%, 50%)'),
('AM', '131', 'hsl(153, 70%, 50%)', '126', 'hsl(230, 70%, 50%)', '101', 'hsl(69, 70%, 50%)', '110', 'hsl(217, 70%, 50%)', '8', 'hsl(260, 70%, 50%)', '123', 'hsl(128, 70%, 50%)');

-- --------------------------------------------------------

--
-- Estrutura da tabela `bump`
--

CREATE TABLE `bump` (
  `d` varchar(8) DEFAULT NULL,
  `data__x` int DEFAULT NULL,
  `data__y` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `bump`
--

INSERT INTO `bump` (`d`, `data__x`, `data__y`) VALUES
('Serie 1', 2000, 1),
('', 2001, 6),
('', 2002, 11),
('', 2003, 7),
('', 2004, 2),
('Serie 2', 2000, 10),
('', 2001, 11),
('', 2002, 3),
('', 2003, 8),
('', 2004, 8),
('Serie 3', 2000, 8),
('', 2001, 4),
('', 2002, 7),
('', 2003, 11),
('', 2004, 1),
('Serie 4', 2000, 12),
('', 2001, 1),
('', 2002, 10),
('', 2003, 3),
('', 2004, 12),
('Serie 5', 2000, 11),
('', 2001, 8),
('', 2002, 12),
('', 2003, 12),
('', 2004, 3),
('Serie 6', 2000, 2),
('', 2001, 12),
('', 2002, 5),
('', 2003, 1),
('', 2004, 11),
('Serie 7', 2000, 6),
('', 2001, 10),
('', 2002, 4),
('', 2003, 4),
('', 2004, 5),
('Serie 8', 2000, 7),
('', 2001, 2),
('', 2002, 6),
('', 2003, 10),
('', 2004, 4),
('Serie 9', 2000, 5),
('', 2001, 5),
('', 2002, 9),
('', 2003, 5),
('', 2004, 6),
('Serie 10', 2000, 4),
('', 2001, 7),
('', 2002, 8),
('', 2003, 9),
('', 2004, 7),
('Serie 11', 2000, 9),
('', 2001, 9),
('', 2002, 2),
('', 2003, 6),
('', 2004, 9),
('Serie 12', 2000, 3),
('', 2001, 3),
('', 2002, 1),
('', 2003, 2),
('', 2004, 10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `nome` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `senha` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `nome`, `email`, `senha`) VALUES
(1, 'Cristian', 'contato@cristiancunha.me', 'teste');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
