import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    itemNum: 1,
    fatherComponent: 'home',
    answerid: [], //答案id
    itemDetail: [{
      "topic_id": 20,
      "active_topic_id": 4,
      "type": "ONE",
      "topic_num": "1",
      "topic_name": "沼泽地被成为地球的什么?",
      "active_id": 1,
      
      "topic_answer": [{
        "topic_answer_id": 1,
        "topic_id": 20,
        "answer_name": "肺",
        "answer_word":"A",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 2,
        "topic_id": 20,
        "answer_name": "心脏",
        "answer_word":"B",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 3,
        "topic_id": 20,
        "answer_name": "肾",
        "answer_word":"C",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 4,
        "topic_id": 20,
        "answer_name": "眼睛",
        "answer_word":"D",
        "is_standard_answer": 1
      }]
    }, {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_num": "2",
      "topic_name": "每年的什么时候是森林日?",
      "active_id": 1,
    
      "topic_answer": [{
        "topic_answer_id": 5,
        "topic_id": 21,
        "answer_name": "3月25日",
        "answer_word":"A",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 6,
        "topic_id": 21,
        "answer_name": "3月21日",
        "answer_word":"B",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 7,
        "topic_id": 21,
        "answer_name": "5月12日",
        "answer_word":"C",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 8,
        "topic_id": 21,
        "answer_name": "2月11日",
        "answer_word":"D",
        "is_standard_answer": 0
      }]
    }, {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_num": "3",
      "topic_name": "下列哪个不是属于湿地?",
      "active_id": 1,
     
      "topic_answer": [{
        "topic_answer_id": 9,
        "topic_id": 21,
        "answer_name": "沼泽地",
        "answer_word":"A",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 10,
        "topic_id": 21,
        "answer_name": "泥炭地",
        "answer_word":"B",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 11,
        "topic_id": 21,
        "answer_name": "盐沼",
        "answer_word":"C",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 12,
        "topic_id": 21,
        "answer_name": "池塘",
        "answer_word":"D",
        "is_standard_answer": 0
      }]
    }, {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_num": "4",
      "topic_name": "下列哪个选项不属于全球三大生态系统?",
      "active_id": 1,
     
      "topic_answer": [{
        "topic_answer_id": 13,
        "topic_id": 21,
        "answer_name": "湿地",
        "answer_word":"A",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 14,
        "topic_id": 21,
        "answer_name": "河流",
        "answer_word":"B",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 15,
        "topic_id": 21,
        "answer_name": "森林",
        "answer_word":"C",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 16,
        "topic_id": 21,
        "answer_name": "海洋",
        "answer_word":"D",
        "is_standard_answer": 0
      }]
    }, {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_num": "5",
      "topic_name": "下列含什么的物质会破坏臭氧层?",
      "active_id": 1,
      "topic_answer": [{
        "topic_answer_id": 17,
        "topic_id": 21,
        "answer_name": "铁、锌",
        "answer_word":"A",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 18,
        "topic_id": 21,
        "answer_name": "氢、氧",
        "answer_word":"B",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 19,
        "topic_id": 21,
        "answer_name": "氯、溴",
        "answer_word":"C",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 20,
        "topic_id": 21,
        "answer_name": "氟",
        "answer_word":"D",
        "is_standard_answer": 0
      }]
    }],

  },
  getters: {
    itemNum(state) {
      return state.itemNum;
    },
    fatherComponent(state) {
      return state.fatherComponent;
    },
    itemDetail(state) {
      return state.itemDetail;
    },
    answerid(state) {
      return state.answerid;
    },
    
  },
  mutations: {
    INITIALIZE_DATA (state) {
      state.itemNum = 1;
      state.fatherComponent = 'outcome';
    },
    ADD_ITEM(state){
      state.itemNum += 1
    },
    START_ANSWER(state) {
      state.fatherComponent = 'answer';
      state.answerid = [];
    },
    REMBER_ANSWER(state , id) {
      state.answerid.push(id);
    }
  },
  actions: {
    initializeData({ commit }){commit('INITIALIZE_DATA')},
    startAnswer({ commit }){commit('START_ANSWER')},
    addNum({ commit, state }, id){
      //点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
      commit('REMBER_ANSWER', id);
      if (state.itemNum < state.itemDetail.length) {
        commit('ADD_ITEM');
      }
    }
  
  }
});
export default store;