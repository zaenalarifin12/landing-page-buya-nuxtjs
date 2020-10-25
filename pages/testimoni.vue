<template>
    
    <section class="body">
        <div class="py-4 pt-32 lg:pt-48">
            <div class="">
                <div class="flex flex-col md:flex-row justify-center text-3xl font-bold">
                    <h1 class="text-blue-primary text-center">Testimoni</h1>
                </div>

                    <div v-for="product in products" :key="product.timestamp">
                        <div  class="flex flex-wrap justify-evenly bg-white py-4 px-0 lg:px-10">
                            <div v-for="(item, index) in pisahFoto(product.gambar)" :key="index" class="w-2/5 md:w-1/3 lg:w-1/5 p-3 my-6 mx-1 md:mx-2 lg:mx-2 bg-white rounded-lg flex flex-col justify-between shadow-lg hover:shadow-2xl">
                                <img class="mx-auto rounded-lg" :src="pecah(item)" alt="" srcset="">
                            </div>
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
        } 
    },
    async asyncData() {
      const { data } = await axios.get(`https://scientific-ultra-dumpling.glitch.me/api?id=1P6nlBXa0XeJu0qFugPE13zurqhHnZR3Pt145SEBXaX0`)
    //   console.log(data.rows)
      return { products: data.rows }
    },

    methods: {
      pecah: function(isi){
        var hasil = isi.toString().split("=");
      
        var au = 'https://drive.google.com/uc?export=view&id=' + hasil[1]; 
        return au;
      },
      pisahFoto: function(isi){
          var foto = isi.toString().split(",");
            
          return foto;
      },
      checkKosong: function(isi){
        var au = (isi == 0) ? "-- KOSONG --" : isi.toString().toUpperCase()
        return au;
      },
      
    }

}
</script>