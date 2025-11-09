
import express from 'express';
import cors from 'cors';

import { employee } from './employee.js';
import { Tmiddleware, Tstore } from './token.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
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

		// Consultar usuarios
		// const usuarios = await Usuario.findAll();
		// console.log('Usuarios encontrados:', usuarios.map(u => u.toJSON()));
		
		// Actualizar usuario
		// await Usuario.update({ edad: 30 }, { where: { nombre: 'Luis' } });
		
		// Eliminar usuario
		// await Usuario.destroy({ where: { nombre: 'Luis' } });

		await employee.findOne({
			where: { 
				email: req.body.email,
				password: req.body.password
			}
		}).then((data) => {

			console.log(data);

			const token = Tstore({id: data.id, role: "na"});

			return res.status(200).json({
				id: data.id,
				token: token
			});

		}).catch((error) => {
			console.error('Unable to connect to the database: ', error);
			return res.status(422).json({message: "created employee error"});
		});


	}

});

// Tmiddleware: Bloquea el acceso a la ruta si no se envia un token jwt valido

// 
app.get('/employee', Tmiddleware, async (req, res) => {
	res.send('Hello World!')
})

app.get('/employees', Tmiddleware, async (req, res) => {
	res.send('Hello World!')
})

app.post('/employee', Tmiddleware, async (req, res) => {
	
	const dnow = new Date();

	await employee.create({
		name: req.body.name,
		lastname_first: req.body.lastname_first,
		lastname_second: req.body.lastname_second,
		birthdate: req.body.birthdate,
		email: req.body.email,
		password: req.body.password,
		phone: req.body.phone,
		//image: req.body.image,
		identification: req.body.identification,
		identification_type: req.body.identification_type,
		status: req.body.status,
		created_at: dnow.toISOString(),
		updated_at: dnow.toISOString()
	}).then((data) => {
		return res.status(200).json(data);
	}).catch((error) => {
		console.error('Unable to connect to the database: ', error);
		return res.status(422).json({message: "created employee error"});
	});

})

app.put('/employee/id', Tmiddleware, async (req, res) => {
	res.send('Hello World!')
})

app.delete('/employee/id', Tmiddleware, async (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})