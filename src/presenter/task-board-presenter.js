import TasksListComponent from "../view/taskList-component";
import TaskComponent from "../view/task-component";
import TaskBoardComponent from "../view/TaskBoard-component";
import { render } from "../framework/render";

export default class TasksBoardPresenter {
  tasksBoardComponent = new TaskBoardComponent();
  taskListComponent = new TasksListComponent();

  constructor({ boardContainer, tasksModel }) {
    this.boardContainer = boardContainer;
    this.tasksModel = tasksModel;
  }

  init() {
    this.boardTasks = [...this.tasksModel.getTasks()];

    render(this.tasksBoardComponent, this.boardContainer);
    for (let i = 0; i < 4; i++) {
      const tasksListComponent = new TasksListComponent();
      render(tasksListComponent, this.tasksBoardComponent.getElement());

      for (let j = 0; j < this.boardTasks.length; j++) {
        const taskComponent = new TaskComponent({ task: this.boardTasks[j] });
        render(taskComponent, tasksListComponent.getElement());
      }
    }
  }
}
