<script setup lang="ts">
// ===== 1. 导入 =====
// 导入 ref, useRouter
import {ref} from 'vue'
import {useRouter} from "vue-router";

// ===== 2. 状态 =====
// username: ref 字符串
// password: ref 字符串
// router: useRouter()
const username = ref('')
const password = ref('')
const router = useRouter()

// ===== 3. 登录函数 =====
// const handleLogin = () => {
//   1. 判断 username 和 password 是否为空 (trim)
//   2. 如果为空 → alert 提示
//   3. 如果不为空 → localStorage.setItem('token', 'fake-token-123')
//   4. router.push('/')
// }
const handleLogin = ()=>{
  username.value = username.value.trim()
  password.value = password.value.trim()
  if(!username.value) alert('用户名不能为空~')
  else if(!password.value) alert('密码不能为空~')
  else {
    localStorage.setItem('token','fake-token-123')
    router.push('/')
  }
}

</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h2>登录</h2>

      <!-- 用户名输入框 -->
      <input
        type="text"
        placeholder="请输入用户名"
        v-model="username"
      />

      <!-- 密码输入框 -->
      <input
        type="password"
        placeholder="请输入密码"
        v-model="password"
      />

      <!-- 登录按钮 -->
      <button @click="handleLogin">登录</button>

      <p class="hint">忘记密码？重新注册~</p>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.login-box {
  background: white;
  padding: 48px 40px 32px;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 380px;
  max-width: 90%;
  transition: transform 0.3s ease;
}

.login-box:hover {
  transform: translateY(-2px);
}

.login-box h2 {
  text-align: center;
  color: #333;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.login-box .subtitle {
  text-align: center;
  color: #999;
  font-size: 14px;
  margin-bottom: 28px;
}

.login-box label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #555;
  margin-bottom: 4px;
}

.login-box input {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 16px;
  border: 2px solid #e8e8e8;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 15px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background: #fafafa;
}

.login-box input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.15);
  background: white;
}

.login-box input::placeholder {
  color: #bbb;
  font-size: 14px;
}

.login-box button {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  margin-top: 8px;
  letter-spacing: 1px;
}

.login-box button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.login-box button:active {
  transform: translateY(0);
}

.login-box .hint {
  text-align: center;
  color: #bbb;
  font-size: 13px;
  margin-top: 20px;
  border-top: 1px solid #f0f0f0;
  padding-top: 16px;
}

.login-box .hint span {
  color: #667eea;
  font-weight: 600;
  cursor: default;
}

/* 错误提示样式（后续可选） */
.login-box .error-message {
  background: #fee;
  color: #e74c3c;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
  border-left: 4px solid #e74c3c;
}
</style>
