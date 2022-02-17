<template>
  <div class="container">
    <div class="row mb-xl">
      <div class="col-12 items-center">
        <div class="svg-illustration-login"></div>
      </div>
    </div>
    <div class="row mb-xl">
      <div class="col-12 items-center">
        <h1 class="font-title">Welcome Back</h1>
      </div>
    </div>
    <div class="row mb-xl">
      <div class="col-12">
        <EmailInput/>
      </div>
    </div>
    <div class="row mb-xxl">
      <div class="col-12">
        <PasswordInput/>
      </div>
      <div class="col-12 mt-xs items-right">
        <router-link to="/password-recover"><p class="font-link">Forgot Password?</p></router-link>
      </div>
    </div>
    <div class="row mb-xxl">
      <div class="col-12">
        <Button :actionText="'Log in'" :size="'big'"/>
      </div>
    </div>
    <div class="row mb-xl">
      <div class="col-12">
        <p class="font-info font-center">Or connect with social</p>
      </div>
    </div>
    <div class="row mb-xxl">
      <div class="col-5">
        <Button :actionText="'Facebook'" :backgroundColor="'facebook'"/>
      </div>
      <div class="col-5 col-offset-2">
        <Button :actionText="'Google'" :backgroundColor="'google'"/>
      </div>
    </div>
  </div>
</template>

<script>
import EmailInput from '@/components/EmailInput'
import PasswordInput from '@/components/PasswordInput'
import Button from '@/components/Button'

export default {
  components: {
    EmailInput,
    PasswordInput,
    Button
  }
}
</script>

<style scoped lang="scss">
* {
  animation: .5s appear;
}
.svg-illustration-login {
  width: 212px;
  height: 212px;
}
</style>