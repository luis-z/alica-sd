<template>
  <div class="market">
    <slick :options="slickOptions">
      <div
        v-for="(item, index) in marketList"
        :key="index"
        class="item"
      >
        <div class="coin" style="font-size: 20px; font-weight: 300">
          <!-- <v-avatar class="logo" height="20" width="20" min-width="20">
            <img :src="item.logo" :alt="item.name" /> 
          </v-avatar> -->
            TASA {{ item.name }} BCV:
            <span style="color: green;">
              {{ item.price }}
              {{ item.symbol }}
            </span>
        </div>
      </div>
    </slick>
  </div>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
const marketList = [
  {
    logo: '/images/crypto/btc.png',
    name: 'USD',
    price: 1020,
    status: 'up',
    percent: 8,
    color: 'Green',
    symbol: '$'
  },
  {
    logo: '/images/crypto/xrp.png',
    name: 'EUR',
    price: 0.003,
    status: 'down',
    percent: 3,
    color: 'Blue',
    symbol: '€'
  }
]

export default {
  components: {
    Slick: () => import('vue-slick')
  },
  data: () => ({
    marketList: marketList,
    loaded: false,
    slickOptions: {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 300,
      cssEase: 'linear',
      pauseOnHover: true
    }
  }),
  mounted() {
    this.getBcvRate()
    this.loaded = true
  },
  methods: {
    async getBcvRate() {
      // let url = 'https://s3.amazonaws.com/dolartoday/data.json'
      // const rates = await this.$axios.$get(url)
      let url = 'https://alica.com.ve/test.php'
      const rates = await this.$axios.$get(url)
      console.log(rates)

      this.marketList[0].price = parseFloat(
        rates.USD.replace(',', '.')
      ).toFixed(2)
      this.marketList[1].price = parseFloat(
        rates.EUR.replace(',', '.')
      ).toFixed(2)
    }
  }
}
</script>
