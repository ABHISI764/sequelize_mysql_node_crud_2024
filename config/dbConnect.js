const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('world','root', 'macbook@MYSQL',{
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    logging:false
});


const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Db Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

} 

module.exports ={
    dbConnection,
    sequelize
}