<template>
  <div>
    <div class="col-full">
      <div class="thread-list">
        <h2 class="list-title">Threads</h2>

        <div v-for="thread in threads" :key="thread.id" class="thread">
          <div>
            <p>
              <router-link :to="{name: 'ThreadShow', params: {id: thread.id}}">{{ thread.title }}</router-link>
            </p>
            <p class="text-faded text-xsmall">
              By <a href="">{{ userById(thread.userId).name }}</a>, <AppDate :timestamp="thread.publishedAt" />.
            </p>
          </div>

          <div class="activity">
            <p class="replies-count">{{ thread.posts.length }} reply</p>

            <img
              class="avatar-medium"
              :src="userById(thread.userId).avatar"
              alt=""
            />

            <div>
              <p class="text-xsmall">
                <a href="profile.html">{{ userById(thread.userId).name }}</a>
              </p>
              <p class="text-xsmall text-faded"><AppDate :timestamp="thread.publishedAt" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sourceData from "@/data.json";
import { ref } from "vue";

const {threads} = defineProps(['threads']);
const posts = ref(sourceData.posts);
const users = ref(sourceData.users);

const postById = (postId) => {
  return posts.value.find((post) => post.id === postId);
};
const userById = (userId) => {
  return users.value.find((user) => user.id === userId);
};
</script>

<style scoped>
</style>