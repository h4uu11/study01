<template>
   <div class="header">
      <RouterLink to="/" class="logo">DFLUID</RouterLink>
      <div class="nav">
         <RouterLink to="/manage_member">회원 관리</RouterLink>
         <RouterLink to="/manage_border">게시물 관리</RouterLink>
         <RouterLink to="/manage_folder">폴더 구조 관리</RouterLink>
      </div>
      <div class="util">
         <RouterLink to="/login">로그인</RouterLink>
      </div>
   </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
   padding: 15px 0;
   .logo {
      font-size: 30px;
   }
   .util {
      display: flex;
   }
   .nav {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      a {
         margin: 0 10px;
         font-size: 16px;
         font-weight: 700;
      }
   }
}
</style>
