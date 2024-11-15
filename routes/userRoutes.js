import { Router } from "express";
import {createUser, deleteUser, fetchUser, showUser, updateUser}  from '../Controller/UserController.js'
const router = Router();

router.post("/create",createUser);
router.put("/update/:id",updateUser);
router.get("/list",fetchUser);
router.get("/:id",showUser)
router.delete("/:id",deleteUser)


export default router;