const User = require('../models/users');
const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find().lean();

        if (!users) {
            return res.status(404).send('Data not found');
        }

        return res.send(users)
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

userCtrl.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

userCtrl.getUserById = async (req, res) => {
    try {
        const userFound = req.params.id;
        if (!userFound) {
            return res.status(404).json({
                message: 'User not found',
            });
        }

        const userData = await User.findById(userFound);

        return res.status(200).json({
            message: 'User found',
            user: userData,
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

userCtrl.deleteUserByBId = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).send('User not found');
        }

        return res.status(200).json({
            message: 'User deleted',
            userDeleted: deletedUser,
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

userCtrl.updateUserById = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Esto devuelve el usuario actualizado
        );
        if (!updatedUser) {
            return res.status(404).send('User not found');
        }
        return res.status(200).json({
            message: 'User data updated',
            userUpdated: updatedUser.name,
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = userCtrl;
