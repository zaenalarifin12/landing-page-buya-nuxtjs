<template>
    
    <section class="body">
        <div class="py-4 pt-32 lg:pt-48">
            <div class="">
                <div class="flex flex-col md:flex-row justify-center text-3xl font-bold">
                    <h1 class="text-blue-primary text-center">Produk Percetakan&nbsp;</h1>
                        <vue-typed-js :strings="textTyping" :loop="true" class="justify-center">

                            <span class="text-orange-primary">
                                <span class="typing text-center text-orange-primary"></span>
                            </span>
                        
                        </vue-typed-js>
                </div>

                <div  class="flex flex-wrap justify-evenly bg-white py-4 px-0 lg:px-10">
                        <div v-for="product in filteredData" :key="product.timestamp" class="w-2/5 md:w-1/3 lg:w-1/4 p-3 my-6 mx-1 md:mx-2 lg:mx-6 bg-white rounded-lg flex flex-col justify-between shadow-lg hover:shadow-2xl">
          
                            <nuxt-link :to="'/percetakan/' + encodeURI(product.nama)">
                                <img class="mx-auto rounded-lg" :src="pecah(pisahFoto(product.fotobisalebihdari1))" alt="" srcset="">
                                <p class="text-center font-bold capitalize mt-3">{{ product.nama }}</p>
                            </nuxt-link>
                        </div>
                </div>
                
                <hr class="mx-auto my-4 border-b border-gray-400 w-2/12">
            </div>
        </div>
    </section>

</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            products: [],
            textTyping : [
                'Banner',
                'Poster',
                "AlQur'an",
                'Kitab',
                'Kalender',
                'Buku',
                'Majalah'
            ]
        }
    },
    async asyncData() {
      const { data } = await axios.get(`https://scientific-ultra-dumpling.glitch.me/api?id=1DmxAYjzMzLscRlA7UhnMqGLEYgoJhO9lC40KwsU2v50`)
    //   console.log(data.rows)
      return { products: data.rows }
    },

    computed: {
        filteredData() {
            return this.products.filter(product => {
                return product.jenisproduk == "Percetakan";
            })
        }
    },

    methods: {
      pecah: function(isi){
        var hasil = isi.toString().split("=");
      
        var au = 'https://drive.google.com/uc?export=view&id=' + hasil[1]; 
        return au;
      },
      pisahFoto: function(isi){
          var foto = isi.toString().split(",")[0]
            
          return foto;
      },
      checkKosong: function(isi){
        var au = (isi == 0) ? "-- KOSONG --" : isi.toString().toUpperCase()
        return au;
      },
      
    }

}
</script>