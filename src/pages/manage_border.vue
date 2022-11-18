<template>
   <div class="table">
      <q-table
         title="Treats"
         :rows="boardList.data"
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
               <q-btn outline text-color="secondary" @click="openDetail(props.row)">상세보기</q-btn>
            </q-td>
         </template>
      </q-table>
   </div>
   <q-dialog v-model="modalDetailVal">
      <q-card dark>
         <q-card-section>
            <div class="text-h6">
               {{ modalDtl.data.제목 }}
            </div>
         </q-card-section>

         <q-card-section>
            {{ modalDtl.data.내용 }}
         </q-card-section>

         <q-card-actions align="right">
            <q-btn flat label="수정" color="secondary" v-close-popup />
            <q-btn flat label="확인" color="secondary" v-close-popup />
         </q-card-actions>
      </q-card>
   </q-dialog>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue"
import {getBrd} from "@/services/fetchers.js"

const selected = ref([])

const getSelectedString = () => {
   return selected.value.length === 0
      ? ""
      : `${selected.value.length} record${selected.value.length > 1 ? "s" : ""} selected of ${boardList.data.length}`
}

const filter = ref("")

const columns = [
   {
      name: "제목",
      required: true,
      label: "제목",
      field: "제목",
      sortable: true,
      align: "left",
   },
   {name: "작성자", label: "작성자", field: "작성자", align: "center"},
   {name: "등록일", label: "등록일", field: "등록일", align: "center"},
   {name: "수정일", label: "수정일", field: "수정일", align: "center"},
   {name: "action", label: "", field: "action", align: "center"},
]

const modalDetailVal = ref(false)

let modalDtl = reactive({data: undefined})

const openDetail = (val: any) => {
   modalDtl.data = val
   modalDetailVal.value = true
}

const boardList = reactive({data: undefined})
const fetch = async () => {
   boardList.data = await getBrd()
}
fetch()
</script>

<style lang="scss" scoped>
.table {
   margin-top: 40px;
}
</style>
