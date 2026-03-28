CREATE DATABASE IF NOT EXISTS `Quizzer`;
USE `Quizzer`;

-- Table structure for `users`
CREATE TABLE IF NOT EXISTS `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(255) NOT NULL,
    `password_hash` varchar(255) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for `contacts`
CREATE TABLE IF NOT EXISTS `contacts` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `first_name` varchar(100) NOT NULL,
    `last_name` varchar(100) DEFAULT NULL,
    `email` varchar(255) NOT NULL,
    `address` varchar(255) DEFAULT NULL,
    `country` varchar(100) DEFAULT NULL,
    `message` text NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sample administrative insertion (optional)
-- INSERT INTO `users` (`email`, `password_hash`) VALUES ('admin@quizzer.com', '$2y$10$Qx9zB4Y1Cj....');
