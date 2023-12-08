<template>
  <v-stepper
    prev-text="Anterior"
    next-text="Próximo"
    elevation="5"
    :items="controller.items.value"
  >
    <template v-slot:[`item.${1}`]>
      <v-card title="Dados Pessoais" flat>
        <dados-pessoais :controller="controller" />
      </v-card>
    </template>
    <template v-slot:[`item.${2}`]>
      <v-card title="Objetivo" flat>
        <objetivo :controller="controller" />
      </v-card>
    </template>
    <template v-slot:[`item.${3}`]>
      <v-card title="Formação" flat>
        <formacao :controller="controller" />
      </v-card>
    </template>
    <template v-slot:[`item.${4}`]>
      <v-card title="Experiência Profissional" flat>
        <experiencia :controller="controller" />
      </v-card>
    </template>
    <template v-slot:[`item.${5}`]>
      <v-card title="Atuação e Habilidades" flat>
        <atuacao :controller="controller" />
      </v-card>
    </template>
    <template v-slot:[`item.${6}`]>
      <v-card title="Gerar Currículo" flat>
        <gerar-curriculo :controller="controller" />
      </v-card>
    </template>
  </v-stepper>
</template>

<script setup>
import DadosPessoais from "./formSteps/dadosPessoais.vue";
import Objetivo from "./formSteps/objetivo.vue";
import Formacao from "./formSteps/formacao.vue";
import Experiencia from "./formSteps/experiencia.vue";
import Atuacao from "./formSteps/atuacao.vue";
import GerarCurriculo from "./formSteps/gerarCurriculo.vue";

defineProps({
  controller: { type: Object, required: true },
});
</script>

<style>
</style>