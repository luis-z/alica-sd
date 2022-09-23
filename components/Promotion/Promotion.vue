<template>
  <div class="root">
    <div class="slider-wrap">
      <transition-group
        :name="transition"
        tag="div"
        class="slider-wrap"
      >
        <div
          v-for="number in [currentImg]"
          :key="number"
          :class="[number % 2 ? 'odd' : 'even']"
          class="item"
        >
          <v-row>
            <v-col lg="4" cols="12" class="hidden-md-and-down">
              &nbsp;
            </v-col>
            <v-col lg="7" cols="12">
              <hidden point="mdDown">
                <section>
                  <div class="img-wrap">
                    <div class="decoration">
                      <svg>
                        <use xlink:href="/images/crypto/deco-promo.svg#main" />
                      </svg>
                    </div>
                    <figure class="image">
                      <img
                        :src="content[Math.abs(currentImg) % content.length].image"
                        :alt="content[Math.abs(currentImg) % content.length].title"
                      />
                    </figure>
                  </div>
                </section>
              </hidden>
              <v-card class="paper">
                <span
                  class="swipper"
                  v-touch:swipe.left="swipeLeft"
                  v-touch:swipe.right="swipeRight"
                />
                <h1>
                  <v-btn text>
                    {{ content[Math.abs(currentImg) % content.length].title }}
                  </v-btn>
                </h1>
                <p v-html="content[Math.abs(currentImg) % content.length].desc"></p>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </transition-group>
      <a
        href="javascript:void(0)"
        class="prev"
        @click="prev"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </a>
      <a
        href="javascript:void(0)"
        class="next"
        @click="next"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './promotion-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Hidden from '../Hidden'

const sliderData = [
  {
    image: imgAPI.crypto[0],
    title: 'Misión',
    desc:
      'Siendo una empresa de transporte nacional e internacional, nuestra misión es proveer soluciones logísticas altamente especializadas a todos nuestros clientes importadores y exportadores del sector industrial y empresarial.'
  },
  {
    image: imgAPI.crypto[1],
    title: 'Visión ',
    desc:
      'Ser considerada como compañía de referencia en nuestro campo, convirtiéndonos en el mejor aliado estratégico para nuestros clientes.'
  },
  {
    image: imgAPI.crypto[2],
    title: 'Valores',
    desc: `
      <ul>
        <li>Orientación al cliente: Comprender las necesidades y superar las expectativas específicas de cada cliente, transformándolas en soluciones satisfactorias.</li>
        <li>Innovación: desarrollando soluciones creativas y pioneras mejorando continuamente.</li>
        <li>Compromiso de resultados: cuidando cada acción y rentabilizarla para las partes interesadas.</li>
        <li>Responsabilidad Social Corporativa: respaldar y promover todas aquellas acciones que impliquen mejora social.</li>
      </ul>
    `
  }
]

export default {
  components: {
    Hidden
  },
  data() {
    return {
      content: sliderData,
      transition: '',
      autoplay: null,
      currentImg: 0
    }
  },
  mounted() {
    this.playSlider()
  },
  beforeDestroy() {
    clearInterval(this.autoplay)
  },
  methods: {
    playSlider() {
      this.autoplay = setInterval(() => {
        this.currentImg = this.currentImg + 1
        this.transition = 'slide-right'
      }, 150000)
    },
    manualPlay() {
      clearInterval(this.autoplay)
      setTimeout(() => {
        this.playSlider()
      }, 1)
    },
    next() {
      this.manualPlay()
      this.currentImg += 1
      this.transition = 'slide-right'
    },
    prev() {
      this.manualPlay()
      this.currentImg -= 1
      this.transition = 'slide-left'
    },
    swipeLeft() {
      this.next()
    },
    swipeRight() {
      this.prev()
    }
  }
}
</script>
