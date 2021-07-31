const validar = require('../domain/NewUserValidation');
const userModel = require('../domain/UserModel');
const sha1 = require('sha1');

module.exports = async (User, Query) =>{
    if(validar(User)){
        if(Query.length == 0){
            let user = userModel;
            user.pseudonimo = User.pseudonimo;
            user.pass = await sha1(User.pass);
            user.referencia = User.referencia;
            return {instance : user};
        }
        else{
            return {error : "Peudónimo ya registrado"};
        }
    }
    else{
        return {error : "Ususario inválido"};
    }
}