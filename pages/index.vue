<template>
  <div class="root">
    <app-mv />
    <app-policy v-waypoint="waypoints" />
    <app-news v-waypoint="waypoints" :news="news" />
    <app-products v-waypoint="waypoints" :products="products" />
    <app-about v-waypoint="waypoints" />
  </div>
</template>

<script>
  import appMv from '~/components/app-mv'
  import appPolicy from '~/components/app-policy'
  import appNews from '~/components/app-news'
  import appProducts from '~/components/app-products'
  import appAbout from '~/components/app-about'

  export default {
    components: {
      appMv,
      appPolicy,
      appNews,
      appProducts,
      appAbout,
    },
    data () {
      return {
        waypoints: {
          options: {
            root: null,
            rootMargin: '-60% 0px',
            thresholds: [0]
          },
          active: true,
          callback: this.onWaypoint
        }
      }
    },
    methods: {
      onWaypoint ({el, going}) {
        if (going === this.$waypointMap.GOING_IN) {
          console.log(el.id);
        }
      }
    },
    computed: {
      news () {
        return this.$store.state.news
      },
      products () {
        return this.$store.state.products
      }
    },
    async fetch ({store}) {
      if (!store.state.news) {
        await store.dispatch('fetchNews')
      }
      if (!store.state.products) {
        await store.dispatch('fetchProducts')
      }
    }
  }
</script>

<style scoped>
</style>

