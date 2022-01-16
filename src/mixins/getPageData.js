const BASE_PATH = 'https://61e35843fbee6800175eb002.mockapi.io/api/v1'

export default {
  data() {
    return {
      loading: true,
      error: false,
      content: null
    }
  },
  methods: {
    getPageData(url) {
      this.loading = true
      this.error = false
      this.content = null

      fetch(`${BASE_PATH}${url}`)
        .then(response => response.json())
        .then(response => {
          setTimeout(() => {
            this.content = response
            this.loading = false
          }, 1000)
        })
        .catch((err) => {
          console.error(err)
          this.loading = false
          this.error = true
        })
    }
  },
}
