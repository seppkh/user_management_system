
var db = require('../../database.js');
var pool = db.getPool();

// View All Users
exports.viewall = (req, res) => {
  // Connect to DB
  pool.getConnection((err, connection) => {
    if(err) throw err; // not connected
    console.log(`Connected as ID ${connection.threadId} oioioii`);
    // User the connection
    connection.query('SELECT * FROM user WHERE status = "active" ', (err, rows) => { 
      // when done with connection, release it
      connection.release();

      if(!err) {
        let removedUserAlert = req.query.removed;
        res.render('home', { rows, removedUserAlert });
      } else {
        console.log(err);
      }
      console.log('The data from users table: \n', rows);
    })
  });
};

// Find User by search
exports.find = (req, res) => {
  let searchTerm = req.body.search;

  // Connect to DB
  pool.getConnection((err, connection) => {
    if(err) throw err; // not connected
    console.log(`Connected as ID ${connection.threadId} oioioii`);

    // User the connection
    connection.query('SELECT * FROM user WHERE (first_name LIKE ? OR last_name LIKE ? OR email LIKE ? OR phone LIKE ?) AND status = "active" ', 
      ['%' + searchTerm + '%',
       '%' + searchTerm + '%', 
       '%' + searchTerm + '%', 
       '%' + searchTerm + '%'],
       (err, rows) => {
      // when done with connection, release it
      connection.release();

      if(!err) {
        res.render('home', { rows });
      } else {
        console.log(err);
      }
      console.log('The data from users table: \n', rows);
    });
  });
}

// Add User form
exports.form = (req, res) => {
  res.render('add-user');
};

// Create New user
exports.createuser = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body;
  const date = new Date().toISOString().slice(0, 10);

  console.log(first_name);


   // Connect to DB
   pool.getConnection((err, connection) => {
    if(err) throw err; // not connected
    console.log(`Connected as ID ${connection.threadId} oioioii`);

    // User the connection
    connection.query('INSERT INTO user (first_name, last_name, email, phone, comments, status, date_created) VALUES (?, ?, ?, ?, ?, "active", ?);', 
      [first_name, last_name, email, phone, comments, date], 
      (err, rows) => {
      // when done with connection, release it
      connection.release();

      if(!err) {
        res.render('add-user', { alert: `User ${first_name} ${last_name} added successfully`});
      } else {
        console.log(err);
      }
      console.log(`Added user ID ${res.insertId}: ${first_name} ${last_name}`);
    });
  });
}

// Edit User form
exports.editform = (req, res) => {
   // Connect to DB
   pool.getConnection((err, connection) => {
    if(err) throw err; // not connected
    console.log(`Connected as ID ${connection.threadId} oioioii`);
    // User the connection
    connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => { 
      // when done with connection, release it
      connection.release();

      if(!err) {
        res.render('edit-user', { rows });
      } else {
        console.log(err);
      }
      console.log('The data from users table: \n', rows);
    })
  });
};

// Update User
exports.updateuser = (req, res) => {
  const { first_name, last_name, email, phone, comments } = req.body;
  const date = new Date().toISOString().slice(0, 10);

  // Connect to DB
  pool.getConnection((err, connection) => {
    if(err) throw err; // not connected
    console.log(`Connected as ID ${connection.threadId} oioioii`);

    // User the connection
    connection.query('UPDATE user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?, date_modified = ? WHERE id = ?;', 
    [first_name, last_name, email, phone, comments, date, req.params.id], 
    (err, rows) => { 
      // when done with connection, release it
      connection.release();

      if(!err) {

        // Same query as from GET /edituser/:id
          // Connect to DB
          pool.getConnection((err, connection) => {
            if(err) throw err; // not connected
            console.log(`Connected as ID ${connection.threadId} oioioii`);
            // User the connection
            connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => { 
              // when done with connection, release it
              connection.release();

              if(!err) {
                res.render('edit-user', { rows, alert: "User edited successfully" });
              } else {
                console.log(err);
              }
              console.log('The data from users table: \n', rows);
            })
          });

      } else {
        console.log(err);
      }
      console.log('The data from users table: \n', rows);
   })
 });
};



// Delete User
exports.deleteuser = (req, res) => {
  // Connect to DB
  pool.getConnection((err, connection) => {
    if(err) throw err; // not connected
    console.log(`Connected as ID ${connection.threadId} oioioii`);

    // User the connection
    connection.query('UPDATE user SET status = "deleted" WHERE id = ?', [req.params.id], 
    (err, rows) => {
      // when done with connection, release it
      connection.release();

      if(!err) {
        let removedUser = encodeURIComponent('User removed successfully')
        res.redirect('/?removed=' + removedUser);
      } else {
        console.log(err);
      }
      console.log('The data from users table: \n', rows);
    });
  });
}

// View One User
exports.viewuser = (req, res) => {
  // Connect to DB
  pool.getConnection((err, connection) => {
    if(err) throw err; // not connected
    console.log(`Connected as ID ${connection.threadId} oioioii`);
    // User the connection
    connection.query('SELECT * FROM user WHERE id = ? ', [req.params.id], 
    (err, rows) => { 
      // when done with connection, release it
      connection.release();

      if(!err) {
        res.render('view-user', { rows });
      } else {
        console.log(err);
      }
      console.log('The data from users table: \n', rows);
    })
  });
};