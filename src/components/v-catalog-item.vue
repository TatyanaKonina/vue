<template>
    <div class = "v-catalog-item">
    <p>item 1 </p>

    
    
    </div>

</template>

<script>
export default {
    name:"v-catalog-item",
    props:{},
    data(){
        return{}
    },
    computed:{}
}
</script>

<style lang="scss">
.v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 grey;
    padding: 16px;
    margin-bottom: 16px;
}
</style>