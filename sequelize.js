import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('drawer', 'root', '1234', {
    host: '127.0.0.1',
    define: {
        timestamps: false,
    },
    dialect: 'mariadb' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

export { sequelize }