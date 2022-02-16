<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="font-primary font-center">Ui Library</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2 class="font-secondary font-left">Email Input</h2>
      </div>
      <div class="col-12">
        <EmailInput @emit="handleEmit"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2 class="font-secondary font-left">Password Input</h2>
      </div>
      <div class="col-12">
        <PasswordInput @emit="handleEmit"/>
      </div>
    </div>
  </div>
</template>

<script>
import EmailInput from '@/components/EmailInput'
import PasswordInput from '@/components/PasswordInput'


export default {
  components: {
    EmailInput,
    PasswordInput
  },
  methods: {
    handleEmit(e){
      console.log(e);
    }
  }
}
</script>

<style>

</style>