<template>
    <div>
        <ForumList 
        :forums="getForumsForCategory(category)" 
        :title="category.name"
        :category-id="category.id"
        />
    </div>
</template>

<script setup>
import ForumList from '@/components/ForumList.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

const route = useRoute()

const category = computed(() => {
    return store.state.categories.find(category => category.id === route.params.id)
})


const getForumsForCategory = (category) => {
    return store.state.forums.filter(forum => forum.categoryId === category.id)
}
</script>

<style scoped>

</style>