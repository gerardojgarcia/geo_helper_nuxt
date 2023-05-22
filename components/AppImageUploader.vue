<template>
  <div class="bg-white px-6 py-32 flex flex-col">
    <div class="pl-32">
      <strong class="font-normal text-5xl">Upload your rock finds!</strong>
    </div>

    <div class="flex flex-col pl-32 pb-32">
      <input
        class="mt-16 px-4"
        type="file"
        ref="fileInput"
        @change="handleFileUpload"
        capture
      />
      <button
        class="bg-teal-400 rounded-md p-2 text-white w-24 mt-8"
        @click="uploadImage"
      >
        Upload
      </button>
      <div v-if="showNotification">
        <p>Image uploaded successfully!</p>
      </div>

      <p class="text-sm text-gray-400 mt-4">
        *max file size 5mb. Images subject to review before posting.
      </p>
    </div>

    <div class="carousel overflow-hidden py-16 mt-32">
      <div
        class="carousel-items px-8"
        :style="{ transform: `translateX(-${currentIndex * itemWidth}px)` }"
      >
        <div class="carousel-item" v-for="(image, index) in images" :key="index">
          <img :src="image.image" />
        </div>
      </div>
      <div class="carousel-buttons space-x-8">
        <button
          class="bg-black rounded-md p-2 text-white"
          @click="goToPreviousItem"
          :disabled="currentIndex === 0"
        >
          Prev
        </button>
        <button
          class="bg-black rounded-md p-2 text-white"
          @click="goToNextItem"
          :disabled="currentIndex === images.length - 1"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";

export default {
  setup() {
    const file = ref(null);
    const imageUrl = ref(null);
    const images = ref(["/imgs/Screenshot 2023-03-17 at 5.07.15 AM.png"]);
    const currentIndex = ref(0);
    const itemWidth = 400;

    const supabaseClient = createClient(
      "https://jtehldmbvntevzzmecyw.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0ZWhsZG1idm50ZXZ6em1lY3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1NTg4NTgsImV4cCI6MTk5NTEzNDg1OH0.CU5zMoWzdepE8lpIFJi9c5KeUg5TfwsLgBWFp6BvRDw"
    );

    const handleFileUpload = (event) => {
      file.value = event.target.files[0];
    };

    const uploadImage = async (e) => {
      e.preventDefault();
      const filename = `${uuidv4}-${file.value.name}`;

      const { data, error } = await supabaseClient.storage
        .from("geo-images")
        .upload(filename, file.value, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        console.log(error);
        return;
      }
      const imageUrl = data.path;
    };

    const { data } = supabaseClient.storage
      .from("geo-images")
      .getPublicUrl("geo-images/${file.value.name}");

    const goToPreviousItem = () => {
      currentIndex.value -= 1;
    };

    const goToNextItem = () => {
      currentIndex.value += 1;
    };

    return {
      file,
      imageUrl,
      images,
      currentIndex,
      itemWidth,
      handleFileUpload,
      uploadImage,
      goToPreviousItem,
      goToNextItem,
    };
  },
};
</script>

<style>
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.carousel-items {
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.3s ease-out;
}

.carousel-item {
  flex: 0 0 400px;
  margin-right: 20px;
  border: 1px solid black;
  box-shadow: 5px 2px black;
}

.carousel-item img {
  width: 100%;
}

.carousel-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
