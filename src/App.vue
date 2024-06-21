<script setup></script>

<template>
  <div>
    <ul class="nav_menu">
      <li>
        <router-link to="/">Member</router-link>
      </li>
      <li>
        <router-link to="/registermember">註冊</router-link>
      </li>
    </ul>
  </div>
  <router-view></router-view>
</template>

<style>
* {
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  /* border: 10px solid orange; */
}
</style>
