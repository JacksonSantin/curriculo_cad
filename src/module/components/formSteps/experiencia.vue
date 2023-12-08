<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-text-field label="teste02" dense v-model="teste02"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="teste03" dense v-model="teste03"></v-text-field>
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