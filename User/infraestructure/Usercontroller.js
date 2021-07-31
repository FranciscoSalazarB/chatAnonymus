const User = require('./UserSchema');
const UserRegister = require('../aplication/UserRegister');

const userController = {};

userController.register = async (req,res)=>{
    try{
        const userToRegister = req.body;
        const possiblelUser = await User.find({pseudonimo : userToRegister.pseudonimo});
        const userRegistered = await UserRegister(userToRegister,possiblelUser);
        if(userRegistered.error == null){
            let UserDbRegistered = new User(userRegistered.instance);
            let response = await UserDbRegistered.save();
            res.send('usuario registrado');
        }
        else{
            res.send(userRegistered);
        }
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
};

userController.login = (req,res)=>{

}

module.exports = userController