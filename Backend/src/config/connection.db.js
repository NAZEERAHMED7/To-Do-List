const mongoose = require('mongoose')

const connectionDB = async () =>{
try {
   await mongoose.connect(process.env.MONGO_URL)
    console.log('mongodb connected');
} catch (error) {
    console.log('connection Failed', error.message)
}
}

module.exports= connectionDB