import request from '@/utils/request'
import type { Todo } from '@/stores/todo'

// 1. 获取所有待办
export const getTodos = () => {
  return request.get('/todos')
}

// 2. 新增待办
export const addTodo = (content: string) => {
  return request.post('/todos', {
    content,
    done: false
  })
}

// 3. 删除待办
export const deleteTodo = (id: string) => {
  return request.delete(`/todos/${id}`)
}

// 4. 切换待办状态
export const toggleTodo = (id: string, done: boolean) => {
  return request.patch(`/todos/${id}`, {
    done: !done
  })
}
