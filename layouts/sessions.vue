<template>
  <div>
    <section class="hero is-primary is-small">
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
          Sessions
        </h2>
      </div>
    </div>
  </section>
  
  <nuxt />
</div>
</template>
