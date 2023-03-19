<template>
  <div>
    <div class="container">
      <div class="flex-grid">
        <div class="col-3 push-top">
          <div class="profile-card">
            <p class="text-center">
              <img src="https://i.imgur.com/OqlZN48.jpg" alt="" class="avatar-xlarge" />
            </p>

            <h1 class="title">joker</h1>

            <p class="text-lead">Joseph Kerr</p>

            <p class="text-justify">No bio specified.</p>

            <span class="online">joker is online</span>

            <div class="stats">
              <span>116 posts</span>
              <span>73 threads</span>
            </div>

            <hr />

            <p class="text-large text-center">
              <i class="fa fa-globe"></i> <a href="#">batman.com</a>
            </p>
          </div>

          <p class="text-xsmall text-faded text-center">
            Member since june 2003, last visited 4 hours ago
          </p>

          <div class="text-center">
            <hr />
            <a href="edit-profile.html" class="btn-green btn-small">Edit Profile</a>
          </div>
        </div>

        <div class="col-7 push-top">
          <div class="profile-header">
            <span class="text-lead"> Joker's recent activity </span>
            <a href="#">See only started threads?</a>
          </div>

          <hr />

          <div class="activity-list">
            <div class="activity">
              <div class="activity-header">
                <img
                  src="https://i.imgur.com/OqlZN48.jpg"
                  alt=""
                  class="hide-mobile avatar-small"
                />
                <p class="title">
                  How can I chop onions without crying?
                  <span>Joker started a topic in Cooking</span>
                </p>
              </div>

              <div class="post-content">
                <div>
                  <p>
                    I absolutely love onions, but they hurt my eyes! Is there a way where
                    you can chop onions without crying?
                  </p>
                </div>
              </div>

              <div class="thread-details">
                <span>4 minutes ago</span>
                <span>1 comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
