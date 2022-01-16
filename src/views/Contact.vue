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
        <h1>Contato</h1>
        <p>Entre em contato que responderemos em até 24h.</p>
        <ul>
          <li>
            <b>Email:</b>
            contato@technocourses.com
          </li>
          <li>
            <b>Telefone:</b>
            21 9999-9999
          </li>
          <li>
            <b>Endereço:</b>
            Rua Ali Perto, Botafogo - RJ
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>
