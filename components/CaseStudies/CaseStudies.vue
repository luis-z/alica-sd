<template>
  <fragment>
    <vue-easy-lightbox
      v-if="loaded"
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    />
    <div class="root">
      <v-container :class="{ 'fixed-width': mdUp }">
        <u-animate-container>
          <v-row class="spacing6">
            <v-col cols="12" md="3" class="pa-6">
              <u-animate
                :offset="-100"
                name="fadeInLeftShort"
                delay="0.2s"
                duration="0.3s"
              >
                <div class="side-filter">
                  <h4 class="title-primary">
                    Casos de Éxito
                  </h4>
                  <v-list class="nav">
                    <v-list-item-group v-model="item" color="primary">
                      <v-list-item
                        v-for="(item, index) in categories"          
                        :key="index"
                        class="filter"
                      >
                        <v-list-item-title>
                          {{ item }}
                        </v-list-item-title>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </div>
              </u-animate>
            </v-col>
            <v-col cols="12" md="9" class="pa-6">
              <div class="massonry">
                <v-row>
                  <v-col cols="12" sm="3" class="pa-3">
                    <u-animate
                      name="fadeInUpShort"
                      delay="0.2s"
                      duration="0.4s"
                    >
                      <div
                        v-for="(item, index) in smallCase"
                        :key="index"
                      >
                        <case-card
                          :bg="item.bg || ''"
                          :logo="item.logo"
                          :title="item.title"
                          :desc="item.desc"
                          :size="item.size"
                          :simple="item.simple || false"
                          :show-img="() => showImg(index)"
                        />
                      </div>
                    </u-animate>
                  </v-col>
                  <v-col cols="12" sm="4" class="pa-3">
                    <u-animate
                      name="fadeInUpShort"
                      delay="0.4s"
                      duration="0.4s"
                    >
                      <div
                        v-for="(item, index) in mediumCase"
                        :key="index"
                      >
                        <case-card
                          :bg="item.bg || ''"
                          :logo="item.logo"
                          :title="item.title"
                          :desc="item.desc"
                          :size="item.size"
                          :simple="item.simple || false"
                          :show-img="() => showImg(index)"
                        />
                      </div>
                    </u-animate>
                  </v-col>
                  <v-col cols="12" sm="5" class="pa-3">
                    <u-animate
                      :offset="-100"
                      name="fadeInUpShort"
                      delay="0.6s"
                      duration="0.4s"
                    >
                      <div
                        v-for="(item, index) in bigCase"
                        :key="index"
                      >
                        <case-card
                          :bg="item.bg || ''"
                          :logo="item.logo"
                          :title="item.title"
                          :desc="item.desc"
                          :size="item.size"
                          :simple="item.simple || false"
                          :show-img="() => showImg(index)"
                        />
                      </div>
                    </u-animate>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </u-animate-container>
      </v-container>
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
@import './case-study-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
// import imgApi from '~/static/images/imgAPI'
import CaseCard from '../Cards/Case'

export default {
  components: {
    CaseCard
  },
  data() {
    return {
      visible: false,
      index: 0,
      loaded: false,
      item: 0,
      categories: [
        // 'corporate',
        // 'advertising',
        // 'marketing',
        // 'government',
        // 'creative'
      ],
      caseData: [
        {
          bg: '/images/agenciamiento-aduanas.jpeg',
          logo: '/images/alica.png',
          title: '',
          desc: '',
          size: 'small'
        },
        {
          bg: '/images/puerta-puerta.jpeg',
          logo: '/images/alica.png',
          title: '',
          desc: '',
          size: 'small',
          simple: true
        },
        {
          bg: '/images/importacion.jpeg',
          logo: '/images/alica.png',
          title: '',
          desc: '',
          size: 'medium'
        },
        {
          bg: '/images/seguro.jpeg',
          logo: '/images/alica.png',
          title: '',
          desc: '',
          size: 'medium'
        },
        {
          bg: '/images/radioactive.jpeg',
          logo: '/images/alica.png',
          title: '',
          desc: '',
          size: 'big'
        },
        {
          bg: '/images/radioactive2.jpeg',
          logo: '/images/alica.png',
          title: '',
          desc: '',
          size: 'big'
        },
        {
          bg: '/images/radioactive3.jpeg',
          logo: '/images/alica.png',
          title: '',
          desc: '',
          size: 'big'
        },
        {
          bg: '/images/flete-terrestre.jpeg',
          logo: '/images/alica.png',
          title: '',
          desc: '',
          size: 'medium'
        }
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  },
  computed: {
    smallCase() {
      return this.caseData.filter(i => i.size === 'small')
    },
    mediumCase() {
      return this.caseData.filter(i => i.size === 'medium')
    },
    bigCase() {
      return this.caseData.filter(i => i.size === 'big')
    },
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    },
    imgs() {
      const arr = []
      this.caseData.map(item => {
        arr.push(item.bg || item.logo)
      })
      return arr
    }
  }
}
</script>
