<template>
  <div 
    class="container p-m border-primary border-s"
    :class="{'border-error': !valid }"
    @click="focus">
    <div class="row">
      <div class="col-1">
      <div class="svg-icon-contacts-primary" 
      :class="{'svg-icon-contacts-error': !valid }">
      </div>
      </div>
      <div class="col-11 line-s">
        <input 
          class="font-primary font-m-m"
          :class="{'font-error': !valid }"
          ref="emailInput" 
          type="email" 
          name="email"
          placeholder="example@email.com"
          v-model="email"
          @change="emitEmail">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmailInput',
  data() {
    return {
      valid: true,
      email: ''
    }
  },
  methods: {
    focus() {
      this.$refs.emailInput.focus();
    },
    emitEmail() {

      if (!this.email) {
        this.valid = false;
        this.$emit('emit', { value: '', valid: false });
      }
      //eslint-disable-next-line
      else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.valid = true;
        this.$emit('emit', { value: this.email, valid: true });
      }
      else {
        this.valid = false;
        this.$emit('emit', { value: this.email, valid: false });
      }
    }

  }
}
</script>

<style scoped lang="scss">
  .container {
    max-width: 344px;
  }
  input {
    border: none;
    width: 100%;
    transition: $fast-transition;

    &:focus-visible {
      transform: scale(1.2);
      outline: none;
      width: calc(100% - 37px);
    }

    &::placeholder {
      color: $primary-color;
    }
  }
</style>