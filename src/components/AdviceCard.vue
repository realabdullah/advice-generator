<script setup>
import PatternDividerD from './icons/PatternDividerD.vue';
import IconDice from './icons/IconDice.vue';
import PatternDividerM from './icons/PatternDividerM.vue';
import { storeToRefs } from 'pinia'
import { useGetQuote } from '../stores/getQuote'

const { quote } = storeToRefs(useGetQuote())
const { getQuote } = useGetQuote()

getQuote()

</script>

<template>
  <div class="wrapper">
    <div class="__card">
      <p class="advice__no">advice #{{quote.slip.id}}</p>
      <p class="advice__text">
        "{{ quote.slip.advice }}"
      </p>
      <PatternDividerD />
      <PatternDividerM />
      <div class="dice__div" @click="getQuote">
        <IconDice />
      </div>
    </div>
  </div>
</template>