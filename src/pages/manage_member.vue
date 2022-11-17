<template>
   <div class="table">
      <q-table
         title="Treats"
         :rows="rows"
         :columns="columns"
         row-key="num"
         :filter="filter"
         :selected-rows-label="getSelectedString"
         selection="multiple"
         v-model:selected="selected"
         dark
      >
         <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search" dark>
               <template v-slot:append>
                  <q-icon name="search" />
               </template>
            </q-input>
         </template>
         <template v-slot:body-cell-action="props">
            <q-td :props="props">
               <q-btn outline text-color="secondary" @click="openDetail(props.row.num)">{{ props.value }}</q-btn>
            </q-td>
         </template>
      </q-table>
   </div>
   <q-dialog v-model="modalDetailVal">
      <q-card dark>
         <q-card-section>
            <div class="text-h6">비밀번호 변경</div>
         </q-card-section>

         <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet
            porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro
            labore.
         </q-card-section>

         <q-card-actions align="right">
            <q-btn flat label="취소" color="secondary" v-close-popup />
            <q-btn flat label="확인" color="secondary" v-close-popup />
         </q-card-actions>
      </q-card>
   </q-dialog>
</template>

<script setup lang="ts">
import {ref} from "vue"

const selected = ref([])
const getSelectedString = () => {
   return selected.value.length === 0
      ? ""
      : `${selected.value.length} record${selected.value.length > 1 ? "s" : ""} selected of ${rows.length}`
}

const filter = ref("")

const columns = [
   {
      name: "num",
      required: true,
      label: "번호",
      field: "num",
      sortable: true,
      align: "left",
   },
   {name: "name", label: "이름", field: "name", align: "center"},
   {name: "id", label: "아디이", field: "id", align: "center"},
   {name: "dateCreate", label: "가입일", field: "dateCreate", align: "center"},
   {name: "action", label: "", field: "action", align: "center"},
]

const rows = [
   {
      num: 1,
      title: "상태관리란 무엇일까?",
      name: "홍길동",
      id: "test01",
      dateCreate: "2022-09-23",
      action: "비밀번호 변경",
   },
   {
      num: 2,
      title: "상태관리란 무엇일까?",
      name: "조혁래",
      id: "test01",
      dateCreate: "2022-09-23",
      action: "비밀번호 변경",
   },
]

const modalDetailVal = ref(false)

const openDetail = (val: any) => {
   console.log(val)
   modalDetailVal.value = true
}
</script>

<style lang="scss" scoped>
.table {
   margin-top: 40px;
}
</style>
