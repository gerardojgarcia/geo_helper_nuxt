<script>
import { createClient } from '@supabase/supabase-js'

import { ref } from 'vue'

export default {
  setup() {
    const images = ref([
      {url:'/imgs/img1.webp'},
      {url:'/imgs/img2.webp'},
      {url:'/imgs/img3.webp'}
    ])
    const file = ref(null)
    const activeIndex = ref(0)
    const showNotification = ref(false)
    const supabaseUrl = 'https://jtehldmbvntevzzmecyw.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0ZWhsZG1idm50ZXZ6em1lY3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1NTg4NTgsImV4cCI6MTk5NTEzNDg1OH0.CU5zMoWzdepE8lpIFJi9c5KeUg5TfwsLgBWFp6BvRDw'
    const supabaseClient = createClient(supabaseUrl, supabaseKey)

    const itemWidth = 400;

    const onFileSelected = event => {
      file.value = event.target.files[0]
    }

    const uploadImage = async () => {
      if (!file.value) {
        return
      }
      const { data, error } = await supabaseClient.storage
          .from('geo-images')
          .upload(`${file.value.name}`, file.value, {
            cacheControl: '3600',
            upsert: false
          })
      if (error) {
        alert(error)
        return
      }
      const imageUrl = supabaseClient.storage
          .from('geo-images')
          .getPublicUrl(`${file.value.name}`)
      images.value.push({ url: imageUrl.data.publicUrl })
      file.value = null
      activeIndex.value= images.value.length - 1
      showNotification.value = true
      setTimeout(() => {
        showNotification.value = false
      }, 3000)




          console.log(imageUrl.data.publicUrl)
    }

    const prevImage = () => {
      activeIndex.value -= 1;
    }

    const nextImage = () => {

      activeIndex.value += 1;
    }





    return {
      images,
      file,
      showNotification,
      activeIndex,
      prevImage,
      nextImage,
      itemWidth,
      onFileSelected,
      uploadImage
    }
  },

}
</script>








<template>
  <div class="grid py-16 place-items-center">

    <div class="rock-image-header py-16">

      <h4 class="text-5xl ">Get your photo on the rock wall!</h4>



    </div>

    <div class="image-uploader">


      <input type="file" accept="image/*" @change="onFileSelected">
      <button @click="uploadImage" class="bg-teal-400 w-32 p-3 rounded-md text-white">Upload Image</button>
      <div v-if="showNotification">
        <p>Image uploaded successfully!</p>
      </div>
      <p class="text-sm text-gray-400 mt-4"> *max file size 5mb. Images subject to review before posting. </p>

    </div>





    <div class="flex flex-col">
      <h2 class="py-16 text-5xl">Rock Wall of Fame</h2>
      <div class="carousel overflow-hidden">
        <div class="carousel-items" :style="{ transform: `translateX(-${activeIndex * itemWidth}px)` }">
          <div class="carousel-item" v-for="(image, index) in images" :key="index">
            <img :src="image.url" />
          </div>
        </div>
        <div class="carousel-buttons space-x-8">
          <button class="bg-teal-400 text-white p-4 w-32 rounded-md shadow-md cursor-pointer hover:shadow-xl" @click="prevImage" :disabled="activeIndex === 0">Prev</button>
          <button class="bg-teal-400 text-white p-4 w-32 rounded-md shadow-md cursor-pointer hover:shadow-xl" @click="nextImage" :disabled="activeIndex === images.length - 1">Next</button>
        </div>
      </div>
    </div>


  </div>
</template>




