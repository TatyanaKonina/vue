<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image" :src="require('../assets/images/' + cart_item_data.image) " alt="img">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="v-cart-item__quantity">
                <p>Quantity</p>
                <span>
                    <span @click="decrementItem">-</span>
                    {{cart_item_data.quantity}}
                    <span @click="incrementItem">+</span>
                </span>
            </div>
        <button @click="deleteFromCart">Delete</button>

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
    computed:{},
    mounted(){
        this.$set(this.cart_item_data,'quantity',1)
    },
    methods:{
        decrementItem() {
            this.$emit('decrement')
        },
        incrementItem(){
            this.$emit('increment')
        },
        deleteFromCart(){
            this.$emit('deleteFromCart')
        }
    }
}
</script>

<style lang="scss">
.v-cart-item{
    display:flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
     box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
    &__image {
      width: 50px;
    }

}

</style>