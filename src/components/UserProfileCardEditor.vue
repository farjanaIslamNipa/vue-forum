<template>
  <div>
    <div class="profile-card">
      <form @submit.prevent="save">
          <p class="text-center">
            <img
              :src="user.avatar"
              :alt="`${user.name}'s profile picture`"
              class="avatar-xlarge img-update"
            />
          </p>
          <div class="form-group">
            <input
              type="text"
              placeholder="Username"
              class="form-input text-lead text-bold"
              v-model="activeUser.username"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              placeholder="Full Name"
              class="form-input text-lead"
              v-model="activeUser.name"
            />
          </div>
          <div class="form-group">
            <label for="user_bio">Bio</label>
            <textarea
              class="form-input"
              id="user_bio"
              placeholder="Write a few words about yourself."
              v-model="activeUser.bio"
            ></textarea>
          </div>
          <div class="stats">
            <span>{{ user.postsCount }} posts</span>
            <span>{{ user.threadsCount }} threads</span>
          </div>
          <hr />
          <div class="form-group">
            <label class="form-label" for="user_website">Website</label>
            <input
              autocomplete="off"
              class="form-input"
              id="user_website"
              v-model="activeUser.website"
            />
          </div>
          <div class="form-group">
            <label class="form-label" for="user_email">Email</label>
            <input
              autocomplete="off"
              class="form-input"
              id="user_email"
              v-model="activeUser.email"
            />
          </div>
          <div class="form-group">
            <label class="form-label" for="user_location">Location</label>
            <input
              autocomplete="off"
              class="form-input"
              id="user_location"
              v-model="activeUser.location"
            />
          </div>
          <div class="btn-group space-between">
            <button @click="cancel" class="btn-ghost">Cancel</button>
            <button type="submit" class="btn-blue">Save</button>
          </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()

// const { user } = defineProps(['user'])
const { user } = defineProps({
    user: {
        type: Object,
        required: true,
    }
})
const activeUser = ref({ ...user })

const save = () => {
    store.dispatch('updateUser', { ...activeUser.value })
    router.push({name: 'Profile'})
}

const cancel = () => {
    router.push({name: 'Profile'})
}
</script>
