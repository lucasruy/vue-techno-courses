<template>
  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'PageLoading'
}
</script>

<style scoped>
.loading span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin: 4px;
  background-color: #4B8;
  animation: dots 600ms cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
}

.loading span:nth-child(1) {
  animation-delay: 100ms;
}

.loading span:nth-child(2) {
  animation-delay: 200ms;
}

.loading span:nth-child(3) {
  animation-delay: 300ms;
}

@keyframes dots {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 30px, 0);
  }
}
</style>