<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-text-field label="teste04" dense v-model="teste04"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="teste05" dense v-model="teste05"></v-text-field>
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