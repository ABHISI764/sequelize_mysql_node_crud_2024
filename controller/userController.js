
const { validate } = require('joi');
const { userSchema } = require('../middleware/userValidate');
const { UserModel } = require('../model/userModel');

const createUser = async (req, res) => {
    try {
        //validate req
        const { error } = userSchema.validate(req.body);
        if (error) return res.status(400).json(error.details[0].message)
        // Create user in the database
        const user = await UserModel.create(req.body);
        return res.status(201).json(user) // Use 201 status for resource creation 
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll();
        return res.status(200).json({users})
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
        
    }

}

const getUserById = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id);
        return res.status(200).json({user})
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
        
    }


}

const updateUser = async (req, res) => {
    try {
        const { error } = userSchema.validate(req.body);
        if (error) return res.status(400).json({message: error.details[0].message})
            const user = await UserModel.findByPk(req.params.id);
        if(!user) return res.status(500).json({error: 'User not found'});

        await user.update(req.body);
        return res.status(200).json({msg: 'User updated'})
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
        
    }


}

const deleteUsers = async (req, res) => {
    try {
        const user = await UserModel.findByPk(req.params.id);
        if(!user) return res.status(500).json({error: 'User not found'});
        await user.destroy();
        return res.status(200).json({msg: 'User susscefully deleted'})


        
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
        
    }



}

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUsers }