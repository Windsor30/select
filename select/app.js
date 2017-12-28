new Vue({
    el:"#root",
    data:{
        datas:[
            {id:1,title:1111111},
            {id:2,title:2222222},
            {id:3,title:3333333},
            {id:4,title:4444444},
            {id:5,title:5555555},
        ],
        title:"",
        state:false
    },
    methods:{
        aa(){
            this.state = true;
        },
        bb(val){
            this.title = val;
            this.state = false;
        }
    }
})