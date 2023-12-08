<template>
  <v-form ref="objetivo" lazy-validation>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-textarea
            label="Objetivo"
            density="compact"
            variant="underlined"
            rows="5"
            counter
            v-model="controller.curriculoModel.value.objetivo"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
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