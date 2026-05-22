<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">

      <a class="navbar-brand" href="#">Navbar</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">

        <ul class="navbar-nav">

          <li class="nav-item">
            <router-link :to="{ name: 'posts' }" class="navbar-brand">
              POSTS
            </router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'landing' }" class="navbar-brand">
              LANDING
            </router-link>
          </li>

        </ul>

      </div>
    </div>
  </nav>

</template>