
import express from 'express';
// import mysql from 'mysql';
import { Sequelize } from 'sequelize';
import cors from 'cors';
import { Tmiddleware, Tstore } from './token.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const sequelize = new Sequelize('drawer', 'root', '1234', {
	host: '127.0.0.1',
	dialect: 'mariadb' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

const EmployeeModel = sequelize.define('employee', {
	id: DataTypes.INTEGER,
	
	name: DataTypes.TEXT,
	lastname_first: DataTypes.TEXT,
	lastname_second: DataTypes.TEXT,

	birthdate: DataTypes.DATE,
	email: DataTypes.TEXT,
	phone: DataTypes.TEXT,

	image: DataTypes.TEXT,

	identification: DataTypes.TEXT,
	identification_type: DataTypes.INTEGER,
	
	status: DataTypes.BOOLEAN,
	created_at: DataTypes.DATE,
	updated_at: DataTypes.DATE
});

// const connection = mysql.createConnection({
// 	host: 'localhost', // Replace with your database host
// 	user: 'root',      // Replace with your database username
// 	password: '',      // Replace with your database password
// 	database: 'test'   // Replace with your database name
// });

app.get('/', (req, res) => {

	// connection.connect(function(err) {
	// 	if (err) {
	// 		console.log("error occurred while connecting");
	// 	} else {
	// 		console.log("connection created with mysql successfully");
	// 	}
	// });

	res.send('v1.0');
});

app.post("/login", async (req, res) => {

	// application/x-www-form-urlencoded
	// console.log(req.body); // By Post
	// console.log(req.query); // By Url
	// console.log(req.body.email);
	// console.log(req.query.email);

	if (typeof(req.body.email) == "undefined") {
		return res.status(400).json({message: "missing email"});
	} else if (req.body.email == "") {
		return res.status(400).json({message: "empty email"});
	} else if (typeof(req.body.password) == "undefined") {
		return res.status(400).json({message: "missing password"});
	} else if (req.body.password == "") {
		return res.status(400).json({message: "empty password"});
	} else {

		try {
			await sequelize.authenticate();
			console.log('Connection has been established successfully.');
		} catch (error) {
			console.error('Unable to connect to the database:', error);
		}

		let id_employee = "";
		const token = Tstore({id: "", role: ""});
    
		return res
			.status(200)
			.json({
				id_employee: id_employee,
				token: token
			});

	}

});

// Tmiddleware: Bloquea el acceso a la ruta si no se envia un token jwt valido

// 
app.get('/employee', Tmiddleware, (req, res) => {
	res.send('Hello World!')
})

app.get('/employees', Tmiddleware, (req, res) => {
	res.send('Hello World!')
})

app.post('/employee', Tmiddleware, (req, res) => {
	res.send('Hello World!')
})

app.put('/employee/id', Tmiddleware, (req, res) => {
	res.send('Hello World!')
})

app.delete('/employee/id', Tmiddleware, (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})