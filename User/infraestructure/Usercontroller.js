const userController = {
    register : function(req,res){
        console.log(req.body);
        res.send("hola desde el controlador");
    },
    login : function(req, res){
        console.log(req.body);
        res.send("hola login desde el controlador usuario")
    }
};

module.exports = userController