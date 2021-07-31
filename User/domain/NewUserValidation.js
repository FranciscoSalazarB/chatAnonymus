module.exports = (User)=>{
    //validar un nuevo usuario
    if(User.pseudonimo == null || User.pseudonimo.length == 0 || /^\s+$/.test(User.pseudonimo)) return false;
    if(User.pass == null || User.pass.length < 7 || /^\s+$/.test(User.pass)) return false;
    if(User.pass !== User.repeat_pass) return false
    if(!(User.referencia == null || User.referencia.length == 0 || /^\s+$/.test(User.referencia))){
        if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(User.referencia)) return false;
    }
    return true;
};