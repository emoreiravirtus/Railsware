<template>
  <div id="button" ref="buttonC" class="container border-s pointer" @click="emitAction">
    <p ref="buttonP" class="line-l font-center font-m-m">{{ actionText }}</p>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    actionText: {
      type: String,
      default: () => {
        return 'Send';
      }
    },
    backgroundColor: {
      type: String,
      default: () => {
        return 'primary';
      }
    },
    fontColor: {
      type: String,
      default: () => {
        return 'light';
      }
    },
    size: {
      type: String,
      default: () => {
        return 'small';
      }
    }
  },
  mounted() {
    this.$refs.buttonC.classList.add(`bg-${this.backgroundColor}`);
    this.$refs.buttonP.classList.add(`font-${this.fontColor}`);

    if(this.size == 'big') {
      this.$refs.buttonC.classList.add('p-m');
      this.$refs.buttonC.classList.add('uppercase');
    }
    else {
      this.$refs.buttonC.classList.add('p-s');
      this.$refs.buttonC.classList.add('small-button');
    }
  },
  methods: {
    emitAction() {
      this.$emit('clicked', true);
    }
  }
}
</script>

<style scoped lang="scss">
  #button {
    max-width: 344px;
    transition: $fast-transition;
    @include box-shadow();

    &:hover {
        transform: translateY(-5px);
      p {
        transform: scale(1.2);
      }
    }

    &:active {
        transform: scale(0.8);
    }

    &.small-button {
    max-width: 165px;
  }

  }
  p {
    transition: $fast-transition;
  }

</style>