<template>
 
    <div class="relative " id="nav">
      <div class="static ">
          <div class="fixed z-50 border-b shadow-lg bg-white w-full">
              
              <div class="flex flex-col">
                  <div class=" hidden md:block sub-margin">
                      <img src="/bg/logo.png" class="h-24 my-8 mx-auto" alt="" srcset="">
                  </div>
                  <div class="pb-3 px-20 hidden md:block ">
                      <ul class="flex flex-row justify-evenly text-xl">
                            <li class="">
                                <nuxt-link to="/" class="text-orange-primary font-bold text-md ">
                                Home
                                </nuxt-link>
                                
                            </li>
                            <li>
                                <nuxt-link to="/portofolio" class="text-orange-primary font-bold text-md ">
                                    Portofolio
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/testimoni" class="text-orange-primary font-bold text-md ">
                                    Testimoni
                                </nuxt-link>
                            </li>
                            <li >
                                <nuxt-link to="/profil" class="text-orange-primary font-bold text-md ">
                                    Profil
                                </nuxt-link>
                            </li>
                      </ul>
                  </div>
              </div>

              <div class="flex flex-row md:hidden px-5 h-20 justify-between items-center">
                  <div class="flex justify-left ">
                      <img src="/bg/logo.png" class="w-auto h-16 " alt="" srcset="">
                  </div>
                  
  
                  <div class="flex lg:hidden flex-col justify-center ">
                      <div class="bg-blue-primary rounded-lg">
                          <div class="hamburger hamburger--slider" v-on:click="handleToggle">
                              <div class="hamburger-box">
                                  <div class="hamburger-inner "></div>
                              </div>
                          </div>
                      </div>
  
                  </div>
              </div>

          </div>

          <div v-if="isOpen">
              <div class="fixed w-full pt-24 bg-white shadow-2xl px-10 block md:hidden z-40">

                  <div class="block mb-5">
                      <ul class="flex flex-col items-end text-xl">
                            <li class="">
                                <nuxt-link to="/" class="my-1 border-b border-orange-primary font-bold text-orange-primary ">
                                    Home
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/portofolio" class="my-1 border-b border-orange-primary font-bold text-orange-primary ">
                                    Portofolio
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/testimoni" class="my-1 border-b border-orange-primary font-bold text-orange-primary">
                                    Testimoni
                                </nuxt-link> 
                            </li>
                            <li>
                                <nuxt-link to="/profil" class="my-1 border-b border-orange-primary font-bold text-orange-primary">
                                    Profil Perusahaan
                                </nuxt-link>   
                            </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>


    <div class="static pt-0 md:pt-10">
     
      <nuxt />
    </div>
     
      <section class="footer">

              <div class="py-5 mb-64">
                  <h2 class="text-center uppercase text-blue-primary text-3xl font-bold ">PT Buya Barokah Kudus</h2>
                  <div class="w-4/5 md:w-3/5 mx-auto py-2">
                      <p class="italic capitalize text-center font-mono">
                          "Jasa Percetakan Kitab Dan Quran Terbesar dan Terpercaya di Kota Kudus Dan sudah menyelesaikan ribuan kitab"
                      </p>
                  </div>
              </div>


              <div class="wrap relative pt-64 z-0">

                  <div class="custom-shape-divider-bottom-1600969527 z-0 ">
                      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                          preserveAspectRatio="none">
                          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                      </svg>
                  </div>
              </div>

              <div class=" bg-gray-footer">
                  <div class="flex flex-col  lg:flex-row justify-evenly z-10">

                      <div class="text-3xl lg:text-5xl mb-8">
                          <div class=" font-bold">
                              <p class=" text-orange-primary text-center lg:text-left">
                                  PT Buya Barokah
                              </p>
                              <p class="text-blue-primary text-center lg:text-left"> Kudus </p>
                          </div>
                      </div>
                      <div class="text-center lg:text-left mb-8">
                          <h1 class="text-blue-primary font-bold mb-2 text-xl">Call Us</h1>
                          <p class="text-gray-700">+62811 8666 886</p>
                          <p class="text-gray-700">+62811 8666 886</p>
                      </div>
                      <div class="text-center lg:text-left mb-8">
                          <h1 class="text-blue-primary font-bold mb-2 text-xl">Reach Us</h1>
                          <p class="text-gray-700 capitalize">JL menara Kudus</p>
                          <p class="text-gray-700 capitalize">No 7 kudus</p>
                      </div>
                      <div class="text-center lg:text-left mb-8">
                          <h1 class="text-blue-primary font-bold mb-2 text-xl">Call Us</h1>
                          <div class="flex flex-row justify-center">
                              <a href="#">
                                  <img src="/icon/facebook.png" class="h-8 pr-3" alt="" srcset="">
                              </a>
                              <a href="#">
                                  <img src="/icon/instagram.png" class="h-8" alt="">
                              </a>

                          </div>
                      </div>
                  </div>

                  <hr class="border-b-1 border-gray-400">
                  <p class=" py-10 text-center text-gray-800 px-10">
                      Copyright © 2020 buyabarokahkudus.com
                  </p>
              </div>
          </section>
          
      </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
    }
    
  },
  methods: {
    handleToggle() {
      this.isOpen = !this.isOpen
    } 
  }
}
</script>

<style scoped>
    .sub-margin{
        margin-top: -20px;
        margin-bottom:-10px
    }
    
    .nuxt-link-exact-active {
        color: rgb(2, 54, 92); 
    }

</style>