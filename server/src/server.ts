import express from "express"
import Configuration from "./configurations/configuration"
import Middleware from "./middlewares/Middleware"
import Logger from "./utils/Logger";
import AliveRoutes from './routes/AliveRoute';
import UserRoutes from "./routes/UserRoutes";
import CommentRoutes from "./routes/CommentRoutes";


import MessageRoutes from "./routes/MessageRoutes";



const  server = express()
Middleware.applyMiddlewares(server)

//Routes
AliveRoutes(server)
UserRoutes(server)
MessageRoutes(server)
CommentRoutes(server)


Middleware.errorHandlerAndNotFound(server)

Configuration.connectToPort(server)
Configuration.connectToDatabase().then(()=>{
    Logger.debug('--== lolz ==--')
})


export default server