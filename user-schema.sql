CREATE SCHEMA IF NOT EXISTS `usermanagement_node`;

CREATE TABLE `usermanagement_node`.`user` ( `id` INT NOT NULL AUTO_INCREMENT , `first_name` VARCHAR(45) NOT NULL , `last_name` VARCHAR(45) NOT NULL , `email` VARCHAR(45) NOT NULL , `phone` VARCHAR(45) NOT NULL , `comments` TEXT NOT NULL , `status` VARCHAR(45) NOT NULL DEFAULT 'active' , 
`date_created` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP , 
`date_modified` DATE NULL DEFAULT NULL ,
 PRIMARY KEY (`id`)) ENGINE = InnoDB; 