-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: sarf
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sarf_malzemeleri`
--

DROP TABLE IF EXISTS `sarf_malzemeleri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sarf_malzemeleri` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numara` text COLLATE utf8_turkish_ci NOT NULL,
  `tanim` text COLLATE utf8_turkish_ci NOT NULL,
  `tedarikci` text COLLATE utf8_turkish_ci NOT NULL,
  `agirlik` decimal(12,3) NOT NULL,
  `aktif_mi` tinyint NOT NULL,
  `kayit_tarihi` datetime NOT NULL,
  `guncelleme_tarihi` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_turkish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sarf_malzemeleri`
--

LOCK TABLES `sarf_malzemeleri` WRITE;
/*!40000 ALTER TABLE `sarf_malzemeleri` DISABLE KEYS */;
INSERT INTO `sarf_malzemeleri` VALUES (1,'35135','Eldiven','B Firması',0.200,1,'2022-03-30 23:10:16','2022-03-30 23:10:16'),(2,'55628','Kaynak Teli','A Firması',0.300,1,'2022-03-30 23:02:26','2022-03-30 23:02:26'),(3,'8887','Bardak','B Firması',1.200,0,'2022-03-30 23:15:53','2022-03-30 23:15:53'),(4,'65165','Matkap Ucu','A Firması',1.500,1,'2022-03-30 22:52:20','2022-03-30 22:52:20'),(5,'86413','Ayakkabı','C Firması',2.000,1,'2022-03-30 21:08:53','2022-03-30 21:08:53'),(6,'58648','Bone','X Firması',1.300,1,'2022-03-30 23:30:33','2022-03-30 23:30:33');
/*!40000 ALTER TABLE `sarf_malzemeleri` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-31  3:28:05
