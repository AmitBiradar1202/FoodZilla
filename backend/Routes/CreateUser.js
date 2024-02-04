const express =require('express');
const User =require('../modules/User')
const { query, validationResult } = require('express-validator');
const bycrpt =require('bcryptjs');
const jwt=require('jsonwebtoken')

const router=express.Router();
const jwtSecret = "AmitBiradar";
router.post('/creatuser',query('email').isEmail() ,
        query('password').isStrongPassword(),
        async(req,res)=>{
                 const result = validationResult(req);
                    if (result.isEmpty()) {
                    return res.status(400).json({result:result.array()});
                    }
                    const salt=await bycrpt.genSalt(10);
                    const securepass=await bycrpt.hash(req.body.password,salt);

    
    try{
        
        User.create({
            name:req.body.name,
            password:securepass,
            email:req.body.email,
            location:req.body.location
        }).then((user) => {
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, jwtSecret);
            success = true
            res.json({ success, authToken })
        })


            .catch(err => {
                console.log(err);
                res.json({ error: "Please enter a unique value." })
            })
    }
    catch(err){
        console.log(err)
    }
})


router.post('/login', async (req, res) => {
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) { 
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });  //{req.body.email} === {email}
        if (!user) {
            return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
        }

        const pwdCompare = await bcrypt.compare(password, user.password); // this return true false.
        if (!pwdCompare) {
            return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        success = true;
        const authToken = jwt.sign(data, jwtSecret);
        res.json({ success, authToken })


    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }
})


router.post('/getuser', fetch, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password") // -password will not pick password from db.
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.send("Server Error")

    }
})


module.exports=router;