<template>
   <div class="header">
      <div class="top">
         <RouterLink to="/" class="logo">Dfluid Blog Backoffice</RouterLink>
         <RouterLink to="/login">로그인</RouterLink>
      </div>
      <div class="bottom">
         <RouterLink to="/manage_member">회원 관리</RouterLink>
         <RouterLink to="/manage_border">게시물 관리</RouterLink>
         <RouterLink to="/manage_folder">폴더 구조 관리</RouterLink>
      </div>
   </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
   .top {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      .logo {
         font-size: 30px;
      }
   }
   .bottom {
      display: flex;
      justify-content: center;
      font-size: 16px;
      a {
         margin: 0 10px;
      }
   }
}
</style>
