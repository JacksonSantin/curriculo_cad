<template>
  <v-row class="d-flex justify-end mr-3">
    <v-btn @click="controller.alteraArray('idiomas').adiciona()" icon>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-row>

  <v-card
    v-for="(item, index) in controller.curriculoModel.value.idiomas"
    :key="index"
    class="my-6"
    outlined
  >
    <v-sheet class="v-sheet--offset mx-auto">
      <div class="mx-2">Idioma {{ index + 1 }}</div>
    </v-sheet>

    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="Idioma"
            variant="underlined"
            density="compact"
            v-model="item.idioma"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-select
            label="Nível de conhecimento"
            item-value="value"
            item-title="text"
            variant="underlined"
            density="compact"
            :items="controller.comboNivelIdioma.value"
            v-model="item.nivel"
          ></v-select>
        </v-col>
        <v-btn
          v-if="controller.curriculoModel.value.idiomas.length > 1"
          @click="controller.alteraArray('idiomas', index).remove()"
          icon
        >
          <v-icon color="red">mdi-close</v-icon>
        </v-btn>
      </v-row>
    </v-card-text>
  </v-card>
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

