
create table table `employees` (
  `id` int not null primary key auto_increment,

  `name` varchar(32) not null,
  `lastname_first` varchar(32) not null,
  `lastname_second` varchar(32) null,

  `birthdate` date not null,
  `email` varchar(64) not null unique,
  `password` varchar(8) not null,
  `phone` varchar(16) not null unique,

  `image` varchar(86) null,

  `identification` varchar(16) not null unique,
  `identification_type` int not null default 1,

  `status` tinyint(1) not null default 1,
  `created_at` timestamp not null default current_timestamp,
  `updated_at` timestamp not null default current_timestamp on update current_timestamp
);
