var app = new Vue({
    el:"#login",
    data:{
        // los únicos estados posibles son register y login, para mostrar en la vista
        status: 'login',
        login : {
            route:'/login',
            pseudonimo:'',
            pass:''
        },
        register : {
            route:'/register',
            pseudonimo:'',
            pass:'',
            repeat_pass:'',
            email:''
        }
    },
    methods:{
        change_status : function(){
            this.status = this.status === 'login' ? 'register' : 'login';
        },
        user_login : function(){
            const exit = this.status === 'login' ? this.login : this.register;
            this.$http.post(exit.route,exit).then((data)=> console.log(data)).catch((err)=> console.log(err))
        }
    }
})