import { reactive } from "vue";
let todoId = 0;
export const store = reactive({
  clicked: 0,
  todos: [
    {
      id: todoId++,
      priority: 1,
      task: "Try this todo",
      completed: false,
    },
  ],
  priorities: ["low", "medium", "high"],
  addTodo(newTodo) {
    this.todos.push({
      id: todoId++,
      task: newTodo.name,
      priority: newTodo.priority || 1,
      completed: false,
    });
    this.newTodo = "";
  },
  changePriority({ id, prio }) {
    this.todos[id].priority = prio;
  },
  removeToDo(todo) {
    console.log(todo);
    this.todos = this.todos.filter((t) => {
      return t !== todo;
    });
  },
  removeCompleted() {
    this.todos = this.todos.filter((e) => !e.completed);
  },
  reset() {
    this.todos = [];
  },
  completeAll(e) {
    this.completeAllTasks = !this.completeAllTasks;
    this.todos.forEach((todo) => (todo.completed = e.target.checked));
  },
  checkCompletion() {
    if (this.todos.every((e) => e.completed)) {
      this.completeAllTasks = true;
    }
  },
  filtered() {
      return this.hideCompleted ? this.todos.filter(e => !e.completed) : this.todos
    }, 
    isAllTaskCompleted(){
      return this.todos.every(e => e.completed)
    },
    modifyTask(id, newTask){
      return this.todos = this.todos.map((e) => {
        if(id === e.id){
          return {
            ...e, 
            task : newTask
          }
        } else {
          return e
        }
      })
    },
    updatePriority(id, newPriority){
      return this.todos = this.todos.map((e) => {
        if(id === e.id){
          return {
            ...e, 
            priority : newPriority
          }
        } else {
          return e
        }
      })
    }
});
