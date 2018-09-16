const express = require("express");
const mysql = require('mysql');

const connection = mysql.createConnection({
//gp_digital
});

connection.connect();

const app = express();

app.get('/api/clients', (req, res) => {
    connection.query('SELECT * FROM test_users', function(err, rows){
        res.json(rows);
    });
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
