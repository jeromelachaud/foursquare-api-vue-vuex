<template>
  <div
    class="text-input"
    v-bind:class="classString">
    <div
      class="label">
      <label
        for="text-input">{{label}}</label>
    </div>
    <input
      :value="value"
      autofocus
      type="text"
      id='text-input'
      :required="true"
      :placeholder="placeholder"
      @input="e => onInput(e)"
     />
    <span class="input-error">{{errorMsg}}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    label: String,
    placeholder: String,
    value: {
      type: String,
      default: '',
    },
  },
  name: 'TextInput',
  data: () => ({
    errorMsg: 'Sorry, there seems to be an error',
  }),
  computed: {
    ...mapState([
      'appState',
    ]),
    classString() {
      if (this.appState === 'onError') return 'error'
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
<style scoped lang="scss">
  .text-input {
    width: 480px;
    margin: 30px auto;
  }

  .label {
    margin: 0 0 5px 0;
  }

  input {
    width: 100%;
    height: 50px;
    padding: 0 0 0 10px;
    margin: 0 0 5px 0;
    border: 1px solid lightgrey;
    font-size: 32px;
    outline: 0;

    &:focus {
      outline-color: #fa4778;
    }
  }

  .input-error {
    display: none;
  }
  .error .input-error{
    display: block;
    color: red;
  }
</style>
