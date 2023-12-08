<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-text-field label="teste08" dense v-model="teste08"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="teste09" dense v-model="teste09"></v-text-field>
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