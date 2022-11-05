<template>
   <div class="table">
      <q-table :rows="rows" :columns="columns" row-key="name" :filter="filter" dark>
         <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search" dark>
               <template v-slot:append>
                  <q-icon name="search" />
               </template>
            </q-input>
         </template>
      </q-table>
   </div>
</template>

<script setup lang="ts">
import {ref} from "vue"

const filter = ref("")

const columns = [
   {
      name: "number",
      label: "번호",
      field: "number",
      align: "center",
   },
   {
      name: "name",
      label: "회원명",
      field: "name",
      align: "center",
   },
   {
      name: "id",
      label: "아이디",
      field: "id",
      align: "center",
   },
   {
      name: "date",
      label: "가입일",
      field: "date",
      align: "center",
   },
   {
      name: "button",
      label: "",
      field: "button",
      align: "center",
   },
]

const rows = [
   {
      number: "1",
      name: "홍길동",
      id: "test01",
      date: "2022-09-23",
      button: "비밀번호 변경",
   },
   {
      number: "2",
      name: "홍길동",
      id: "test01",
      date: "2022-09-23",
      button: "비밀번호 변경",
   },
   {
      number: "3",
      name: "홍길동",
      id: "test01",
      date: "2022-09-23",
      button: "비밀번호 변경",
   },
   {
      number: "3",
      name: "홍길동",
      id: "test01",
      date: "2022-09-23",
      button: "비밀번호 변경",
   },
   {
      number: "3",
      name: "홍길동",
      id: "test01",
      date: "2022-09-23",
      button: "비밀번호 변경",
   },
   {
      number: "3",
      name: "홍길동",
      id: "test01",
      date: "2022-09-23",
      button: "비밀번호 변경",
   },
   {
      number: "3",
      name: "홍길동",
      id: "test01",
      date: "2022-09-23",
      button: "비밀번호 변경",
   },
   {
      number: "3",
      name: "홍길동",
      id: "test01",
      date: "2022-09-23",
      button: "비밀번호 변경",
   },
   {
      number: "3",
      name: "홍길동",
      id: "test01",
      date: "2022-09-23",
      button: "비밀번호 변경",
   },
   {
      number: "3",
      name: "홍길동",
      id: "test01",
      date: "2022-09-23",
      button: "비밀번호 변경",
   },
   {
      number: "3",
      name: "홍길동",
      id: "test01",
      date: "2022-09-23",
      button: "비밀번호 변경",
   },
   {
      number: "3",
      name: "홍길동",
      id: "test01",
      date: "2022-09-23",
      button: "비밀번호 변경",
   },
   {
      number: "3",
      name: "홍길동",
      id: "test01",
      date: "2022-09-23",
      button: "비밀번호 변경",
   },
]
</script>

<style lang="scss" scoped>
.table {
   margin-top: 40px;
}
</style>
