import { defineStore } from "pinia"

export const useGetQuote = defineStore({
  id: "getQuote",
  state: () => ({
    id: null,
    quoteData: null,
    quote: null
  }),

  actions: {
    async getQuote() {
      try {
        this.quoteData = await fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        this.id = this.quoteData.slip.id
        this.quote = this.quoteData.slip.advice
      } catch (error) {
        // console.log(error)
      }
    }
  }
})