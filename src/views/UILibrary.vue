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
        <EmailInput @emitEmail="handleEmitEmail"/>
      </div>
    </div>
  </div>
</template>

<script>
import EmailInput from '@/components/EmailInput'

export default {
  components: {
    EmailInput
  },
  methods: {
  }
}
</script>

<style>

</style>