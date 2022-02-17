<template>
  <div class="container">
    <div class="row mb-xl">
      <div class="col-12 items-center">
        <div class="svg-illustration-password-recover"></div>
      </div>
    </div>
    <div class="row mb-xl">
      <div class="col-12 items-center">
        <h1 class="font-title">Forgot Password</h1>
      </div>
    </div>
    <div class="row mb-xl">
      <div class="col-12">
        <EmailInput/>
      </div>
    </div>
    <div class="row mb-xxl">
      <div class="col-12">
        <Button :actionText="'Reset'" :size="'big'"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <p class="font-info font-center">Already have an account? <span class="font-link">Login here</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import EmailInput from '@/components/EmailInput'
import Button from '@/components/Button'

export default {
  components: {
    EmailInput,
    Button
  }
}
</script>

<style scoped lang="scss">
.svg-illustration-password-recover {
  width: 212px;
  height: 212px;
}
</style>