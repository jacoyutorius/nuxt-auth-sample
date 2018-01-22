<template>
  <section class="section">
    <div class="container">
      <div>
        <h2 class="subtitle">
          pages/index
        </h2>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green">Documentation</a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey">GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
  components: {
  },
  data() {
    return { me: "aaa"}
  },
  asyncData(context) {
    return { name: "Hogehoge"}
  },
  middleware: [ "auth" ]
}
</script>

<style>
</style>
