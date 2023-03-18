<template>
      <div class="post-list">
        <div v-for="post in posts" :key="post.id" class="post">
          <div class="user-info">
            <a href="" class="user-name">{{
              userById(post.userId).name
            }}</a>

            <a href="">
              <img
                class="avatar-large"
                :src="userById(post.userId).avatar"
                alt=""
              />
            </a>

            <p class="desktop-only text-small">107 posts</p>
          </div>

          <div class="post-content">
            <div>
              <p>
                {{ post.text }}
              </p>
            </div>
          </div>

          <div class="post-date text-faded">
            <AppDate :timestamp="post.publishedAt" />
          </div>
<!-- 
          <div class="reactions">
            <ul>
              <li>💡</li>
              <li>❤️</li>
              <li>👎</li>
              <li>👍</li>
              <li>👌</li>
            </ul>
            <button class="btn-xsmall"><span class="emoji">❤️</span>️ 3</button>
            <button class="btn-xsmall active-reaction">
              <span class="emoji">👌️</span>️ 1
            </button>
            <button class="btn-xsmall">
              + <i class="fa fa-smile-o emoji"></i>
            </button>
          </div> -->
        </div>
      </div>
</template>

<script setup>
import sourceData from "@/data.json";

import { ref } from "vue";

const {posts} = defineProps(['posts'])

const users = ref(sourceData.users);
const userById = (userId) => {
  return users.value.find((user) => user.id === userId);
};

</script>

<style scoped>

</style>