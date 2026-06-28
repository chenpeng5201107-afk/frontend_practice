// src/composables/useTodoActions.ts
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

export function useTodoActions() {
  // ===== TODO 1: 获取 store =====
  const store = useTodoStore()

  // ===== TODO 2: UI 状态（输入框内容） =====
  const newTodoText = ref<string>('')

  // ===== TODO 3: 添加待办 =====
  // 1. 获取输入内容并 trim
  // 2. 空值判断
  // 3. 调用 store 的 addTodo
  // 4. 清空输入框
  const addTodo = () => {
    const content = newTodoText.value.trim()
    if (!content) return
    store.addTodo(content)
    newTodoText.value = ''
  }

  // ===== TODO 4: 删除待办 =====
  // 调用 store 的 deleteTodo
  const deleteTodo = ((id: string) => {
    store.deleteTodo(id)
  })

  const toggleTodo = ((id:string)=>{
    store.toggleTodo(id)
  })

  // ===== TODO 5: 返回 =====
  return {
    // 返回 newTodoText, addTodo, deleteTodo
    newTodoText,
    addTodo,
    deleteTodo,
    toggleTodo,
  }
}
