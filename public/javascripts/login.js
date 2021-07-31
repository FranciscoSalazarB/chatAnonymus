var app = new Vue({
    el:"#login",
    data:{
        // los únicos estados posibles son register y login, para mostrar en la vista
        status: 'login',
        login : {
            pseudonimo:'',
            pass:''
        },
        register : {
            pseudonimo:'',
            pass:'',
            repeat_pass:'',
            referencia:''
        }
    },
    methods:{
        change_status : function(){
            this.status = this.status === 'login' ? 'register' : 'login';
        },
        user_login : function(){
            const send = this.status === 'login' ? this.login : this.register;
            this.$http.post('/'+this.status,send).then((data)=> console.log(data)).catch((err)=> console.log(err))
        }
    }
})