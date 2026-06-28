// composables/useFilterActions.ts
import {computed, ref} from "vue";
import {useTodoStore} from "@/stores/todo.ts";

export function useFilterActions() {  // ← 接收参数
  const useStore = useTodoStore()
  const filter = ref<'all' | 'active' | 'completed'>('all')

  const filteredTodos = computed(() => {
    const todos = useStore.todos
    // 使用传入的 todos 参数
    if (filter.value === 'all') return todos
    if (filter.value === 'active') return todos.filter(t => !t.done)
    if (filter.value === 'completed') return todos.filter(t => t.done)
    return todos
  })

  return { filter, filteredTodos }
}
