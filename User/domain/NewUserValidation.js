function validar(User,Query){
    //validar un nuevo usuario
    if(User.pseudonimo == null || User.pseudonimo.length == 0 || /^\s+$/.test(User.pseudonimo)) return flase;
    if(Query != null) return false;
    if(User.pass == null || User.pass.length < 7 || /^\s+$/.test(User.pass)) return false;
    if(User.pass !== User.repeat_pass) return false
    if(User.referencia != null && !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(User.referencia)) return false;
    return true;
};

module.exports = validar;