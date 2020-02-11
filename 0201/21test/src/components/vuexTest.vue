<template>
  <div class="mainbody">
    <div v-if="fatherComponent == 'home'">
      <div class="title">
        <h1>点击下方按钮,一起来答题吧！</h1>
      </div>
      <br />
      <br />
      <br />
      <img src="../assets/down.png" alt width="100px" />
      <br />
      <br />
      <br />
      <br />
      <el-button type="primary" round class="btn" @click="startAnswer">开始</el-button>
    </div>

    <div v-if="fatherComponent == 'answer'" class="title">
      <div v-if="itemDetail.length > 0">
        <div class="topic">
        <div class="topic_num"><strong>{{itemDetail[itemNum-1].topic_num}}</strong></div>
        <div class="topic_name"><strong>{{itemDetail[itemNum-1].topic_name}}</strong></div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <ul>
          <li
            v-for="(item, index) in itemDetail[itemNum-1].topic_answer"
            :key="item"
            @click="choosed(index, item.topic_answer_id)"
            class="item"
          >
          <div class="item_word">{{item.answer_word}}</div>
          <div class="item_name" v-bind:class="{'has_choosed':choosedNum==index}">{{item.answer_name}}</div>
            <!-- <span v-bind:class="{'has_choosed':choosedNum==index}">{{item.answer_word}}{{item.answer_name}}</span> -->
          </li>
        </ul>
        <br>
        <el-button type="primary" round class="btn"  @click="nextItem" v-if="itemNum < itemDetail.length">下一题</el-button>
        <el-button type="primary" round class="btn"  @click="submitAnswer" v-else>提交</el-button>
   
      </div>
    </div>

    <div v-if="fatherComponent == 'outcome'" class="title">
      <br>
      <br>
      <br>
      <h1>答题结束！</h1>
      <br>
      <br>
      <br>
      <h1>本次得分 ： {{score}}</h1>
    </div>
  </div>
</template>


<style scoped>
.mainbody {
  width: 50%;
  height: 500px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 10px 10px 7px #919191;
  background: #fff;
  text-align: center;
}
h1 {
  color: #50b2f3;
}
.title {
  padding-top: 100px;
}

.btn {
  width: 200px;
  background-color: #90cef7;
  border: none;
  font-size: 22px;
  
}
.item{
    list-style-type: none;
    display: block;
    width: 280px;
    height: 30px;
    margin-top: 10px;
    
    margin-left: 230px;
    
}
.topic_num{
  width: 70px;
  height: 55px;
  float: left;
  margin-left: 150px;
  font-size: 40px;
  padding-top: 15px;
  border-radius: 15px;
  background-color: #90cef7;
  color: #fff;
}
.topic_name{
  width: 400px;
  height: 52px;
  float: left;
  font-size: 20px;
  padding-top: 18px;
}
topic{
  width: 600px;
  height: 70px;

  border: red 1px solid
}
.item_word{
  width: 30px;
  height: 26px;
  padding-top: 4px;
  float: left;
  font-size: 20px;
  border-radius: 15px 0px 0px 15px ;
  background-color: #B3C0F7;
  color: #fff;
 
}
.item_name{
  width: 200px;
  height: 26px;
  padding-top: 4px;
  float: left;
  margin-left: 30px;
  background-color: #ebebeb;
  border-radius: 0px 15px 15px 0px;
 
}
.has_choosed{
  background-color: #B3C0F7;
  color: #fff;
  
}
</style>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Background",
  data() {
    return {
      itemId: null, //题目ID
      choosedNum: null, //选中答案索引
      choosedId: null, //选中答案id
      score: 0, //分数
      rightAnswer: [3, 6, 12, 14, 19] //正确答案
    };
  },
  computed: mapGetters([
    //与vuex中的getters关联
    "itemNum",
    "fatherComponent",
    "itemDetail",
    "answerid"
  ]),

  methods: {
    ...mapActions([
      //与vuex中的actions关联
      "initializeData",
      "startAnswer",
      "addNum"
    ]),
    //点击下一题
    nextItem() {
      if (this.choosedNum !== null) {
        this.choosedNum = null;
        //保存答案, 题目索引加一，跳到下一题
        this.addNum(this.choosedId);
      } else {
        alert("您还没有选择答案哦");
      }
    },
    //选中的答案信息
    choosed(type, id) {
      this.choosedNum = type;
      this.choosedId = id;
    },
    //到达最后一题，交卷，跳转分数页面
    submitAnswer() {
      if (this.choosedNum !== null) {
        this.addNum(this.choosedId);
        this.answerid.forEach((item, index) => {
          if (item == this.rightAnswer[index]) {
            this.score += 20;
          }
        });
        this.initializeData();
      } else {
        alert("您还没有选择答案哦");
      }
    }
  }
};
</script>
