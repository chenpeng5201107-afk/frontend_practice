import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getTodos, addTodo as apiAdd, deleteTodo as apiDelete, toggleTodo as apiToggle } from '@/api/todo'

export interface Todo {
  id: string
  content: string
  done: boolean
}

// 定义 Store
export const useTodoStore = defineStore('todo', () => {
  // ===== TODO 1: state（数据） =====
  // 用 ref 定义 todos，用 loadTodos() 初始化
  const todos = ref<Todo[]>([])
  const loading = ref(false)

  // 加载本地数据
  const loadTodos = async() => {
    try{
      loading.value = true
      const stored = await getTodos()
      if (stored) {
        //@ts-ignore
        todos.value = stored
      }
      } catch(error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  // ===== TODO 2: getters（计算属性） =====
  // 用 computed 定义 stats
  const stats = computed(() => {
    const done = todos.value.filter(todo => todo.done).length
    const total = todos.value.length
    const undone = total - done
    return { done, total, undone }
  })

  // ===== TODO 3: actions（方法） =====
  // addTodo() 函数
  const addTodo = async(content: string) => {
    if(content) {
      try{
        const newtodo:any = await apiAdd(content) //后端
        todos.value.push(newtodo) //后端返回的更新到前端
      } catch(error) {
        console.error(error)
      }
    }
  }
  // deleteTodo() 函数
  const deleteTodo = async(id: string) => {
    try {
      await apiDelete(id) // 后端删除
      todos.value = todos.value.filter(todo => todo.id !== id) //前端删除
    } catch(error) {
      console.error(error)
    }
  }

  // ===== 切换待办状态 =====
  const toggleTodo = async (id: string) => {
    try {
      // 1. 在本地找到这个待办
      const todo = todos.value.find(t => t.id === id)
      if (!todo) return

      // 2. 调用 API 切换状态（传当前状态，后端取反）
      await apiToggle(id, todo.done)

      // 3. 更新本地状态
      todo.done = !todo.done
    } catch (error) {
      console.error('切换失败', error)
    }
  }

  // ===== TODO 5: 返回 =====
  return {
    todos,
    stats,
    addTodo,
    deleteTodo,
    toggleTodo,
    loading,
    loadTodos,
  }
})
