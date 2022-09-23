<template>
  <v-container class="max-lg footer">
    <v-row class="spacing4">
      <v-col
        class="pa-4"
        md="3"
        cols="12"
      >
        <div class="logo">
          <img
            :src="logo"
            alt="logo"
          >
          <h6 class="title">
            {{ brand.agency.projectName }}
          </h6>
        </div>
        <p class="footer-desc pb-2">
          {{ $t('agencyLanding.footer_paragraph') }}
        </p>
        <p class="body-2" v-if="isDesktop">
          &copy;&nbsp;
          {{ brand.agency.footerText }}
        </p>
      </v-col>
      <v-col
        md="9"
        cols="12"
      >
      <v-row style="margin-top: 4rem">
        <v-col cols="12" md="3">
          <a href="https://www.facebook.com/profile.php?id=100070831746520" target="_blank" style="text-decoration: none;">
            <img src="/images/images/alica-social-fb.png" alt="" width="80%">
          </a>
        </v-col>
        <v-col cols="12" md="3">
          <a href="https://twitter.com/alicasd_log" target="_blank" style="text-decoration: none;">
            <img src="/images/images/alica-social-tw.png" alt="" width="80%">
          </a>
        </v-col>
        <v-col cols="12" md="3">
          <a href="https://www.instagram.com/alicasd.log/" target="_blank" style="text-decoration: none;">
            <img src="/images/images/alica-social-ig.png" alt="" width="80%">
          </a>
        </v-col>
        <v-col cols="12" md="3" style="margin-top: -0.6rem;">
          <a href="https://walink.co/3470fd" target="_blank" style="text-decoration: none;">
            <img src="/images/images/alica-social-wh.png" alt="" width="80%">
          </a>
        </v-col>
      </v-row>
      </v-col>
    </v-row>
    <p class="body-2 text-center" v-if="isMobile">
      &copy;&nbsp;
      {{ brand.agency.footerText }}
    </p>
  </v-container>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import logo from '~/static/images/alica.png'
import brand from '~/static/text/brand'

export default {
  data: () => ({
    logo: logo,
    brand: brand,
    lang: 'en',
    footers: [
      {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
        link: ['#team', '#history', '#contact-us', '#locations']
      },
      {
        title: 'Resources',
        description: [
          'Resource',
          'Resource name',
          'Another resource',
          'Final resource'
        ],
        link: [
          '#resource',
          '#resource-name',
          '#another-resource',
          '#final-resource'
        ]
      },
      {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
        link: ['#privacy-policy', '#terms-of-use']
      }
    ]
  }),
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    langList: function() {
      const list = []
      this.$i18n.locales.map(item => {
        list.push({ text: this.$t('common.' + item.code), value: item.code })
      })
      return list
    }
  },
  mounted() {
    this.lang = this.$i18n.locale
  },
  methods: {
    switchLang: function(val) {
      this.$i18n.setLocale(val)
    }
  }
}
</script>
