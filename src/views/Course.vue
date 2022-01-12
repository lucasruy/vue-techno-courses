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
          <h1>{{content.name}}</h1>
          <p>{{content.description}}</p>
          <h2>Aulas</h2>
          <ul class="classes">
            <li v-for="item in content.classes" :key="item.id">
              <router-link :to="{name: 'classroom', params: {classroom: item.id}}">
                {{item.name}}
              </router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import getPageData from '@/mixins/getPageData.js'

export default {
  name: 'Course',
  props: ['course'],
  mixins: [getPageData],
  created() {
    this.getPageData(`/course/${this.course}`)
  }
}
</script>

<style scoped>
.classes li a {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: #FFF;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.classes li a.router-link-active {
  background-color: #4B8;
  color: #FFF;
}
</style>