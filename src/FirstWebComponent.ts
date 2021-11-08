import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class FirstWebComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--first-web-component-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Mi primer WebComponent';
  @property({ type: Array<String>() }) listaBebidas = ["Cocacola", "Fanta", "Pepsi", "Aquarius"];

  render() {
    return html`
      <h1>${this.title}</h1>
      <ul>
        ${this.listaBebidas.map(x => html`<li>${x}</li>`)}
      </ul>
    `;
  }
}
