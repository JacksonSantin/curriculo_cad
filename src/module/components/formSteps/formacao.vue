<template>
  <v-row class="d-flex justify-end mr-3">
    <v-btn @click="controller.alteraArray('formacao').adiciona()" icon>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-row>

  <v-card
    v-for="(item, index) in controller.curriculoModel.value.formacao"
    :key="`${item.nomeCurso}_${index}`"
    class="my-6"
    outlined
  >
    <v-sheet class="v-sheet--offset mx-auto">
      <div class="mx-2">Formação/Curso {{ index + 1 }}</div>
    </v-sheet>

    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="Graduação"
            variant="underlined"
            density="compact"
            v-model="item.graduacao"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Nome curso"
            variant="underlined"
            density="compact"
            v-model="item.nomeCurso"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Instituição"
            variant="underlined"
            density="compact"
            v-model="item.instituicao"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Cidade"
            variant="underlined"
            density="compact"
            v-model="item.cidade"
          ></v-text-field>
        </v-col>
        <v-btn
          v-if="controller.curriculoModel.value.formacao.length > 1"
          @click="controller.alteraArray('formacao', index).remove()"
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

