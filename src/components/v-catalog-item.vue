<template>
    <div class = "v-catalog-item">
        <img class="v-catalog-item__image" v-bind:src="require('../assets/images/' + product_data.image) " alt="img">
        <p class="v-catalog-item__name">{{product_data.name}} </p>
        <p class="v-catalog-item__price">Price:{{product_data.price}}</p>
        <button 
        class="v-catalog-item__add_to_cart_btn btn" 
        v-on:click="sendArticle" 
        >Add to cart
        </button>
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
    computed:{},
    methods: {
        sendArticle(){
            this.$emit('send-article',this.product_data.article)
        }
    }
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