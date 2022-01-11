<template>
  <div>
    <div v-if="loading">
      <PageLoading/>
    </div>
    <transition>
      <div v-if="error">
        <h1>Ops... Houve um problema, volte mais tarde.</h1>
      </div>
    </transition>
    <transition>
      <div v-if="content" class="content">
        <div>
          <h1>{{content.title}}</h1>
          <p>{{content.description}}</p>
          <router-link
            class="button"
            tag="button"
            to="/courses"
          >
            Cursos
          </router-link>
          <router-link
            class="button"
            tag="button"
            to="/contact"
          >
            Contato
          </router-link>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="item in content.assessments" :key="item.nome">
                <p>{{item.nome}}</p>
                <p>{{item.description}}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/learn.png" alt="Aprenda Web Design" />
      </div>
    </transition>
  </div>
</template>

<script>
import getPageData from '@/mixins/getPageData.js'

export default {
  name: 'Home',
  mixins: [getPageData],
  created() {
    this.getPageData('/home')
  }
}
</script>

<style scoped>
.button {
  border: none;
  border-radius: 5px;
  background-color: #4B8;
  color: #FFF;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  margin: 10px 10px 30px 0;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  transition: all 300ms linear;
}

.button:hover {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
}
</style>