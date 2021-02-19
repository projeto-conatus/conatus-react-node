const {verify} = require('jsonwebtoken');
const secret = "conatustools";



module.exports = function estaAutenticado(req, res, next){
    const token = req.headers.authorization;
    if(!token){
        return res.status(400).json({message: "não foi encontrado um token"});
    }
    console.log(token);
    const [type, auth ] = token.split(' ');
    verify(auth, secret, (err, decoded) => {
        if(err) return res.status(401).json({message: err});
        console.log(decoded);
        req.user = {id:decoded}
        next();
    })
  }

  