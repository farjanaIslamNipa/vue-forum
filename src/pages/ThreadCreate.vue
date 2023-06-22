<template>
    <div>
        <div class="container mx-auto">
            <h1>Create new thread in <span>{{ forum.name }}</span></h1>
            <form @submit.prevent="" action="">
              <div class="form-group">
                <label for="thread_title">Title:</label>
                <input v-model="title" type="text" id="thread_title" class="form-input" name="title" >
              </div>

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
    </div>
</template>
<script setup>
import { ref } from 'vue';

const {forum} = defineProps({
  forum: {type: Object, required: true}
})

const title = ref('')
const text = ref('')

const save = () => {

}
</script>
