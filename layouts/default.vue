<template>
<div>
  <section class="hero is-primary is-medium">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a href="/" class="navbar-item">
              Nuxt + BULMA
              <!-- <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"> -->
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Nuxt + BULMA
        </h1>
        <h2 class="subtitle">
          Subtitle
        </h2>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs">
        <div class="container">
          <ul>
            <li class="is-active"><a href="/"><span class="icon is-small"><i class="fas fa-home"></i></span><span>Bulma</span></a></li>
            <li><a href="/card"><span class="icon is-small"><i class="fas fa-book"></i></span><span>Card</span></a></li>
            <li><a href="/tile"><span class="icon is-small"><i class="fas fa-puzzle-piece"></i></span><span>Tile</span></a></li>
            <li><a href="/tile2"><span class="icon is-small"><i class="fas fa-puzzle-piece"></i></span><span>Tile2</span></a></li>
            <li><a href="/articles"><span class="icon is-small"><i class="fas fa-puzzle-piece"></i></span><span>Articles</span></a></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>

  <nuxt />

  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
export default {
  methods: {
    onClick: function(){
      alert("click")
      router.push("/")
    }
  }
}
</script>

<style>
.container {
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
