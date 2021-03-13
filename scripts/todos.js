// Menu: Todos "App"
// Description: Example of create/read/update/delete
// Shortcut: cmd shift .

let {
  addTodo,
  getTodos,
  removeTodo,
  toggleTodo,
} = await lib("todos")

let todosChoices = () =>
  getTodos().map(({ name, done, id }) => ({
    name: `${done ? "✅" : "❗️"} ${name}`,
    value: id,
  }))

let actions = {
  ["add"]: async () => {
    addTodo(await arg("Enter todo name:"))
    await actions["toggle"]()
  },
  ["remove"]: async () => {
    let id = await arg("Remove todo:", todosChoices())
    removeTodo(id)
    await actions["remove"]()
  },
  ["toggle"]: async () => {
    let id = await arg("Toggle todo:", todosChoices())
    toggleTodo(id)
    await actions["toggle"]()
  },
}

let key = await arg("Todos:", Object.keys(actions))
await actions[key]()
