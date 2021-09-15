import jwt from 'jsonwebtoken';


export const sendJwt = (req,res)=>{

    const token = jwt.sign({a:'allow' },process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN
    })
    res.status(200).json({
        status:'success',
        token
    })
}

export const protect = (req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer') ){
        token = req.headers.authorization.split(' ')[1];
    }
    if(!token){
        res.status(400).send({
            status:'failed',
            "message":"please first get jwt token"
        })
        return
    }
    const decode = jwt.verify(token,process.env.JWT_SECRET);
    console.log(decode.a);
    if(decode.a === 'allow')
    {
        return next();
    }
    res.status(400).send({
        status:'failed',
        "message":"please send correct jwt token"
    })
}