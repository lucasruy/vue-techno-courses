<template>
  <nav class="header">
    <div class="header__container">
      <div class="header__logo">
        <router-link to="/">Techno</router-link>
      </div>
      <ul class="header__links">
        <li class="header__link">
          <router-link to="/courses">Cursos</router-link>
        </li>
        <li class="header__link">
          <router-link to="/contact">Contato</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.header {
  background-color: #234;
}

.header a {
  color: #FFF;
}

.header a.router-link-exact-active {
  color: #4B8;
}

.header__container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-content: space-between;
  padding: 20px;
}

.header__logo {
  color: #FFF;
  flex: 1;
  font-size: 1.2rem;
}

.header__links .header__link{
  display: inline-block;
}

.header__link a {
  padding: 0 10px;
  margin-left: 10px;
}
</style>