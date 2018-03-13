<template lang="html">
  <button
    class="btn"
    @click="click"
    type="button"
    name="button">
    Search
  </button>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="css" scoped>
  .btn{
    width: 180px;
    height: 40px;
    background-color: white;
    border: 1px solid grey;
  }

</style>
