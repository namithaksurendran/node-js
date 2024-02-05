var mysql = require('mysql');
const readline = require('readline');
// create a connection to the database
const con=mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "namitha"
});
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// connect to the database
con.connect(function (error) {
  if (error) throw error;
  console.log("Connected");

  rl.question("Choose CRUD operation (1: Insert, 2: Update, 3: Delete, 4: Select): ", function (operation) {
    switch (operation) {
      case '1':
        rl.question("Enter customer details (customerID,Name, Address, City): ", function (details) {
          const [customerid,Name, Address, City] = details.split(',').map(value => value.trim());
          con.query("INSERT INTO `customers` VALUES (?, ?, ?, ?, ?, ?)", [customerID,Name, Address, City], function (error, result) {
            if (error) throw error;
            console.log(result);
            con.end();
            rl.close();
          });
        });
        break;

      case '2':
        rl.question("Enter customerid to update: ", function (workerId) {
          rl.question("Enter updated customer details (customerID,Name, Address, City): ", function (details) {
            const [customerid,Name, Address, City] = details.split(',').map(value => value.trim());
            con.query("UPDATE `customers` SET `Name`=?, `Address`=?, `City`=? WHERE `customerID`=?", [customerID,Name, Address, City], function (error, result) {
              if (error) throw error;
              console.log(result);
              con.end();
              rl.close();
            });
          });
        });
        break;

      case '3':
        rl.question("Enter customer id  to delete: ", function (customerid) {
          con.query("DELETE FROM `customers` WHERE `customerID`=?", [customerID], function (error, result) {
            if (error) throw error;
            console.log(result);
            con.end();
            rl.close();
          });
        });
        break;

      case '4':
        con.query("SELECT * FROM `customers`", function (error, result) {
          if (error) throw error;
          console.log(result);
          con.end();
          rl.close();
        });
        break;

      default:
        console.log("Invalid operation");
        con.end();
        rl.close();
        break;
    }
  });
});