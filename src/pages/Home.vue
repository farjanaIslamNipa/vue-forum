<template>
    <h1 class="text-center py-4">Welcome to the forum</h1>
  <div class="">
    <div>
        <ThreadList :threads="threads" />
    </div>
  </div>
</template>

<script setup>
import sourceData from "@/data.json";
import ThreadList from "@/components/ThreadList.vue";
import { ref } from "vue";

const threads = ref(sourceData.threads);
</script>

<style scoped>
</style>