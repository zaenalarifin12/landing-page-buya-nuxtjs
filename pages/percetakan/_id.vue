<template>
    
    <section class="body">
        <div class="py-4 pt-32 lg:pt-48">
            <div class="">
                <div class="flex flex-col md:flex-row justify-center text-3xl font-bold">
                    <h1 class="text-blue-primary text-center">Produk Percetakan&nbsp;</h1>
                    <span class="text-orange-primary text-center">
                        <span class="typing text-center text-orange-primary">{{ this.$route.params.id }}</span>
                    </span>
                </div>

                <hr class="mx-auto my-4 border-b border-gray-400 w-2/12">

                <div  class="flex flex-row justify-evenly bg-white py-4 px-0 lg:px-10">
                
                    <div v-for="product in filteredData" :key="product.timestamp" class="w-full">

                        <div class="w-full p-3 my-6 mx-1 md:mx-2 lg:mx-6 ">
                        
                            <carousel-3d :autoplay="true" :autoplay-timeout="5000"
                            :controls-visible="true" :clickable="true" :border="0"
                            :height="350"
                            >
                                <slide v-for="(gambar, index) in pisahFoto(product.fotobisalebihdari1)" :key="index" :index="index" class="w-1/8">
                                    <img :src="pecah(gambar)" height="auto" alt="">
                                </slide>
                            </carousel-3d>

                        </div>

                        <div class="w-full p-3 my-2 md:my-6 mx-1 md:px-48 bg-white rounded-lg flex flex-col justify-between ">
                            <p class="font-bold capitalize mt-3 text-left">{{ product.deskripsi }}</p>
                        </div>
                    </div>
                      
                </div>

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
            ],
    
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
                return product.nama == this.$route.params.id;
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
          var foto = isi.toString().split(",")
            
          return foto;
      },
      checkKosong: function(isi){
        var au = (isi == 0) ? "-- KOSONG --" : isi.toString().toUpperCase()
        return au;
      },
      
    }

}
</script>