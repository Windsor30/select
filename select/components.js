
    Vue.component("custom-input",{
        props:["state","title"],
        template:`
        <div class="select-input">
            <input type="text" @focus="focus" v-model="title">
        </div>
        `,
        methods:{
            focus(){
                this.$emit("customchange");
            }
        }
    })

    Vue.component("custom-list",{
        props:["listData","state"],
        template:`
        <div class="select-list">
            <ul v-show="state==true">
                <li v-for="item in listData" @click="click(item.title)" >{{item.title}}</li>
            </ul>
        </div>
        `,
        methods:{
            click(val){
                this.$emit("customchange",val)
            }
        }
    })
