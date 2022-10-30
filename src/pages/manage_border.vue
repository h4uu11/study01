<template>
   <div class="table">
      <q-table
         grid
         :rows="rows"
         :columns="columns"
         row-key="name"
         :filter="filter"
         dark
         v-model:pagination="pagination"
         hide-pagination
         hide-header
      >
         <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search" dark>
               <template v-slot:append>
                  <q-icon name="search" />
               </template>
            </q-input>
         </template>
      </q-table>
      <div class="row justify-center q-mt-md">
         <q-pagination v-model="pagination.page" color="grey-8" :max="pagesNumber" />
      </div>
   </div>
</template>

<script setup>
import {ref, computed} from "vue"

const filter = ref("")

const pagination = ref({
   sortBy: "desc",
   descending: false,
   page: 1,
   rowsPerPage: 12,
   // rowsNumber: xx if getting data from a server
})
const pagesNumber = computed(() => Math.ceil(rows.length / pagination.value.rowsPerPage))

const columns = [
   {
      name: "number",
      label: "번호",
      field: "number",
      align: "center",
   },
   {
      name: "title",
      label: "제목",
      field: "title",
      align: "center",
   },
   {
      name: "name",
      label: "이름",
      field: "name",
      align: "center",
   },
   {
      name: "createDate",
      label: "등록일",
      field: "createDate",
      align: "center",
   },
   {
      name: "editDate",
      label: "수정일",
      field: "editDate",
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
      title: "상태관리란 무엇일까?",
      name: "홍길동",
      createDate: "2022-09-23",
      editDate: "2022-09-23",
      button: "상세보기",
   },
   {
      number: "1",
      title: "상태관리란 무엇일까?",
      name: "홍길동",
      createDate: "2022-09-23",
      editDate: "2022-09-23",
      button: "상세보기",
   },
   {
      number: "1",
      title: "상태관리란 무엇일까?",
      name: "홍길동",
      createDate: "2022-09-23",
      editDate: "2022-09-23",
      button: "상세보기",
   },
   {
      number: "1",
      title: "상태관리란 무엇일까?",
      name: "홍길동",
      createDate: "2022-09-23",
      editDate: "2022-09-23",
      button: "상세보기",
   },
   {
      number: "1",
      title: "상태관리란 무엇일까?",
      name: "홍길동",
      createDate: "2022-09-23",
      editDate: "2022-09-23",
      button: "상세보기",
   },
   {
      number: "1",
      title: "상태관리란 무엇일까?",
      name: "홍길동",
      createDate: "2022-09-23",
      editDate: "2022-09-23",
      button: "상세보기",
   },
   {
      number: "1",
      title: "상태관리란 무엇일까?",
      name: "홍길동",
      createDate: "2022-09-23",
      editDate: "2022-09-23",
      button: "상세보기",
   },
   {
      number: "1",
      title: "상태관리란 무엇일까?",
      name: "홍길동",
      createDate: "2022-09-23",
      editDate: "2022-09-23",
      button: "상세보기",
   },
   {
      number: "1",
      title: "상태관리란 무엇일까?",
      name: "홍길동",
      createDate: "2022-09-23",
      editDate: "2022-09-23",
      button: "상세보기",
   },
   {
      number: "1",
      title: "상태관리란 무엇일까?",
      name: "홍길동",
      createDate: "2022-09-23",
      editDate: "2022-09-23",
      button: "상세보기",
   },
   {
      number: "1",
      title: "상태관리란 무엇일까?",
      name: "홍길동",
      createDate: "2022-09-23",
      editDate: "2022-09-23",
      button: "상세보기",
   },
   {
      number: "1",
      title: "상태관리란 무엇일까?",
      name: "홍길동",
      createDate: "2022-09-23",
      editDate: "2022-09-23",
      button: "상세보기",
   },
   {
      number: "1",
      title: "상태관리란 무엇일까?",
      name: "홍길동",
      createDate: "2022-09-23",
      editDate: "2022-09-23",
      button: "상세보기",
   },
   {
      number: "1",
      title: "상태관리란 무엇일까?",
      name: "홍길동",
      createDate: "2022-09-23",
      editDate: "2022-09-23",
      button: "상세보기",
   },
]
</script>

<style lang="scss" scoped>
.table {
   margin-top: 40px;
}
</style>
