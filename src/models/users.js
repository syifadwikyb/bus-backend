const supabase = require("../config/supabaseClient");

const createUsers = async (body) => {
    const {data, error} = await supabase
        .from ('users')
        .insert([body])

    if (error) throw error;
    return data;
}

const getUserByEmail = async (email) => {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .ilike('email', email.trim().toLowerCase()); // penting!

    if (error) throw error;
    return data;
};

module.exports = {
    createUsers,
    getUserByEmail,
}