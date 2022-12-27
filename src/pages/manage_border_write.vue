<template>
   <div class="border__write">
      <div class="form">
         <div class="form__row">
            <label for="">제목</label>
            <input type="text" />
         </div>
         <div class="form__row">
            <label for="">카테고리</label>
            <select name="" id="">
               <option value="">옵션1</option>
               <option value="">옵션2</option>
            </select>
         </div>
         <div class="form__row">
            <label for="">내용</label>
            <div class="editor">
               <QuillEditor theme="snow" />
            </div>
         </div>
      </div>
      <div class="bottom__buttons">
         <button class="btn">등록하기</button>
         <button class="btn">삭제하기</button>
         <RouterLink to="/manage_border" class="btn">목록보기</RouterLink>
      </div>
   </div>
</template>

<script setup lang="ts">
import {QuillEditor} from "@vueup/vue-quill"
import "@vueup/vue-quill/dist/vue-quill.snow.css"
</script>

<style lang="scss" scoped>
.form {
   display: flex;
   flex-direction: column;
   gap: 60px;
   &__row {
      display: flex;
      flex-direction: column;
   }
   label {
      margin-bottom: 10px;
      font-size: 26px;
      font-weight: 500;
      color: #fff;
   }
   input,
   select {
      height: 50px;
      padding: 0 15px;
      background-color: #000;
      color: #fff;
      border: 1px solid #d1d5db;
      border-radius: 6px;
   }
}
</style>
