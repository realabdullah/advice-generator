import { defineStore } from "pinia"

export const useGetQuote = defineStore({
  id: "getQuote",
  state: () => ({
    quote: []
  }),

  actions: {
    async getQuote() {
      try {
        this.quote = await fetch("	https://api.adviceslip.com/advice")
        .then((response) => response.json())
      } catch (error) {
        // console.log(error)
      }
    }
  }
})