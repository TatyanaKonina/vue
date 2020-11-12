<template>
    <div class="v-select">
        <p class="title"
             @click="areOptionsVisible= !areOptionsVisible" 
        
        
        
        >Select</p>
        <div 
            class="options"
            v-if="areOptionsVisible"

        >

            <p
                v-for='option in options'
                :key="option.value"

            >
                {{option.name}}

            </p>
        </div>

    </div>
</template>

<script>
export default {
    name: "v-select",
    props:{
        options:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            areOptionsVisible : false
        }
    },
    computed:{}
}
</script>

<style scoped>
.v-select{
    position:relative;
    width:200px;
    cursor: pointer;
}
.title {
    border:solid 1px;
}
.v-select p {
    margin: 0
}
.options {
    border:solid 1px grey;
    position:absolute;
    top : 30px;
    right:0;
    width:100%;

}

</style>