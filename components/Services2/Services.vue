<template>
  <div class="root">
    <!-- <v-container>
      <title-main
        :head="$t('architectLanding.services_title')"
        :desc="$t('architectLanding.services_desc')"
      />
    </v-container> -->
    <v-container class="fixed-width">
      <v-row class="spacing8 grid">
        <v-col md="4" cols="12">
          <div class="figure">
            <img src="/images/goal.png" alt="" width="80%">
          </div>
          <h5 class="use-text-subtitle2">
            Misión
          </h5>
          <p class="use-text-paragraph">
            Siendo una empresa de transporte nacional e internacional, nuestra
misión es proveer soluciones logísticas altamente especializadas a
todos nuestros clientes importadores y exportadores del sector
industrial y empresarial.
          </p>
        </v-col>
        <v-col md="4" cols="12">
          <div class="figure">
            <img src="/images/idea.png" alt="" width="50%">
          </div>
          <h5 class="use-text-subtitle2">
            Visión
          </h5>
          <p class="use-text-paragraph">
            Ser considerada como compañía de referencia en nuestro campo,
convirtiéndonos en el mejor aliado estratégico para nuestros clientes.
          </p>
        </v-col>
        <v-col md="4" cols="12">
          <div class="figure">
            <img src="/images/value.png" alt="" width="80%">
          </div>
          <h5 class="use-text-subtitle2">
            Valores
          </h5>
          <p class="use-text-paragraph">
            <ul>
              <li>Orientación al cliente: Comprender las necesidades y superar las
  expectativas específicas de cada cliente, transformándolas en
  soluciones satisfactorias.</li>
              <li>Innovación: desarrollando soluciones creativas y pioneras mejorando
  continuamente.</li>
              <li>Compromiso de resultados: cuidando cada acción y rentabilizarla
  para las partes interesadas.</li>
              <li>Responsabilidad Social Corporativa: respaldar y promover todas
  aquellas acciones que impliquen mejora social.</li>
            </ul>
          </p>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
</style>

<script>
// import Title from '../Title'

export default {
  components: {
    // 'title-main': Title
  }
}
</script>
