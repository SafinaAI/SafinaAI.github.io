//Ul
import { createElement } from "../framework/render.js";

function createTasksListComponentTemplate() {
  return ` <div>
            <ul id = "tasklist">
              <div id = "list_title">Название Бэклога</div>
            </ul>
          </div>`;
}

export default class TasksListComponent {
  getTemplate() {
    return createTasksListComponentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
