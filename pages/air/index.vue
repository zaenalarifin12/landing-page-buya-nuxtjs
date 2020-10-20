<template>
    <section class="body">
        <div class="py-4 pt-32 lg:pt-48">
            <div class="">
                <div class="flex flex-col md:flex-row justify-center text-3xl font-bold">
                    <h1 class="text-blue-primary text-center">Produk&nbsp;</h1>
                    <span class="text-blue-air">
                        <span class="typing text-center text-blue-air">Air Minum</span>
                    </span>
                </div>

                <!-- <p v-if="$fetchState.pending">Fetching posts...</p>
                <p v-else-if="$fetchState.error">
                Error while fetching posts: {{ $fetchState.error.message }}
                </p>

                <div v-else  class="flex flex-wrap justify-evenly bg-white py-4 px-0 lg:px-10">
                    OK
                    <div v-for="product in filteredData" :key="product.timestampt" class="flex flex-col md:flex-row">

                        <div class="w-full md:w-1/3 p-3 my-6 mx-1 md:mx-2 lg:mx-6  flex flex-col justify-between shadow-lg hover:shadow-2xl">
                                
                               
                                    <carousel-3d>
                                        <slide v-for="(gambar, index) in pisahFoto(product.foto)" :index="index" :key="index">
                                            <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                                                <img class="mx-auto rounded-lg" :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="pecah(gambar)">
                                            </template>
                                        </slide>
                                    </carousel-3d>
                            
                            </div>

                            <div class="w-full md:w-2/3 p-3 my-6 mx-1 md:mx-2 lg:mx-6 bg-white rounded-lg flex flex-col justify-between ">
                                <p class="text-center font-bold capitalize mt-3">{{ product.deskripsi }}</p>
                            </div>
                    </div>
                      
                </div> -->

                <hr class="mx-auto my-4 border-b border-gray-400 w-2/12">
            </div>
        </div>
    </section>
</template>


<script>
export default {
    
}
</script>

<style scoped>
    .text-blue-air{
        color: #0160AC;
    }
</style>