<template>
  <div class="vuex">

  </div>
</template>

<script>
  export default {
    name: 'vuex',
    data () {
      return {

      }
    },
    beforeCreate () {     //beforeCreate 创建前状态
      
    },
    created () {    //created 创建完毕状态
      var logAll = new this.log();
      // console.log(logAll);
      logAll.log1();
      function Person(name,age,salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
      }
      function f1(person) {
        person.name = "ls";
        person = new Person("aa",18,10);
      }
      var p = new Person("zs",18,1000);
      console.log(p.name);
      f1(p);
      console.log(p.name);

    },
    beforeMount () {    //beforeMount 挂载前状态
      
    },
    mounted () {    //mounted 挂载结束状态
      
    },
    beforeUpdate() {    //beforeUpdate 更新前状态
      
    },
    updated() {   //updated 更新完成状态
      
    },
    beforeDestroy() {   //beforeDestroy 销毁前状态
      
    },
    destroyed() {   //destroyed 销毁完成状态
      
    },
    methods: {
      log (params) {
        this.log1 = function () {
          console.log(11111);
        }
        this.log2 = function () {
          console.log(22222);
        }
        this.log3 = function () {
          console.log(33333);
        }
        this.log4 = function () {
          console.log(44444);
        }
      }
    }
  }
</script>
