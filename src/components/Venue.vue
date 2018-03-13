<template>
  <li class="venue">
    <span class="venue__name">
      {{venue.name}}
    </span>
    <div class="venue__location">
      {{venue.location.address}}
      {{venue.location.postalCode}}
    </div>
  </li>
</template>

<script>
export default {
  name: 'Venue',
  props: [
    'venue',
  ],
}
</script>

<style lang="scss">
  .venue {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 80px;
    margin: 12px;
    border-radius: 2px;
    box-shadow: -1px 4px 6px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    text-align: center;
    line-height: 1.25;
    font-size: 14px;

    &__name {
      font-weight: 800;
    }

    &__url{
      font-size: 12px;
      color: #808080;
    }
  }
</style>
