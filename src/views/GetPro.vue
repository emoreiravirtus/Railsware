<template>
  <div class="container">
    <div class="row my-xxl">
      <div class="col-12 items-center">
        <h1 class="font-title">Get Pro Account</h1>
      </div>
    </div>
    <div class="row mb-xxl">
      <div class="col-12 items-center">
        <div class="svg-illustration-get-pro">
          <div ref="helpCreditCard" class="help-credit-card" :class="{'active': cardNumber || expiration || cvv}">
            <div class="container--fluid p-s">
              <div class="row">
                <div class="col-12 mt-xxl">
                  <p class="font-m font-light">{{ cardNumber }}</p>
                </div>
                <div class="col-6 mt-m">
                  <p class="font-s font-light">EXP: {{ expiration }}</p>
                </div>
                <div class="col-6 mt-m">
                  <p class="font-s font-light">CCV: {{ cvv }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-xl">
      <div class="col-12">
        <CreditCardFields @emit="handleEmit"/>
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
  },
  data() {
    return {
      cardNumber: '',
      expiration: '',
      cvv: ''
    }
  },
  methods: {
    handleEmit(e) {
      this[e.key] = e.value;

      if (e.key != 'zipCode') {
        this.$refs.helpCreditCard.classList.add('impact');
        setTimeout(() => {
          this.$refs.helpCreditCard.classList.remove('impact');
        }, 300);
      }
    }
  }
}
</script>

<style scoped lang="scss">
* {
  animation: .5s appear;
}
.svg-illustration-get-pro {
  position: relative;
  width: 284px;
  height: 171px;

  .help-credit-card {
    position: absolute;
    width: 77px;
    height: 42px;
    top: 25px;
    border-radius: 20px;
    left: calc(284px / 5);
    background: linear-gradient(90deg, darken($primary-color, 10), lighten($primary-color, 5), lighten($primary-color, 10));
    transition: 1s;
    opacity: 0;
    animation: none;
    @include box-shadow();

    p {
      text-shadow: rgb(0 0 0) 2.5px 2.5px 1px;
    }
  }

  .active {
    width: 288px;
    height: 173px;
    top: 0px;
    left: 0;
    opacity: 1;
  }

  .impact {
    animation: .3s impact;
  }
}
</style>