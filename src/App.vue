<template>
  <v-app class="inline-width">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style scoped>
/* .inline-width{
  margin-inline: 3%;
} */
</style>
