let todoId = 0;

export default {
  clicked: 0,
  newTodo: "",
  todos: [
    {
      id: todoId++,
      task: "Try this todo",
      completed: false,
    },
  ],
  // addTodo() {
  //   this.todos.push({
  //     id: todoId++,
  //     task: this.newTodo,
  //     completed: false,
  //   });
  //   this.newTodo = "";
  // },
  // removeToDo(todo) {
  //   console.log(todo);
  //   this.todos = this.todos.filter((t) => {
  //     return t !== todo;
  //   });
  // },
  // reset() {
  //   this.todos = [];
  // },
};