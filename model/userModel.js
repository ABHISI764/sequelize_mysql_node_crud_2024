const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const UserModel = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    mobileNumber: DataTypes.STRING,
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }

},
    {
        freezeTableName: true
    },
);

module.exports = { UserModel }