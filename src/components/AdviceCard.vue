<script setup>
import PatternDividerD from './icons/PatternDividerD.vue';
import IconDice from './icons/IconDice.vue';
import PatternDividerM from './icons/PatternDividerM.vue';
import { onBeforeMount } from 'vue'
import { useGetQuote } from '../stores/getQuote'

const quote = useGetQuote()

onBeforeMount(() => {
  quote.getQuote()
})
</script>

<template>
  <div class="wrapper">
    <div class="__card">
      <p class="advice__no">advice #{{quote.id}}</p>
      <p class="advice__text">
        "{{ quote.quote }}"
      </p>
      <PatternDividerD />
      <PatternDividerM />
      <div class="dice__div" @click="quote.getQuote">
        <IconDice />
      </div>
    </div>
  </div>
</template>