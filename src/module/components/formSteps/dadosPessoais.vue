<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-text-field label="Teste" dense v-model="teste"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="Teste01" dense v-model="teste01"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style>
</style>