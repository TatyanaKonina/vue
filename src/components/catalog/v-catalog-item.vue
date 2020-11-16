<template>
    <div class = "v-catalog-item">
        <v-popup
            v-if="isInfoPopupVisiable"
            rightBtnTitle="Add to cart"
            @closePopup="closeInfoPopup"
            :popupTitle="product_data.name"
            @rightBtnAction="addToCart"
        >
        <img class="v-catalog-item__image" v-bind:src="require('../../assets/images/' + product_data.image) " alt="img">
        <div>
            <p class="v-catalog-item__name">{{product_data.name}} </p>
            <p class="v-catalog-item__price">Price:{{product_data.price}}</p>
            <p class="v-catalog-item__price">{{product_data.category}}</p>
        </div>
        
        </v-popup>


        <img class="v-catalog-item__image" v-bind:src="require('../../assets/images/' + product_data.image) " alt="img">
        <p class="v-catalog-item__name">{{product_data.name}} </p>
        <p class="v-catalog-item__price">Price:{{product_data.price}}</p>
        <button 
            class="v-catalog__show_info"
            @click="showPopupInfo"
        >
            Show info</button>
        <button 
        class="v-catalog-item__add_to_cart_btn btn" 
        v-on:click="addToCart" 
        >Add to cart
        </button>
    </div>

</template>

<script>
import vPopup from '../popup/v-popup'
export default {
    name:"v-catalog-item",
    components:{
        vPopup
    },
    props:{
        product_data:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    data(){
        return{
            isInfoPopupVisiable: false
        }
    },
    computed:{},
    methods: {
        showPopupInfo(){
            this.isInfoPopupVisiable = true;

        },
        closeInfoPopup(){
            this.isInfoPopupVisiable = false;
        },
        addToCart(){
            this.$emit("addToCart",this.product_data)
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