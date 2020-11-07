<template>
    <div class="v-cart-item">
        <img :src="require('../assets/images/' + cart_item_data.image) " alt="img">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="v-cart-item__quantity">

        </div>
        <button>Delete</button>

    </div>
</template>

<script>
export default {
    name:"v-cart-item",
    props:{
        cart_item_data:{
            type: Object,
            default(){
                return {}
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
.v-cart-item{
    display:flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

}

</style>