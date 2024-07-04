const User = require('../models/users');
const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find().lean();

        if (!users) {
            res.status(404).send('Data not found');
        }

        res.json({
            message: 'Users found',
            usersData: users,
        });

        res.status(200).send(users)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

userCtrl.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

userCtrl.getUserById = async (req, res) => {
    try {
        const userFound = req.params.id;
        if (!userFound) {
            res.status(404).json({
                message: 'User not found',
            });
        }

        const userData = await User.findById(userFound);

        res.status(200).json({
            message: 'User found',
            user: userData,
        });
        res.status(200).send(userData)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

userCtrl.deleteUserByBId = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            res.status(404).send('User not found');
        }

        res.status(200).json({
            message: 'User deleted',
            userDeleted: deletedUser,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

userCtrl.updateUserById = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        if (!updatedUser) {
            res.status(404).send('User not found');
        }
        res.status(200).json({
            message: 'User data updated',
            userUpdated: updatedUser.name,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
module.exports = userCtrl;
