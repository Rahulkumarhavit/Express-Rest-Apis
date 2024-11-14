import { Router } from "express";
import {createUser}  from '../Controller/UserController.js'
const router = Router();

router.post("/create",createUser);


export default router;