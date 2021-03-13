// API: https://github.com/typicode/lowdb
let todosDb = db("todos", { todos: [] })
export let todos = todosDb.get("todos")

export let getTodos = () => todos.value()

export let addTodo = name => {
  todos.insert({ name, done: false }).write()
}

export let removeTodo = id => {
  todos.remove({ id }).write()
}

export let toggleTodo = id => {
  todos
    .getById(id)
    .update("done", bool => !bool)
    .write()
}
