<template>
  <div 
    class="container--fluid p-m border-primary border-s"
    :class="{'border-error': !valid }"
    @click="focus">
    <div class="row">
      <div class="col-1">
      <div class="svg-icon-lock-primary" 
      :class="{'svg-icon-lock-error': !valid }">
      </div>
      </div>
      <div class="col-10 col-sm-11 line-s">
        <input 
          class="font-primary font-m-m"
          :class="{'font-error': !valid }"
          ref="passwordInput" 
          type="password" 
          name="password"
          placeholder="password"
          v-model="password"
          @change="emitPasswordInput">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PasswordInput',
  data() {
    return {
      valid: true,
      password: ''
    }
  },
  methods: {
    focus() {
      this.$refs.passwordInput.focus();
    },
    emitPasswordInput() {
      if (!this.password || this.password.length < 6) {
        this.valid = false;
        this.$emit('emit', { value: '', valid: false });
      }
      else {
        this.valid = true;
        this.$emit('emit', { value: this.password, valid: true });
      }
    }

  }
}
</script>

<style scoped lang="scss">
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