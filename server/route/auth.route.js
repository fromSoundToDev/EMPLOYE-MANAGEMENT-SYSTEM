
import express from 'express'
import signIn from '../controller/auth.controller.js'

// authentication route 

const authRoute = express.Router()

authRoute.post("/sign-in",signIn)
authRoute.post("/sign-up",signUp)

export default  authRoute