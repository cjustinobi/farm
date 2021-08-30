export const actions = {
  async nuxtServerInit ({ commit }, { req }) {

    if (req.headers.cookie) {
      try {
        // check data user login with cookie
        const { data } = await this.$axios.$get('/auth/me')
        // server return the data is cookie valid loggedIn is true
        this.$auth.setUser(data)
      } catch (err) {
        // No valid cookie found
        console.log(err)
      }
    }
  }
}
