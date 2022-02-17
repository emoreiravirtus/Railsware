<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="font-primary font-center font-l-l line-xl">Ui Library</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2 class="font-secondary font-center">Email Input</h2>
      </div>
      <div class="col-12">
        <EmailInput @emit="handleEmit"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2 class="font-secondary font-center">Password Input</h2>
      </div>
      <div class="col-12">
        <PasswordInput @emit="handleEmit"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2 class="font-secondary font-center">Buttons</h2>
      </div>
      <div class="col-12">
        <Button 
          :size="'big'"
          :actionText="'Log in'"
          @clicked="handleEmit"/>
      </div>
      <div class="col-12 mt-s">
        <Button 
          :backgroundColor="'secondary'"
          :size="'big'"
          :actionText="'Upgrade'"
          @clicked="handleEmit"/>
      </div>
      <div class="col-6 mt-s">
        <Button 
          :backgroundColor="'google'"
          :actionText="'Google'"
          @clicked="handleEmit"/>
      </div>
      <div class="col-6 mt-s">
        <Button 
          :backgroundColor="'facebook'"
          :actionText="'Facebook'"
          @clicked="handleEmit"/>
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