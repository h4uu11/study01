<template>
   <div class="login">
      <div class="content">
         <div class="title">로그인</div>
         <q-form @submit="onSubmit">
            <q-input
               dark
               v-model="userInfo.name"
               label="아이디"
               lazy-rules
               :rules="[(val) => (val && val.length > 0) || '아이디를 입력해주세요.']"
            >
               <template v-slot:prepend>
                  <q-icon name="person" />
               </template>
            </q-input>
            <q-input
               dark
               v-model="userInfo.password"
               label="비밀번호"
               type="password"
               lazy-rules
               :rules="[(val) => (val && val.length > 0) || '비밀번호를 입력해주세요.']"
            >
               <template v-slot:prepend>
                  <q-icon name="key" />
               </template>
            </q-input>
            <q-toggle v-model="accept" label="아이디 저장" />
            <q-btn color="white" type="submit" text-color="black" label="로그인" class="submit" />
         </q-form>
      </div>
   </div>
</template>

<script setup>
import {ref} from "vue"
import {useQuasar} from "quasar"

const $q = useQuasar()
const userInfo = ref({name: "", password: ""})
const accept = ref(false)

const onSubmit = () => {
   if (accept.value !== true) {
      $q.notify({
         color: "red-5",
         textColor: "white",
         icon: "warning",
         message: "You need to accept the license and terms first",
      })
   } else {
      $q.notify({
         color: "green-4",
         textColor: "white",
         icon: "cloud_done",
         message: "Submitted",
      })
   }
}
</script>

<style lang="scss" scoped>
.login {
   height: 100vh;
   display: flex;
   align-items: center;
   .content {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
      padding: 40px 25px;
      background-color: #333;
      border-radius: 10px;
      text-align: center;
      .title {
         margin-bottom: 20px;
         font-size: 24px;
         font-weight: 500;
      }
      .submit {
         width: 100%;
         margin-top: 10px;
      }
   }
}
</style>
