<template>
   <div class="table">
      <q-table
         title="Treats"
         :rows="userList.data"
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
               <q-btn outline text-color="secondary" @click="openDetail(props.row)">비밀번호 변경</q-btn>
            </q-td>
         </template>
      </q-table>
   </div>
   <q-dialog v-model="modalDetailVal" persistent>
      <q-card dark>
         <q-card-section>
            <div class="text-h6">비밀번호 변경</div>
         </q-card-section>

         <q-card-section>
            <q-input
               type="password"
               color="secondary"
               dark
               v-model="password"
               autofocus
               @keyup.enter="modalDetailVal = false"
            />
         </q-card-section>

         <q-card-actions align="right">
            <q-btn flat label="취소" color="secondary" v-close-popup />
            <q-btn flat label="확인" color="secondary" v-close-popup />
         </q-card-actions>
      </q-card>
   </q-dialog>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue"
import {getUser} from "@/services/fetchers.js"

// 비밀번호 변경
const password = ref("")

const selected = ref([])

const getSelectedString = () => {
   return selected.value.length === 0
      ? ""
      : `${selected.value.length} record${selected.value.length > 1 ? "s" : ""} selected of ${userList.data.length}`
}

const filter = ref("")

const columns = [
   {
      name: "번호",
      required: true,
      label: "번호",
      field: "번호",
      sortable: true,
      align: "left",
   },
   {name: "이름", label: "이름", field: "이름", align: "center"},
   {name: "아이디", label: "아디이", field: "아이디", align: "center"},
   {name: "가입일", label: "가입일", field: "가입일", align: "center"},
   {name: "action", label: "", field: "action", align: "center"},
]

const modalDetailVal = ref(false)

let modalDtl = reactive({data: undefined})

const openDetail = (val: any) => {
   modalDtl.data = val
   modalDetailVal.value = true
}

const userList = reactive({data: undefined})
const fetch = async () => {
   userList.data = await getUser()
}
fetch()
</script>

<style lang="scss" scoped>
.table {
   margin-top: 40px;
}
</style>
