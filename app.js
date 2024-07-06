const express = require('express');
const { dbConnection, sequelize } = require('./config/dbConnect');
const { router } = require('./routes/route');
const { UserModel } = require('./model/userModel');


const app = express();

app.use(express.json());

app.use('/', router);

// (async () => {
//     try {
//         await sequelize.sync({ force: false });
//         console.log('Database synchronized successfully');
//     } catch (error) {
//         console.error('Error synchronizing database:', error);
//     }
// })();
UserModel.sync({force: false})

app.listen(4000, async()=>{
    console.log('Server is listen at port: 4000')
   await dbConnection()
})