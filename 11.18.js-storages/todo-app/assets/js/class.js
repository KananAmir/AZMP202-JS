export class Todo {
  constructor(todoText) {
    this.todoText = todoText;
    this.id = Date.now();
    this.isCompleted = false;
    this.createdAt = new Date().toLocaleString();
  }
}
