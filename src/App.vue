<template>
  <div id="nav">
    <div class="container--fluid">
      <div class="row">
        <div class="col-12">
          <p class="font-info">
            Made with love by <a class="font-link" target="_blank" href="https://www.linkedin.com/feed/">E. Moreira</a> 
          </p> 
        </div>
        <div class="col-12">
          <p class="font-info">
            Repo <a class="font-link" target="_blank" href="https://github.com/emoreiravirtus/Railsware">here</a> 
          </p> 
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-s">
          <router-link class="font-link" to="/login">Login Page</router-link> |
          <router-link class="font-link" to="/password-recover">Password Recover</router-link> |
          <router-link class="font-link" to="/get-pro">Get Pro</router-link> |
          <router-link class="font-link" to="/ui-library">UI Library</router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
@import '@/scss/styles.scss';

#nav {
  position: fixed;
  top: 15px;
}
</style>
