<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-data-table :headers="headers" :items="batchs">
      <template slot="items" slot-scope="row">
        <td>{{row.item.batchName}}</td>
        <td><p v-bind:class="row.item.class">{{row.item.status}}</p></td>
        <td><v-btn v-show="row.item.show" v-on:click="launchBatch(row.item)">{{row.item.action}}</v-btn></td>
      </template>
    </v-data-table>
    
  </div>
</template>

<script>

import http from './../helpers/http.js';

//TO DO remplacer to be launched dans la base de donnée par A lancer

export default {
  name: 'welcome',
  mounted(){
    this.getStatus()
  },
  data () {
    return {
      msg: 'Bienvenue sur Distime!',
      headers:[
      {text: 'Numéro de batch', value: 'batchName', align:'center', sortable:true},
      {text: 'Status', value: 'status', align:'center', sortable:true},
      {text: 'Action', value: 'action' , align:'center'},
      ],
      batchs:[],
      id:'',
    }
  },
  methods:{
    getStatus(){
      http.get('/')
      .then((response) => {
        return this.batchs = response.data.data;
      })
      .then((batchs) => {
        return this.batchs = batchs.map((batch) => {
          //possible value for batch : //Status: 'Done'/ 'ToDo' / 'InProcess'
          if (batch.status === 'to be launched' || batch.status === 'ToDo'){
            batch.action = 'Lancer';
            batch.show = true;
            batch.class = 'otherstatus';
          }
          else if (batch.status === 'Done'){
            batch.show = false;
            batch.class = 'otherstatus';
          }
          else if (batch.status === 'InProcess'){
            batch.show = false;
            batch.class = 'statusinprocess';
          }
          return batch;
        })
      })
      .catch(
        (e)=> {
          alert(`probleme:${e}`);
          return e;
        })
    },
    launchBatch(selected){
      // console.log('selected id:', selected);
      let batchName = selected.batchName
      http.get(`/${batchName}`)
      .then((response)=>{
        console.log(response);
        this.getStatus();
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.statusdone{
  color: green;
}

.otherstatus{
  color: grey;
}

.statusinprocess{
  color: blue;
}
</style>
