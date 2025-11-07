
CREATE TABLE `employees` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,

  `name` varchar(32) NOT NULL,
  `lastname_first` varchar(32) NOT NULL,
  `lastname_second` varchar(32) NULL,

  `birthdate` date NOT NULL,
  `email` varchar(64) NOT NULL UNIQUE,
  `phone` varchar(16) NOT NULL UNIQUE,

  `image` varchar(86) NULL,

  `identification` varchar(16) NOT NULL UNIQUE,
  `identification_type` int NOT NULL DEFAULT 1,

  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
);
