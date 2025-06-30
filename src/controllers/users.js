// const userModel = require("../models/users");
// const bcrypt = require("bcrypt");
//
// // CREATE - POST
// const createUsers = async (req, res) => {
//     const body = req.body;
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);
//         const userData = {
//             ...body,
//             password: hashedPassword,
//         }
//
//         await userModel.createUsers(userData)
//
//         res.status(201).json({
//             message: "Create user succes",
//             data: {
//                 name: body.name,
//                 email: body.email,
//                 address: body.address,
//             }
//         });
//     } catch (error) {
//         console.error('Error creating user', error);
//         res.status(500).json({
//             message: "Sever error",
//             messageerror: "Something went wrong on the server while creating user."
//         })
//     }
// }
//
//
// // READ - GET
// const getAllUsers = async (req, res) => {
//     try {
//         const data = await userModel.getAllUsers()
//         res.json({
//             message: "GET all users",
//             data: data
//         })
//     } catch (e) {
//         res.status(500).json({
//             message: "Server error",
//             messageerror: e
//         })
//     }
// }
//
// // UPDATE - PATCH
// const updateUsers = async (req, res) => {
//     const {idUsers} = req.params;
//     const body = req.body;
//     try {
//         await userModel.updateUsers(body, idUsers);
//         res.status(200).json({
//             message: "Update users success",
//             data: {
//                 id_user: idUsers,
//                 ...body
//             }
//         })
//
//     } catch (e) {
//         console.error('Error updating user:', e);
//         res.status(500).json({
//             message: "Server error",
//             messageerror: "Something went wrong on the server while updating user."
//         })
//     }
// }
//
//
// // DELETE - DELETE
// const deleteUsers = async (req, res) => {
//     const {idUsers} = req.params;
//
//     if (!idUsers || isNaN(idUsers)) {
//         return res.status(400).json({
//             message: "Invalid user ID"
//         });
//     }
//
//     try {
//         const result = await userModel.deleteUser(idUsers);
//
//         if (result[0].affectedRows === 0) {
//             return res.status(404).json({
//                 message: "User not found"
//             });
//         }
//
//         res.status(200).json({
//             message: "Delete users success",
//             data: {
//                 id_user: idUsers
//             }
//         })
//
//     } catch (e) {
//         console.error('Error delete user:', e);
//         res.status(500).json({
//             message: "Server error",
//             messageerror: "Something went wrong on the server while delete user."
//         })
//     }
// }
//
//
// module.exports = {
//     getAllUsers,
//     createUsers,
//     updateUsers,
//     deleteUsers
// }