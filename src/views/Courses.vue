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
        </div>
        <ul class="courses__list">
          <li v-for="course in content.courses" :key="course.id">
              <h2>
                <router-link
                  :to="{name: 'course', params: {course: course.id}}"
                >
                  {{course.name}} - {{course.totalClasses}} aulas | {{course.hours}} horas
                </router-link>
              </h2>
              <p>{{course.description}}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import getPageData from '@/mixins/getPageData.js'

export default {
  name: 'Courses',
  mixins: [getPageData],
  created() {
    this.getPageData('/courses')
  }
}
</script>

<style scoped>
.courses__list li {
  display: block;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #FFF;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}
</style>