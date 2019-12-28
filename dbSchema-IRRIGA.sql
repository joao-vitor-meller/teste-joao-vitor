-- MySQL dump 10.13  Distrib 8.0.17, for Linux (x86_64)
--
-- Host: localhost    Database: IRRIGA
-- ------------------------------------------------------
-- Server version	8.0.17
DROP TABLE IF EXISTS `irriga`;
create database irriga;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `weather_data_1`
--

DROP TABLE IF EXISTS `weather_data_1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weather_data_1` (
  `id` int(11) NOT NULL,
  `air_temperature` float NOT NULL,
  `air_humidity` int(11) DEFAULT NULL,
  `wind_speed` float NOT NULL,
  `rainfall` float NOT NULL DEFAULT '0',
  `moment` datetime NOT NULL,
  PRIMARY KEY (`id`,`moment`),
  CONSTRAINT `weather_data_1_FK` FOREIGN KEY (`id`) REFERENCES `weather_stations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weather_data_1`
--

LOCK TABLES `weather_data_1` WRITE;
/*!40000 ALTER TABLE `weather_data_1` DISABLE KEYS */;
INSERT INTO `weather_data_1` VALUES (1,25,50,5.2,0,'2019-12-23 10:00:00');
/*!40000 ALTER TABLE `weather_data_1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weather_data_2`
--

DROP TABLE IF EXISTS `weather_data_2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weather_data_2` (
  `id` int(11) NOT NULL,
  `air_temperature` float NOT NULL,
  `air_humidity` int(11) DEFAULT NULL,
  `wind_speed` float NOT NULL,
  `rainfall` float NOT NULL DEFAULT '0',
  `moment` datetime NOT NULL,
  PRIMARY KEY (`id`,`moment`),
  CONSTRAINT `weather_data_2_FK` FOREIGN KEY (`id`) REFERENCES `weather_stations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weather_data_2`
--

LOCK TABLES `weather_data_2` WRITE;
/*!40000 ALTER TABLE `weather_data_2` DISABLE KEYS */;
/*!40000 ALTER TABLE `weather_data_2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weather_data_3`
--

DROP TABLE IF EXISTS `weather_data_3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weather_data_3` (
  `id` int(11) NOT NULL,
  `air_temperature` float NOT NULL,
  `air_humidity` int(11) DEFAULT NULL,
  `wind_speed` float NOT NULL,
  `rainfall` float NOT NULL DEFAULT '0',
  `moment` datetime NOT NULL,
  PRIMARY KEY (`id`,`moment`),
  CONSTRAINT `weather_data_3_FK` FOREIGN KEY (`id`) REFERENCES `weather_stations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weather_data_3`
--

LOCK TABLES `weather_data_3` WRITE;
/*!40000 ALTER TABLE `weather_data_3` DISABLE KEYS */;
/*!40000 ALTER TABLE `weather_data_3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weather_stations`
--

DROP TABLE IF EXISTS `weather_stations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weather_stations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `timezone` varchar(50) NOT NULL DEFAULT 'America/Sao_Paulo',
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `altitude` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weather_stations`
--

LOCK TABLES `weather_stations` WRITE;
/*!40000 ALTER TABLE `weather_stations` DISABLE KEYS */;
INSERT INTO `weather_stations` VALUES (1,'Santa Maria','America/Fortaleza',-29.6842,-53.8069,113),(2,'Budapest','Europe/Budapest',47.498,19.0399,527),(3,'Santiago','America/Santiago',-33.4592,-70.6453,570);
/*!40000 ALTER TABLE `weather_stations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;