import { configDotenv } from "dotenv";
import mongoose, { mongo } from "mongoose";

configDotenv()

const URL = process.env.urlmongo


const mongoConnection = async () => {
    
    try {
        

        await mongoose.connect(URL)
        console.log("conexion exitosa a la base de datos");
        


    } catch (error) {
        console.error(error);
        
        
        
    }

}

export default mongoConnection