import { DataTypes } from 'sequelize';
import { sequelize } from './sequelize.js';

const employee = sequelize.define('employees', {
	
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
  	},
	
	name: DataTypes.STRING,

	lastname_first: DataTypes.STRING,

	lastname_second: {
		type: DataTypes.STRING,
		allowNull: true
  	},

	birthdate: DataTypes.DATE,

	email: {
		type: DataTypes.STRING,
		unique: true
	},

	password: {
		type: DataTypes.STRING
	},

	phone: {
		type: DataTypes.STRING,
		unique: true
	},

	image: {
		type: DataTypes.STRING,
		allowNull: true
	},

	identification: {
		type: DataTypes.STRING,
		unique: true
	},

	identification_type: {
		type: DataTypes.INTEGER,
		defaultValue: 1
	},

	status: {
		type: DataTypes.BOOLEAN,
		defaultValue: 1
	},
	
	created_at: DataTypes.DATE,
	updated_at: DataTypes.DATE

});

employee.sync();

export { employee }