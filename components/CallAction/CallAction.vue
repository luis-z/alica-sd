<template>
  <fragment>
      <!-- <svg
        fill="cccccc"
        width="845px"
        height="1099px"
        class="background base"
      >
        <use xlink:href="/images/decoration/square-deco-primary.svg#square" />
      </svg>
      <svg
        fill="cccccc"
        width="845px"
        height="1099px"
        class="background front"
      >
        <use xlink:href="/images/decoration/square-deco-primary.svg#square" />
      </svg> -->
      <v-container :class="{ 'fixed-width': mdUp }">
        <div class="root">
          <v-card class="paper">
            <v-row align="center" no-gutters>
              <v-col cols="12" md="9">
                <h4 class="display-1 pb-2">
                  {{ $t('agencyLanding.cta_title') }}
                </h4>
                <p>
                  {{ $t('agencyLanding.cta_subtitle') }}
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="3">
                <a href="https://www.facebook.com/profile.php?id=100070831746520" target="_blank" style="text-decoration: none;">
                  <img src="/images/alica-social-fb.png" alt="" width="80%">
                </a>
              </v-col>
              <v-col cols="12" md="3">
                <a href="https://twitter.com/alicasd_log" target="_blank" style="text-decoration: none;">
                  <img src="/images/alica-social-tw.png" alt="" width="80%">
                </a>
              </v-col>
              <v-col cols="12" md="3">
                <a href="https://www.instagram.com/alicasd.log/" target="_blank" style="text-decoration: none;">
                  <img src="/images/alica-social-ig.png" alt="" width="80%">
                </a>
              </v-col>
              <v-col cols="12" md="3" style="margin-top: -1rem;">
                <a href="https://walink.co/3470fd" target="_blank" style="text-decoration: none;">
                  <img src="/images/alica-social-wh.png" alt="" width="80%">
                </a>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-container>
    </fragment>
</template>

<style lang="scss" scoped>
@import './action-style.scss';
</style>

<script>
export default {
  computed: {
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    }
  }
}
</script>
