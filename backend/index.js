import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import routes from "./routes/index.js";

dotenv.config();        //Loads the environment variables from a .env file into process.env, so we can use them 
//                        in our app.

const app = express();       //create an instance of express
const PORT = process.env.PORT || 8000 //default port

app.use(cors("*"));             // allow all origins
//                                  app.use(cors({origin: "http://localhost:3000"})); //allow only localhost:3000


app.use(express.json({ limit: "10mb" })); //parse json data

app.use(express.urlencoded({ extended: true }));//parse urlencoded data
//                                                 extended: true allows nested objects

app.use("/api-v1",routes);//Mounts all routes from routes/index.js under the /api-v1 path

app.use("*",(req,res)=>{           //catch all route for any other routes not defined
    res.status(404).json({          //non existing end-point
        status: "404 not found", 
        message:"Route not found",
    });
});

app.listen(PORT,()=>{ //start the server on the specified port
    console.log(`Server is running on port ${PORT}`);
});
