<template>
  <div>
    <h1>Analytics</h1>
    <a-row :gutter="6">
      <a-col :lg="{ span: 6, offset: 3 }">
        <DoughnutChart :data="chartData" :options="options" />
      </a-col>
      <a-col :lg="{ span: 6 }">
        <BarChart :data="chartData" :options="options" />
      </a-col>
      <a-col :lg="{ span: 6 }">
        <PieChart :data="chartData" :options="options" />
      </a-col>
    </a-row>
    <h1 style="margin-top: 30px">Analytics</h1>
    <a-row :gutter="6" style="margin-top: 100px">
      <a-col :lg="{ span: 6, offset: 3 }">
        <a-statistic title="Active Users" :value="760" style="margin-right: 50px" />
      </a-col>
      <a-col :lg="{ span: 6 }">
        <a-statistic title="Active Vendors" :value="128" style="margin-right: 50px" />
      </a-col>
      <a-col :lg="{ span: 6 }">
        <a-statistic title="Inactive Vendors" :value="28" style="margin-right: 50px" />
      </a-col>
    </a-row>


  </div>
</template>

<script>
  export default {
    layout: 'dashboard',
    name: 'home',
    data() {
      return {
        chartData: {
          labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
          datasets: [{
            label: 'Registered Users',
            data: [45, 55, 48, 35, 70],
            backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
          }]
        },
        options: {
          responsive: true,
        },
      };
    }
  }
</script>

<style scoped>

</style>
