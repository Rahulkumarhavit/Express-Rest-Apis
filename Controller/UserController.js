import prisma from "../DB/db.config.js"

export const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    const findUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (findUser) {
        return res.json({ status: 400, message: "Email already taken" });
    }

    const createUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })
    return res.json({ status: 200, data: createUser, message: "user created successfully." })
}

// update user
export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, email, password } = req.body;


    const updateUser = await prisma.user.update({
        where: {
            id: Number(id)
        },
        data: {
            name: name,
            email: email,
            password: password
        }
    })
    return res.json({
        status: 200,
        message: "user updated",
        id: updateUser.id
    })
}

export const fetchUser = async(req,res)=>{

    const findUser = await prisma.user.findMany({});
    return res.json({
        status:200,
        message: "User data fetch successfully",
        data:findUser
    })
}

export const showUser = async (req,res)=>{
    const userId = req.params.id;

    const findUser = await prisma.user.findUnique({
        where:{
            id:Number(userId)
        }
    })

    return res.json({
        message:"User detail found successfully",
        data:findUser
    })
}

export const deleteUser = async (req,res)=>{
    const userId = req.params.id;
    const deleteUser = await prisma.user.delete({
        where:{
            id:Number(userId)
        }
    })
    return res.json({
        messsage:"user has been deleted",
        status:"200"
    })
}