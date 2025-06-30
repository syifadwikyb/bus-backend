const bcrypt = require('bcrypt');
const userModel = require("../models/users");

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const users = await userModel.getUserByEmail(email);

        if (users.length === 0) {
            return res.status(404).json({
                message: 'User not found'
            })
        }

        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: 'Incorrect password'
            })
        }

        res.status(200).json({
            message: 'Login successfull',
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        })
    } catch (error) {
        console.error("Login failed", error);
        res.status(500).json({
            message: 'Server error',
        })
    }
}

const register = async (req, res) => {
    const {name, email, password, address} = req.body;

    const isValidEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    if (!name || !email || !password || !address) {
        return res.status(400).json({
            message: 'All fields are required'
        });
    }

    try {
        const exitingUser = await userModel.getUserByEmail(email);
        if (exitingUser.length > 0) {
            return res.status(400).json({
                message: 'Email already registered'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        await userModel.createUsers({
            name,
            email,
            address,
            password: hashedPassword
        })

        res.status(201).json({
            message: 'Register Success',
        })

    } catch (error) {
        console.error("Register failed", error);
        res.status(500).json({
            message: 'Server error',
        })
    }
}

module.exports = {
    loginUser,
    register
}