<template>
  <div class="login_box">
    <div class="login_header">
      <a>會員登入</a>
      <a>會員註冊</a>
    </div>
    <ul class="main_login">
      <li>
        <label for="">帳號</label>
        <br>
        <el-input
          v-model="UserInput"
          style="width: 240px"
          type="e-mail"
          placeholder="請輸入帳號"
        />
      </li>
      <li>
        <label for="">密碼 </label>
        
        <el-input
          v-model="Password"
          style="width: 240px"
          type="password"
          placeholder="請輸入密碼"
          show-password
        />
      </li>
      <li>
        <!-- <input  type="button" value="登入" /> -->
        <el-button @click="LoginSend" style="width: 240px;background-color: #4285F4;"  type="success">登入</el-button>
      </li>
      <li class="forget_link">
        <a href="">忘記密碼</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
const UserInput = ref("");
const Password = ref("");

const LoginSend = () => {
  console.log(UserInput.value);
  console.log(Password.value);
};
// console.log(Password.value);
</script>

<style scoped lang="scss">

.login_box {
  // border: 5px solid red;
  width: 500px;
  height: 350px;
  background-color: #f2f2f2;
  .login_header {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: skyblue;
    height: 50px;
   
    a:first-child {
      color: #000;
      background-color: #f2f2f2;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
    }
    a:nth-child(2) {
      color: green;
      background-color: palevioletred;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
    }
  }
  .main_login {
    // width: 100%;
    // border: 5px solid green;
    // height: 150px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    li{
      margin: 10px 0 10px;
      width: 240px;
      display: flex;
      flex-wrap: wrap;
    }
    li:nth-child(4){
      // margin: 10px 0 10px;
      width: 240px;
      // background-color: red;
      display: flex;
      justify-content: right;
      align-items: end;
      margin-right: 20px;
      // ::v-deep .el-style{
      //   background-color: #4285F4 !important;
      // }
    }
  }
}
</style>
