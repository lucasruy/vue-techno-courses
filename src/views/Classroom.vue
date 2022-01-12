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
      <div v-if="content">
        <h2>{{content.name}}</h2>
        <div class="video">
          <iframe
            :src="`https://www.youtube.com/embed/${content.youtube}`"
            title="YouTube video player"
            frameborder="0"
            height="315"
            width="560"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import getPageData from '@/mixins/getPageData.js'

export default {
  name: 'Classroom',
  props: ['classroom'],
  mixins: [getPageData],
  created() {
    this.getPageData(`/classroom/${this.classroom}`)
  },
  beforeRouteUpdate(to, from, next) {
    this.getPageData(`/classroom/${to.params.classroom}`)
    next()
  }
}
</script>

<style scoped>
.video {
  position: relative;
  padding-bottom: 56.25%;
}

.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
