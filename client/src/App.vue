<template>
  <div class="container">
    <Header />
    <Form @submit-form="getCatFoods()"/>
    <Table :results="this.results"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Form from './components/Form'
import Table from './components/Table'

export default {
  name: 'App',
  components: {
    Header,
    Form,
    Table,
  },
  data() {
    return {
      results: [],
    }
  },
  methods: {
    async getCatFoods(){
      const res = await fetch('/api/products')
      const data = await res.json()
      this.results = data
    },
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

body{
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: rgb(73, 167, 230);
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
}
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}
table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}
table td {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}
</style>
