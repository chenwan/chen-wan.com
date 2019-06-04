-- phpMyAdmin SQL Dump
-- version 2.8.0.1
-- http://www.phpmyadmin.net
-- 
-- Host: custsql-ipg48.eigbox.net
-- Generation Time: Oct 30, 2018 at 02:40 PM
-- Server version: 5.6.41
-- PHP Version: 4.4.9
-- 
-- Database: `answers`
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table `meaningoflife`
-- 

CREATE TABLE `meaningoflife` (
  `answer` varchar(256) NOT NULL,
  `nickname` varchar(16) NOT NULL,
  `likes` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

-- 
-- Dumping data for table `meaningoflife`
-- 

INSERT INTO `meaningoflife` VALUES ('Life has no meaning.', '', 9, 1);
INSERT INTO `meaningoflife` VALUES ('42', '', 7, 2);
INSERT INTO `meaningoflife` VALUES ('1. be happy.2. help others be happy.', '', 12, 3);
INSERT INTO `meaningoflife` VALUES ('There is only one meaning of life: the act of living itself.', 'Erich Fromm', 2, 4);
INSERT INTO `meaningoflife` VALUES ('life (n): a sxually transmitted disease which always ends in death. there is currently no known cure.', '', 6, 5);
INSERT INTO `meaningoflife` VALUES ('The meaning of life is life.', 'Alan Alda', 3, 6);
INSERT INTO `meaningoflife` VALUES ('I think essentially the meaning of life is probably the journey and not really any one thing or an outcome or a result. I think it''s kinda the process and I think that if you can find happiness in the process then maybe that''s it.', 'Charisma Carpent', 2, 7);
INSERT INTO `meaningoflife` VALUES ('The meaning of life is to find your gift. The purpose of life is to give it away.', 'Pablo Picasso', 0, 8);
INSERT INTO `meaningoflife` VALUES ('Sometimes it''s a chicken. Sometimes it''s a chair. Sometimes it''s a piece of cheese suspended in the air.', '', 4, 9);
INSERT INTO `meaningoflife` VALUES ('Love', '', 14, 10);
INSERT INTO `meaningoflife` VALUES ('A movie by Monty Python', '', 2, 11);
INSERT INTO `meaningoflife` VALUES ('poop', '', 7, 12);
INSERT INTO `meaningoflife` VALUES ('https://en.wikipedia.org/wiki/Meaning_of_life', '', 0, 13);
INSERT INTO `meaningoflife` VALUES ('The meaning of life is to give life a meaning.', '', 4, 14);
INSERT INTO `meaningoflife` VALUES ('Life is everything we believe in', 'Jay', 3, 15);
INSERT INTO `meaningoflife` VALUES ('Wan, your beauty is a breath of fresh air', 'Jay', 2, 16);
INSERT INTO `meaningoflife` VALUES ('The first step towards finding the meaning of life is to believe that you will find love and freedom before you die young.', '2018/03/14', 0, 23);
INSERT INTO `meaningoflife` VALUES ('to share your heart with another', 'CM', 1, 18);
INSERT INTO `meaningoflife` VALUES ('Some old guy once said that the meaning of life is that it ends.', 'Lee Child', 2, 19);
INSERT INTO `meaningoflife` VALUES ('an answer you find at the end of a short film.', '', 1, 20);
INSERT INTO `meaningoflife` VALUES ('I don''t know.', '', 1, 21);
INSERT INTO `meaningoflife` VALUES ('There is none.', 'Ken', 0, 22);
