<template>
    <h1 class="text-center py-4">Welcome to the forum</h1>
  <div class="">
    <div>
        <!-- <ForumList :forums="forums" /> -->
        <CategoryList :categories="categories" />
    </div>
  </div>
</template>

<script setup>
import CategoryList from "../components/CategoryList.vue";
import { computed } from "vue";
import { useStore } from 'vuex'

const store = useStore()

const categories = computed(() => store.state.categories)

</script>

<style scoped>
</style>
