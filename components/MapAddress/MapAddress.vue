<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col cols="12" md="1" class="pa-6" v-if="isDesktop" />
        <v-col cols="12" lg="5" md="6" class="pa-6">
          <title-deco :text="$t('agencyLanding.office_title')" />
          <div class="block">
            <u-animate-container>
              <u-animate
                :offset="-50"
                name="fadeInLeftShort"
                delay="0.5s"
                duration="0.3s"
              >
                <v-card class="paper">
                  <h6 class="title">
                    {{ $t('agencyLanding.office_head') }}
                  </h6>
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-icon class="icon">mdi-phone</v-icon>
                      +58 212 2651871 / 1872 / 2673931
                      <br>
                      <span style="margin-left: 2.3rem">
                        +58 424 1399709
                      </span>
                    </v-col>
                    <v-col cols="12" sm="12">
                      <v-icon class="icon">mdi-email</v-icon>
                      info@alica.com.ve
                      <br>
                      <span style="margin-left: 2.3rem">
                        d.rangel@alica.com.ve
                      </span>
                    </v-col>
                    <v-col cols="12" sm="12">
                      <v-icon class="icon">mdi-map-marker</v-icon>
                      Av. Francisco de Miranda, Multicentro
                      Empresarial del Este, Torre Miranda,
                      Nucleo A, piso 5, Ofc. A-52. Chacao
                    </v-col>
                  </v-row>
                </v-card>
              </u-animate>
            </u-animate-container>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="pa-6">
          <v-card class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.403440692072!2d-66.85520229841786!3d10.490408804645114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a595859fbfec3%3A0x59894936d2e9473!2sMulticentro%20Empresarial%20del%20Este!5e0!3m2!1ses-419!2sve!4v1663617701291!5m2!1ses-419!2sve" width="600" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './map-address-style.scss';
</style>

<script>
import TitleDeco from '../Title/WithDecoration'

export default {
  components: {
    TitleDeco
  },
  data() {
    return {
      currentLocation: {},
      locations: [
        {
          lat: 44.933076,
          lng: 15.629058
        }
      ],
      clusterStyle: [
        {
          url:
            'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png',
          width: 56,
          height: 56,
          textColor: '#fff'
        }
      ]
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
