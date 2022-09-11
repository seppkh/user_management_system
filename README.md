**User management system**

Video: https://www.youtube.com/watch?v=1aXZQcG2Y6I
Video covered building a basic user management system with options to add, edit, delete and search users. I selected this video to practice building a similar system on my own.

Tools used: Node.js, express, Mysql, express-handlebars, Bootstrap

Topics covered in video:
- setting up express server
- connecting to database
- using express-handlebars to manage reusable content
- using routes and controllers
- using Bootstrap for UI

***Setup:***
mkdir user_management
cd user_management
clone repository – address

***Run program:***
Start Mysql and Apache web server on local computer
npm start
Program runs at http://localhost:5000/
Access database at https://localhost/phpmyadmin/

.env file:
DB_HOST = localhost
DB_NAME = usermanagement_node
DB_USER = root
DB_PASS =
DB_PORT = 5000