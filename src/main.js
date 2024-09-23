import HeaderComponent from "./view/header-component.js";
import FormAddTaskComponent from "./view/form-add-task-component.js";
import TasksBoardPresenter from "./presenter/task-board-presenter.js";
import { render, RenderPosition } from "./framework/render.js";
import TasksModel from "./model/tasks-model.js";

const bodyContainer = document.querySelector(".board-app");
const formContainer = document.querySelector(".add_task");
const tasksBoardContainer = document.querySelector(".taskBoard");

const tasksModel = new TasksModel();
const tasksBoardPresenter = new TasksBoardPresenter({
  bodyContainer: tasksBoardContainer,
  tasksModel,
});

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);

tasksBoardPresenter.init();
