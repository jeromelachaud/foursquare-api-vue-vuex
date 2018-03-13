<template>
  <div>
    <text-input
      :value="place"
      @input="input"
      :placeholder="''"
      :label="'Search for a place'">
    </text-input>
    <btn
      @click="submit">
    </btn>
    <div class="results">
      <h2 v-show="searchQuery !== ''">your searched for <i>{{searchQuery}}</i></h2>
      <loader v-if="appState === 'isLoading'"></loader>
      <ul>
        <venue v-for="(venue, i) in venues" :key="i" :venue="venue.venue"></venue>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Btn from '@/components/Btn'
import Venue from '@/components/Venue'
import Loader from '@/components/Loader'
import TextInput from '@/components/TextInput'

export default {
  name: 'Search',
  components: {
    Btn,
    Venue,
    Loader,
    TextInput,
  },
  data: () => ({
    place: '',
  }),
  computed: {
    ...mapState([
      'venues',
      'searchQuery',
      'appState',
    ]),
  },
  methods: {
    input(value) {
      this.place = value
    },
    submit() {
      if (this.place === '') this.$store.dispatch('setErrorState')
      this.$store.dispatch('setSearchQuery', this.place)
      this.$store.dispatch('fetchVenues', this.place)
      this.placeholder = ''
      this.place = ''
    },
  },
  created() {
    console.log(this.appState)
  },
}
</script>

<style scoped>
.results {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
