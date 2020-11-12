<template>
    <div class = "v-catalog">
        <router-link :to="{name : 'cart',params:{cart_data:CART}}">
            <div class ="v-catalog__link_to_cart">Cart:{{CART.length}}</div>
        </router-link>
        
    <h1> Catalog </h1>
        <v-select 
            :selected="selected"
            :options="categories"
            @select="sortByCategories"    
        />
        <div class="v-catalog__list">
            <v-catalog-item 
                 v-for="product in filterProducts"
                 :key="product.article"
                 v-bind:product_data="product"
                 @addToCart="addToCart"
            />

        </div>
    </div>
</template>

<script>
import vSelect from '../v-select'
import vCatalogItem from './v-catalog-item'
import {mapActions,mapGetters} from 'vuex'
export default {
    name:"v-catalog",
    components:{
        vCatalogItem,
        vSelect
    },
    props:{},
    data(){
        return{
            categories: [
                {name:'Мужские',value:'M'},
                {name:'Женские',value:'W'},
                {name:'All',value:'All'}
            ],
            selected:'ALL',
            sortedProducts:[]
        }
    
    },
    computed:{
        ...mapGetters([
            'PRODUCTS', 'CART'
        ]),
        filterProducts(){
            if(this.sortedProducts.length){
                return this.sortedProducts
            }
            else {
               return this.PRODUCTS
            }
        }
    },
    methods:{
      ...mapActions([
          'GET_PRODUCTS_FROM_API',
          'ADD_TO_CART'
          ]),
      addToCart(data){
        this.ADD_TO_CART(data)
      },
      sortByCategories(category){
          this.sortedProducts = [];
          let vm = this;
          this.PRODUCTS.map(function(item){
              if(item.category == category.name){
                  vm.sortedProducts.push(item)
              }
          })
          this.selected = category.name
      }
    },
    mounted(){
      this.GET_PRODUCTS_FROM_API()
    }
}
</script>

<style lang="scss">
.v-catalog {
    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items:center;

    }
    &__link_to_cart {
    position: fixed;
      top: 80px;
      right: 10px;
      padding: 16px;
      border: solid 1px #aeaeae;
      background: #ffffff;

    }
}

</style>