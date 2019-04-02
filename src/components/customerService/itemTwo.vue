<template>
  <div>
    <div class="twoCon">
      <ul>
        <li>
          <div></div>
          <p>{{liConOne}}</p>
        </li>
        <li>
          <div></div>
          <p>{{liConTwo}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name:'',
    props:['liConOne','liConTwo'],
    data () {
      return {
      };
    },

    components: {
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
  .twoCon{
    width: 100%;
    margin-top: 50px;
    ul{
      width: 85%;
      margin: 0 auto;
      li{
        padding-bottom: 18px;
        overflow: hidden;
        div{
          // display: inline-block;
          width: 12px;
          height: 12px;
          background-color: #3544f3;
          border-radius: 50%;
           -moz-border-radius: 50%;      
           -webkit-border-radius: 50%;
        }
        p {
          margin: 0;
          padding: 0;
          display: inline-block;
          font-size: 0.69rem;
          color: #7b88a2;
          margin-left: 24px;
          margin-top: -18px;
          line-height: 36px;
        }
      }
    }
    
  }
</style>