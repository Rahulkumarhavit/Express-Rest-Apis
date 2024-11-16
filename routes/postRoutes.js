import { Router } from "express";
import { createPost,deletePost,fetchPosts,showPost,updatePost } from "../Controller/PostController.js";
const router = Router();

router.post("/create",createPost);
router.put("/update/:id",updatePost);
router.get("/list",fetchPosts);
router.get("/:id",showPost)
router.delete("/:id",deletePost)


export default router;