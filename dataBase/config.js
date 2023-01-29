const mongoose = require('mongoose');

const conectDB = async() => {
    try {
        const {connection} = await mongoose.connect(process.env.DB_CONNECTION);
        //console.log({connection});
        const url=` ${connection.host}:${connection.port}`
        console.log(`MongoDB connected in ${url}`);
        console.log()

    } catch (error) {
        console.log(`error De MongoDB =>: ${error.message}`);
    }
}
module.exports = conectDB;