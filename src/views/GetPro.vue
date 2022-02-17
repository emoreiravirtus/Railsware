<template>
  <div class="container">
    <div class="row my-xxl">
      <div class="col-12 items-center">
        <h1 class="font-title">Get Pro Account</h1>
      </div>
    </div>
    <div class="row mb-xxl">
      <div class="col-12 items-center">
        <div class="svg-illustration-get-pro"></div>
      </div>
    </div>
    <div class="row mb-xl">
      <div class="col-12">
        <CreditCardFields/>
      </div>
    </div>
    <div class="row mb-xl">
      <div class="col-12">
        <Button :actionText="'Upgrade'" :backgroundColor="'secondary'" :size="'big'"/>
      </div>
    </div>
  </div>
</template>

<script>
import CreditCardFields from '@/components/CreditCardFields'
import Button from '@/components/Button'

export default {
  components: {
    CreditCardFields,
    Button
  }
}
</script>

<style scoped lang="scss">
.svg-illustration-get-pro {
  width: 284px;
  height: 171px;
}
</style>