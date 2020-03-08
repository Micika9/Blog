<template>
  <div id="fw">
    <Header />

    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '@/components/common/Header'

export default {
  components: {
    Header
  },

  mounted () {
    this.checkIfLoggedIn()
  },

  methods: {
    ...mapActions({
      checkIfLoggedIn: 'user/checkIfLoggedIn'
    })
  }
}
</script>
