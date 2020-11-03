<template>
    <div class = "v-catalog-item">
    <p>item 1 </p>

    
    
    </div>

</template>

<script>
export default {
    name:"v-catalog-item",
    props:{
        product_data:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    data(){
        return{}
    },
    computed:{}
}
</script>

<style lang="scss">
.v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
    &__image {
      width: 100px;
    }
}
</style>