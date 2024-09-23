import { createElement } from "../framework/render.js";

function createHeaderComponentTemplate() {
  return ` <div class="container header_title">
          <h1 class="title">Список задач</h1>
        </div>`;
}

export default class HeaderComponent {
  getTemplate() {
    return createHeaderComponentTemplate();
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
