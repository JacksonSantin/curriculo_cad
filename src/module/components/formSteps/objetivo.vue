<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-text-field label="teste06" dense v-model="teste06"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="teste07" dense v-model="teste07"></v-text-field>
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