<script setup lang="ts">
import {useTodoActions} from "../components/todoAction.ts";
import {useTodoStore} from "@/stores/todo.ts";
import {useFilterActions} from "@/components/filterAction.ts"
import {onMounted} from "vue";

const {newTodoText, addTodo, deleteTodo,toggleTodo} = useTodoActions()
const useTodo = useTodoStore()
const {filter,filteredTodos} = useFilterActions()

// ✅ 组件加载时获取数据
onMounted(() => {
  useTodo.loadTodos()
})

</script>

<template>
  <h2>我的第一个APP应用</h2>
  <div v-if="useTodo.loading">加载中...</div>
  <div v-else>
    <p>总计项目:{{useTodo.stats.total}}项,待完成:{{useTodo.stats.undone}}项</p>
    <div>
      <select v-model="filter">
        <option value="all">全部</option>
        <option value="active">未完成</option>
        <option value="completed">已完成</option>
      </select>
    </div>
    <ul>
      <li v-for="item in filteredTodos" :key="item.id">
        <div>
          <input type="checkbox" :checked="item.done" @change="toggleTodo(item.id)">
          <span :class="{done:item.done}">{{item.content}}</span>
          <button @click="deleteTodo(item.id)">删除</button>
        </div>
      </li>
    </ul>
  </div>

  <div class="add-area">
  <input
    type="text"
    v-model="newTodoText"
    placeholder="请输入待办内容"
    @keyup.enter='addTodo' /> <!-- 额外加分项：按回车也能添加 -->

  <button @click="addTodo">添加</button>
  </div>
</template>

<style scoped>
  h2 { color: #42b883; }
  li {
  list-style: none;
  padding: 8px 12px;
  margin: 4px 0;
  background: #f5f5f5;
  border-radius: 4px;
  display: flex;           /* ✅ 弹性布局 */
  justify-content: space-between;  /* ✅ 两端对齐 */
  align-items: center;     /* ✅ 垂直居中 */
  }

  /* 左侧：复选框 + 文字 */
  li > div:first-child {
    display: flex;
    align-items: center;
    gap: 12px;              /* ✅ 复选框和文字间距 */
  }

  /* 右侧：删除按钮 */
  li > div:last-child {
    display: flex;
    align-items: center;
  }
  .add-area {
  margin: 16px 0;
  display: flex;
  gap: 12px;
  }
  input {
    flex: 4;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  button {
    padding: 8px 24px;
    background: #42b883;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  button:hover {
    background: #33a06f;
  }
  .done {
  text-decoration: line-through;
  color: #999;
  }
</style>
)
