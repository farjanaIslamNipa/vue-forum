<template>
    <div>
        <form @submit.prevent="save" action="">
              <div class="form-group">
                <label for="thread_content">Content:</label>
                <textarea v-model="text" id="thread_content" class="form-input" name="content" rows="8" cols="140"></textarea>
              </div>

              <div class="btn-group">
                <button class="btn btn-ghost">Cancel</button>
                <button class="btn btn-blue" type="submit" name="Publish">Publish </button>
              </div>
          </form>
    </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("")
const emit = defineEmits(['save-post'])
const props = defineProps(['paramId'])

const save = () => {
  const post = {
    text: text.value,
  }
  emit('save-post', {post})
  text.value = ''
}
</script>

<style scoped>

</style>