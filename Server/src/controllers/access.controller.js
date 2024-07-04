const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const accessCtrl = {};

accessCtrl.login = async (req, res) => {
    const { user, password } = req.body;

    try {
        const admin = await Admin.findOne({ user });

        if (!admin) {
            return res.status(404).json({ message: 'Administrador no registrado' });
        }

        if (admin.password !== password) {
            return res.status(401).json({
                message: 'Credenciales incorrectas',
                auth: false,
                token: null,
            });
        }

        const token = jwt.sign({ id: admin._id }, process.env.SECRET, {
            expiresIn: '24h',
        });
        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            auth: true,
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor', error });
    }
};

module.exports = accessCtrl;
