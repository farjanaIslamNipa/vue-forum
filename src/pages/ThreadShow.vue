<template>
  <div class="container">
    <div class="col-large push-top">
      <h1>{{ thread.title }}</h1>
      <PostList :posts="threadPosts" />
      <PostEditor @save-post="addPost"/>
    </div>
  </div>
</template>
  
<script setup>
import PostList from "@/components/PostList.vue";
import PostEditor from "@/components/PostEditor.vue";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from 'vuex'

const store = useStore()

const threads = ref(store.state.threads);
const posts = ref(store.state.posts);
const route = useRoute();

const thread = computed(() => {
  return threads.value.find((thread) => thread.id === route.params.id);
});

const threadPosts = computed(() => {
  return posts.value.filter(post => post.threadId === route.params.id)
})

const addPost = (eventData) => {

  // const postId = 'gggg' + Math.random()
  const post = {
    ...eventData.post,
    threadId: route.params.id
  }
  posts.value.push(post)
  thread.value.posts.push(post.id)
  // newPostText.value = ''
}
</script>
  
  <style scoped>
</style>