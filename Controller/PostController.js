import prisma from "../DB/db.config.js"

export const createPost = async (req, res) => {
    const { user_id,title,description } = req.body;
    const newPost = await prisma.post.create({
        data:{
            user_id:Number(user_id),
            title,
            description
        }
    })

  
    return res.json({ status: 200, data: newPost, message: "post created successfully." })
}

// update user
export const updatePost = async (req, res) => {
    const post_id = req.params.id;
    const { title,description } = req.body;


    const updatedPost = await prisma.post.update({
        where: {
            id: Number(post_id)
        },
        data: {
            title,
            description
        }
    })
    return res.json({
        status: 200,
        message: "post updated",
        id: updatedPost.id
    })
}

export const fetchPosts = async(req,res)=>{

    const posts = await prisma.post.findMany({});
    return res.json({
        status:200,
        message: "post data fetch successfully",
        data:posts
    })
}

export const showPost = async (req,res)=>{
    const postId = req.params.id;

    const findPost = await prisma.post.findFirst({
        where:{
            id:Number(postId)
        }
    })

    return res.json({
        message:"User detail found successfully",
        data:findPost
    })
}

export const deletePost = async (req,res)=>{
    const postId = req.params.id;
    await prisma.post.delete({
        where:{
            id:Number(postId)
        }
    })
    return res.json({
        messsage:"post has been deleted",
        status:"200"
    })
}