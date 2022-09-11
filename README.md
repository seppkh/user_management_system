# User management system

Based on: https://www.youtube.com/watch?v=1aXZQcG2Y6I . Video covered building a basic user management system with options to add, edit, delete and search users. I selected this video to practice building a similar system on my own.

Tools used: Node.js, express, Mysql, express-handlebars, Bootstrap

Topics covered in video:
- setting up express server
- connecting to database
- using express-handlebars to manage reusable content
- using routes and controllers
- using Bootstrap for UI

## Setup
Clone repository to local directory:
```
mkdir user_management
cd user_management
git clone https://github.com/seppkh/user_management_system.git
```

## Run program
1. Start Mysql and Apache web server on local computer
2. Access database at https://localhost/phpmyadmin/
3. Use queries from user-schema.sql to create database and table
4. Start the project: 
```
npm start
```
Program runs at http://localhost:5000/