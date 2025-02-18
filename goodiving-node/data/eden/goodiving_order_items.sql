-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: goodiving
-- ------------------------------------------------------
-- Server version	8.0.38

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
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `order_item_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_variant_id` int NOT NULL,
  `quantity` int NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`order_item_id`),
  KEY `order_id` (`order_id`),
  KEY `product_variant_id` (`product_variant_id`),
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_variant_id`) REFERENCES `product_variants` (`product_variant_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `order_items_ibfk_3` FOREIGN KEY (`order_id`) REFERENCES `order_list` (`order_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=177 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,1,87,1,1400),(2,1,10,1,3200),(3,1,30,1,8200),(4,2,24,1,7500),(5,3,1,2,1400),(6,4,4,1,1700),(7,5,1,1,1400),(8,5,82,1,80),(9,5,35,1,11200),(13,9,4,1,1700),(14,9,1,3,1400),(15,9,77,1,5100),(16,9,39,1,4200),(17,9,24,3,7500),(18,9,9,1,3200),(23,11,56,1,1950),(24,11,1,1,1400),(25,11,25,1,7500),(26,11,24,1,7500),(27,12,1,1,1400),(28,12,24,1,7500),(29,12,39,1,4200),(30,12,56,1,1950),(31,12,71,1,22400),(32,12,79,1,300),(33,13,1,1,1400),(34,13,82,1,80),(35,13,80,1,200),(36,13,83,1,2700),(37,13,78,1,250),(38,13,79,1,300),(39,13,77,1,5100),(40,14,1,1,1400),(41,15,1,2,1400),(42,15,4,1,1700),(43,15,53,1,1600),(44,15,45,1,1800),(45,15,38,1,3800),(46,15,19,1,2750),(54,21,9,1,3200),(55,21,24,1,7500),(56,21,39,1,4200),(57,22,9,1,3200),(58,22,52,1,3700),(59,22,65,1,1800),(60,22,71,1,22400),(61,23,9,1,3200),(62,23,1,1,1400),(63,23,38,1,3800),(64,23,24,1,7500),(65,23,39,1,4200),(66,23,43,1,3200),(67,23,58,1,2150),(68,23,56,1,1950),(69,23,71,1,22400),(70,23,77,1,5100),(71,24,9,1,3200),(72,24,1,1,1400),(73,24,29,1,8200),(74,24,82,1,80),(75,24,81,1,170),(76,24,79,1,300),(77,24,66,1,3200),(78,25,9,1,3200),(79,25,1,1,1400),(80,25,4,1,1700),(81,25,24,1,7500),(82,25,53,1,1600),(83,25,45,1,1800),(84,25,62,1,1200),(85,25,70,1,890),(86,25,74,1,8100),(87,26,1,1,1400),(88,26,4,1,1700),(89,26,24,1,7500),(90,26,25,1,7500),(91,26,43,1,3200),(92,26,62,1,1200),(93,26,73,1,15700),(94,26,82,1,80),(95,26,81,1,170),(96,27,9,1,3200),(97,27,1,1,1400),(98,27,38,1,3800),(99,27,24,1,7500),(100,27,43,1,3200),(101,27,45,1,1800),(102,27,53,1,1600),(103,27,52,1,3700),(104,27,70,1,890),(105,27,62,1,1200),(106,27,65,1,1800),(107,27,76,1,35200),(108,27,75,1,42600),(109,27,79,1,300),(110,27,78,1,250),(111,28,77,1,5100),(112,28,83,1,2700),(113,28,33,1,9500),(114,29,76,1,35200),(115,29,75,1,42600),(116,29,74,1,8100),(117,29,71,1,22400),(118,29,72,1,72000),(119,29,73,1,15700),(120,29,77,1,5100),(121,29,78,1,250),(122,29,79,1,300),(123,29,80,1,200),(124,29,81,1,170),(125,29,82,1,80),(126,29,83,1,2700),(127,29,56,1,1950),(128,29,58,1,2150),(129,29,62,1,1200),(130,29,70,1,890),(131,29,66,1,3200),(132,29,65,1,1800),(133,29,39,1,4200),(134,29,43,1,3200),(135,29,45,1,1800),(136,29,53,1,1600),(137,29,52,1,3700),(138,29,48,1,3850),(139,29,24,1,7500),(140,29,25,1,7500),(141,29,29,1,8200),(142,29,38,1,3800),(143,29,35,1,11200),(144,29,33,1,9500),(145,29,1,1,1400),(146,29,4,1,1700),(147,29,9,1,3200),(148,29,19,1,2750),(149,29,16,1,2800),(150,29,13,1,2500),(151,30,1,1,1400),(152,30,45,1,1800),(153,30,74,1,8100),(154,31,1,1,1400),(155,31,74,1,8100),(156,31,45,1,1800),(157,32,1,1,1400),(158,32,82,1,80),(159,32,74,1,8100),(160,32,45,1,1800),(161,33,1,1,1400),(162,33,82,1,80),(163,34,1,1,1400),(164,34,24,1,7500),(165,35,1,1,1400),(166,35,74,1,8100),(167,36,45,2,1800),(168,36,58,1,2150),(170,38,4,1,1700),(171,38,29,1,8200),(172,39,9,1,3200),(175,41,77,1,5100),(176,42,74,3,8100);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-18 15:57:04
