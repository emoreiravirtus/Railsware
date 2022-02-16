<template>
  <div id="nav">
    <router-link to="/login">Login Page</router-link> |
    <router-link to="/password-recover">Password Recover</router-link> |
    <router-link to="/get-pro">Get Pro</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import '@/scss/styles.scss';
</style>
