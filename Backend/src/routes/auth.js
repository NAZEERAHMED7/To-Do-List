const router =require("express").Router()
const{userSchema} = require('../modules/user.modules')
const Joi= require('joi')

router.post('/login', async (req,res) =>{
    try {
        const{error}=validate(req.body)
        if(error)
            return res.status(400).send({message:error.details[0].message})

        const user= await userSchema.findOne({email:req.body.email})
    } catch (error) {
        
    }
})

const validate= (data)=>{
    const schema= Joi.object({
        email:Joi.string().email().required().label("Email"),
        password:Joi.string().required().label("password")
    })
    return schema.validate(data)
}

module.exports = router