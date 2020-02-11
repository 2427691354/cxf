<template>
  <div class="a">
    X1
    <ve-line :data="chartData" :settings="chartSettings" height="400px" width="500px"></ve-line>
  </div>
</template>
<style  scoped>
.a{
  margin-left: 100px;
}
</style>
<script>
import VeLine from "v-charts/lib/line";
import { findWeeklyPressureDataBySensorId } from "@/api/api";
export default {
  data() {
    return {
      data: [],
      chartData: {
        columns: ["stime", "parValue"],
        rows: []
      },
      chartSettings: {
        yAxisName: ["Mpa"],
      }
    };
  },
  components: { VeLine },
  created(){
    // var params = {
    //     deviceID: '7b142a79-caad-4b28-9d78-d61667490afb', //站点名称
    //     sensorID: 'X1'
    //   };
      findWeeklyPressureDataBySensorId().then(res => {
        
          // this.data = res.data.data;
          this.chartData.rows = res.data.data
        
      });
  }
};
</script>