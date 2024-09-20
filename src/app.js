import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app= express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))
//config of accepting data in form of json, file(multer), url  ->
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit:"16kb"}))
app.use(express.static("public"))//config to store images in public folder
app.use(cookieParser())


export {app}