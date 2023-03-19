<template>
    <ForumList 
    v-for="category in categories" 
    :key="category.id" 
    :forums="getForumsForCategory(category)" 
    :title="category.name"
    :category-id="category.id"
    />
</template>

<script setup>
import ForumList from './ForumList.vue';
import { useStore } from 'vuex'

const store = useStore()

const {categories} = defineProps(['categories'])

const getForumsForCategory = (category) => {
    return store.state.forums.filter(forum => forum.categoryId === category.id)
}
</script>

<style scoped>

</style>