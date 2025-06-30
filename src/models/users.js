const supabase = require("../config/supabaseClient");

// const getAllUsers = async () => {
//     const { error, data } = await supabase
//         .from ('users')
//         .select('*')
//
//     if (error) throw error;
//     return data;
// }
//
const createUsers = async (body) => {
    const {error, data} = await supabase
        .from ('users')
        .insert([body])

    if (error) throw error;
    return data;
}

// const updateUsers = async (body, idUser) => {
//     const {error, data} = await supabase
//         .from('users')
//         .update(body)
//         .eq('id_user', idUser);
//
//     if (error) throw error;
//     return data;
// }

// const deleteUser = async (idUser) => {
//     const { error, data } = await supabase
//         .from('users')
//         .delete()
//         .eq('id_user', idUser);
//
//     if (error) throw error;
//     return data;
// };

const getUserByEmail = async (email) => {
    const { error, data } = await supabase
        .from('users')
        .select('*')
        .eq('email', email);
    if (error) throw error;
    return data;
};

module.exports = {
    // getAllUsers,
    createUsers,
    // updateUsers,
    // deleteUser,
    getUserByEmail,
}