<template>
  <div class="container--fluid">
    <div class="row mb-xl">
      <div class="col-12">
          <div 
            class="container--fluid p-m border-primary border-s"
            @click="focusCardNumber">
            <div class="row">
              <div class="col-12 line-s">
                <input 
                  class="font-primary font-m-m"
                  ref="cardNumberInput" 
                  type="text" 
                  name="cardNumber"
                  placeholder="Card Number"
                  v-mask="'#### #### #### ####'"
                  v-model="cardNumber"
                  @keyup="emitCardNumber">
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="row">
      <div class="col-5">
        <div 
          class="container--fluid p-m border-primary border-s"
          @click="focusExpiration">
          <div class="row">
            <div class="col-12 line-s">
              <input 
                class="font-primary font-m-m"
                ref="expirationInput" 
                type="text" 
                name="expiration"
                placeholder="MM/YY"
                v-mask="'##/##'"
                v-model="expiration"
                @keyup="emitExpiration">
            </div>
          </div>
        </div>
      </div>
      <div class="col-5 col-offset-2">
        <div 
          class="container--fluid p-m border-primary border-s"
          @click="focusCvv">
          <div class="row">
            <div class="col-12 line-s">
              <input 
                class="font-primary font-m-m"
                ref="cvvInput" 
                type="text" 
                name="cvv"
                placeholder="CVV"
                v-mask="'###'"
                v-model="cvv"
                @keyup="emitCvv">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="cvvInfo" class="row mt-xxs items-right mb-s">
      <p class="font-dark-gray pointer">What's this?</p>
      <div id="cvvInfo-pop-over" class="bg-primary p-s border-l">
        <p class="font-light">The 3 numbers behind your credit card.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
          <div 
            class="container--fluid p-m border-primary border-s"
            @click="focusZip">
            <div class="row">
              <div class="col-12 line-s">
                <input 
                  class="font-primary font-m-m"
                  ref="zipCodeInput" 
                  type="text" 
                  name="zipCode"
                  placeholder="ZIP/Postal Code"
                  v-mask="['#####-####','#A# #A#']"
                  v-model="zipCode"
                  @keyup="emitZipCode">
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CreditCardFields',
  data() {
    return {
      cardNumber: '',
      expiration: '',
      cvv: '',
      zipCode: ''
    }
  },
  methods: {
    focusExpiration() {
      this.$refs.expirationInput.focus();
    },
    focusCardNumber() {
      this.$refs.cardNumberInput.focus();
    },
    focusCvv() {
      this.$refs.cvvInput.focus();
    },
    focusZipCode() {
      this.$refs.zipCodeInput.focus();
    },
    emitExpiration() {
      this.$emit('emit', { key: 'expiration', value: this.expiration});
    },
    emitCardNumber() {
      this.$emit('emit', { key: 'cardNumber', value: this.cardNumber});
    },
    emitCvv() {
      this.$emit('emit', { key: 'cvv', value: this.cvv});
    },
    emitZipCode() {
      this.$emit('emit', { key: 'zipCode', value: this.zipCode});
    }
  }
}
</script>

<style scoped lang="scss">
  .container--fluid {

    #cvvInfo {
      position: relative;

      p:hover + #cvvInfo-pop-over {
          opacity: 1;
          visibility: visible;
      }

      &-pop-over {
        cursor: default;
        position: absolute;
        bottom: -45px;
        right: 0;
        opacity: 0;
        transition: $fast-transition;
        visibility: hidden;
        z-index: 3;
        @include box-shadow();

        &::after {
          content: "";
          display: inline-block;
          width: 10px;
          height: 10px;
          background-color: $primary-color;
          position: absolute;
          right: 25px;
          top: -3px;
          transform: rotate(45deg);
        }
      }
    }

    input {
    border: none;
    width: 100%;
    transition: $fast-transition;

    &:focus-visible {
      transform: translateX(-15px);
      outline: none;
    }

    &::placeholder {
      color: $primary-color;
    }
  }
  }
</style>