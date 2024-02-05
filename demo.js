//insert
var mysql = require('mysql');
var con = mysql.createConnection({ host: "localhost",
user: "root", database: "namitha"
});
con.connect(function(error) { if (error) throw error;
con.query("INSERT INTO `customers`(`customerID`, `Name`, `Address`, `City`) VALUES ('150','Aiswarya','palakkad','ottapalam')", function (err, result, fields) { if (error) throw error;
console.log(result);
}); 
});

//selection
var mysql = require('mysql');
var con = mysql.createConnection({ host: "localhost",
user: "root", database: "namitha"
});
con.connect(function(error) { if (error) throw error;
con.query("SELECT  `Name` FROM `customers` WHERE 1", function (err, result, fields) { if (error) throw error;
console.log(result);
}); 
});

//delete
var mysql = require('mysql');
var con = mysql.createConnection({ host: "localhost",
user: "root", database: "namitha"
});
con.connect(function(error) { if (error) throw error;
con.query("DELETE FROM `customers` WHERE customerid='140'", function (err, result, fields) { if (error) throw error;
console.log(result);
}); 
});

//update
var mysql = require('mysql');
var con = mysql.createConnection({ host: "localhost",
user: "root", database: "namitha"
});
con.connect(function(error) { if (error) throw error;
con.query("UPDATE `customers` SET `customerID`='150',`Name`='simi',`Address`='thrissur',`City`='shornur' WHERE customerID='155';", function (err, result, fields) { if (error) throw error;
console.log(result);
}); 
});