<script>
import { createClient } from '@supabase/supabase-js'

import { ref } from 'vue'

export default {
  setup() {
    const currentIndex = ref(0);
    const images = ref([])
    const file = ref(null)
    const activeIndex = ref(0)
    const showNotification = ref(false)
    const supabaseUrl = 'https://jtehldmbvntevzzmecyw.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0ZWhsZG1idm50ZXZ6em1lY3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1NTg4NTgsImV4cCI6MTk5NTEzNDg1OH0.CU5zMoWzdepE8lpIFJi9c5KeUg5TfwsLgBWFp6BvRDw'
    const supabaseClient = createClient(supabaseUrl, supabaseKey)

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
            upsert: true
          })
      if (error) {
        console.log(error)
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




          console.log(imageUrl)
    }

    const prevImage = () => {
      if (activeIndex.value === 0) {
        activeIndex.value = images.value.length - 1
      } else {
        activeIndex.value--
      }
    }

    const nextImage = () => {
      if (activeIndex.value === images.value.length - 1) {
        activeIndex.value = 0
      } else {
        activeIndex.value++
      }
    }





    return {
      images,
      file,
      showNotification,
      activeIndex,
      prevImage,
      nextImage,

      onFileSelected,
      uploadImage
    }
  }
}
</script>








<template>
  <div class="grid py-16 place-items-center">

    <div class="rock-image-header py-16">

      <h4 class="text-5xl ">Get your photo on the rock wall!</h4>



    </div>
    <input type="file" accept="image/*" @change="onFileSelected">
    <button @click="uploadImage" class="bg-teal-400 w-32 p-3 rounded-md text-white">Upload Image</button>
    <div v-if="showNotification">
      <p>Image uploaded successfully!</p>
    </div>
    <div>
      <h2>Image Carousel</h2>
      <div class="carousel">
        <div class="carousel-inner">
          <img v-for="(image, index) in images" :src="image.url" :key="index" :class="{active: index === activeIndex}">
        </div>
        <button class="carousel-control-prev" @click="prevImage">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" @click="nextImage">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>


  </div>
</template>




