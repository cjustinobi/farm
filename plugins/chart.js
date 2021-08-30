import Vue from 'vue'
import { Doughnut, Bar, Pie } from 'vue-chartjs'

Vue.component('DoughnutChart', {
  extends: Doughnut,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})

Vue.component('BarChart', {
  extends: Bar,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})

Vue.component('PieChart', {
  extends: Pie,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})
