<script>
export default {
    name: 'AppButton',

    props: {
        name: String,
        link: String,
        
    }
}
</script>

<template>
    <div>
        <a :href="link" class="text-white rounded-sm bg-teal-500 shadow-md px-4 py-2 hover:bg-teal-400 border-0 hover:shadow-xl hover:text-white">{{name}}</a>
        
    </div>

</template>


<style>

    a {
        transition: all 200ms;
    }



</style>