<template>
    
    <section class="body">
        <div class="py-4 pt-32 lg:pt-48">
            <div class="">
                <div class="flex flex-col md:flex-row justify-center text-3xl font-bold">
                    <h1 class="text-blue-primary text-center">Portofolio</h1>
                </div>

                <hr class="mx-auto my-4 border-b border-gray-400 w-2/12">

                <div  class="flex flex-wrap justify-evenly bg-white py-4 px-0 lg:px-10">
                    <div v-for="(item, index) in products" :key="index" class="w-2/5 md:w-1/3 lg:w-1/5 p-3 my-6 mx-1 md:mx-2 lg:mx-2 bg-white rounded-lg flex flex-col justify-between shadow-lg hover:shadow-2xl">
                        <img class="mx-auto rounded-lg" :src="'/images/' + index  + '.png'" alt="" srcset="">
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
            min: 1,
            max: 32,
            products: [0, 1, 2]
        } 

    }

}
</script>