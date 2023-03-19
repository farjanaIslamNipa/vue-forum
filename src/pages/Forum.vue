<template>
  <div>
    <header class="header" id="header">
      <a href="index.html" class="logo">
        <img src="assets/img/svg/vueschool-logo.svg" />
      </a>

      <div class="btn-hamburger">
        <!-- use .btn-humburger-active to open the menu -->
        <div class="top bar"></div>
        <div class="middle bar"></div>
        <div class="bottom bar"></div>
      </div>

      <!-- use .navbar-open to open nav -->
      <nav class="navbar">
        <ul>
          <li class="navbar-user">
            <a href="#">
              <img
                class="avatar-small"
                src="https://pbs.twimg.com/profile_images/1188775562657091594/5mgkg44t_400x400.jpg"
                alt=""
              />
              <span>
                Alex Kyriakidis
                <img
                  class="icon-profile"
                  src="assets/img/svg/arrow-profile.svg"
                  alt=""
                />
              </span>
            </a>

            <!-- dropdown menu -->
            <!-- add class "active-drop" to show the dropdown -->
            <div id="user-dropdown">
              <div class="triangle-drop"></div>
              <ul class="dropdown-menu">
                <li class="dropdown-menu-item">
                  <a href="profile.html">View profile</a>
                </li>
                <li class="dropdown-menu-item"><a href="#">Log out</a></li>
              </ul>
            </div>
          </li>
        </ul>

        <ul>
          <li class="navbar-item">
            <a href="index.html">Home</a>
          </li>
          <li class="navbar-item">
            <a href="category.html">Category</a>
          </li>
          <li class="navbar-item">
            <a href="forum.html">Forum</a>
          </li>
          <li class="navbar-item">
            <a href="thread.html">Thread</a>
          </li>
          <!-- Show these option only on mobile-->
          <li class="navbar-item mobile-only">
            <a href="profile.html">My Profile</a>
          </li>
          <li class="navbar-item mobile-only">
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
    <div class="col-full push-top">
        <ul class="breadcrumbs">
            <li><a href="/index.html"><i class="fa fa-home fa-btn"></i>Home</a></li>
            <li><a href="/category.html">Discussions</a></li>
            <li class="active"><a href="#">Cooking</a></li>
        </ul>

        <div class="forum-header">
            <div class="forum-details">
                <h1>{{ forum.name }}</h1>
                <p class="text-lead">{{ forum.description }}</p>
            </div>
            <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
        </div>
    </div>

    <div class="container">
      <div class="col-full">
        <div class="category-item">
          <div class="forum-list">
            <h2 class="list-title">Recipes</h2>

            <div class="forum-listing">
              <div class="forum-details">
                <a href="#" class="forum-name">Recipes</a>

                <p class="forum-description">
                  Recipes, Guides and Tips & Tricks
                </p>
              </div>

              <div class="threads-count">
                <p class="count text-lead">1</p>
                threads
              </div>

              <div class="last-thread">
                <img
                  class="avatar"
                  src="http://cleaneatsfastfeets.com/wp-content/uploads/2013/05/Mr-Burns.gif"
                  alt=""
                />
                <div class="last-thread-details">
                  <a href="#">How I grill my fish</a>
                  <p class="text-xsmall">
                    By <a href="profile.html">Charles Montgomery Burns</a>, 2
                    days ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-full">
        <ThreadList :threads="threads" />
      </div>
    </div>

    <div class="forum-stats desktop-only">
      <hr />
      <ul>
        <li><i class="fa fa-user-circle-o"></i>47 users online</li>
        <li><i class="fa fa-user-o"></i>497 users registered</li>
        <li><i class="fa fa-comments-o"></i>49 threads</li>
        <li><i class="fa fa-comment-o"></i>763 posts</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import ThreadList from '@/components/ThreadList.vue'
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'

const store = useStore()

const route = useRoute();

const forum = computed(() => {
    return store.state.forums.find(forum => forum.id === route.params.id)
})

const threads = computed(() => {
    return store.state.threads.filter(thread => thread.forumId === route.params.id)
})
</script>

<style scoped>

</style>
