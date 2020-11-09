<template>
<div class ="v-main-wrapper">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>


</div>

</template>

<script>

import {mapGetters} from 'vuex'

export default {
    name: "v-main-wrapper",
    components:{
    },
    props :{
        

    },
    data(){
        return {
            title : "Main Wrapper"
        }
    },
    computed:{ 

    },
    methods:{

    },
    watch:{

    },
    mounted(){

    }
}
</script>

<style>
.v-main-wrapper{
    
    max-width: 900px;
    margin:0 auto;

}


</style>