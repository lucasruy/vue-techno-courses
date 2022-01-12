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
        <h1>{{content.title}}</h1>
        <p>{{content.description}}</p>
        <ul>
          <li>
            <b>Email:</b>
            {{content.details.email}}
          </li>
          <li>
            <b>Telefone:</b>
            {{content.details.phone}}
          </li>
          <li>
            <b>Endereço:</b>
            {{content.details.address}}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import getPageData from '@/mixins/getPageData.js'

export default {
  name: 'Contact',
  mixins: [getPageData],
  created() {
    this.getPageData('/contact')
  }
}
</script>
