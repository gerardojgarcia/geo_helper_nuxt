<script setup>

const { data: articles } = await useFetch('https://newsapi.org/v2/everything?q=geology&from=2023-03-05&sortBy=relevancy&pageSize=10&apiKey=dd6e64f517a0447cbb029493e3725285' )





</script>

<template>
  <div class=" flex flex-col text-black space-y-16 py-16 px-4 md:px-16" >

    <strong class="text-3xl">Latest Earth Science News</strong>

<div class=" gap-5 flex flex-col md:grid grid-cols-4 space-y-8">

  <NuxtLink class="flex flex-col py-16 rounded-xl shadow-lg space-y-4 p-4 md:p-8 hover:shadow-xl" v-for="article in articles.articles" :key="article" :to="article.url" target="_blank" data-aos="fade-up" data-aos-duration="1500">
    <div class="space-y-8" >
      <nuxt-img :src="article.urlToImage"/>
      <p class="text-2xl font-bold">{{article.title}}</p>
      <p class="text-xl">By: {{article.author}}</p>
      <p>{{article.description}}</p>


    </div>

  </NuxtLink>



</div>
    <!--Geology News Updates-->


  </div>
</template>

<style scoped>

</style>