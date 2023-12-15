import { defineCustomElement } from "vue";
import Counter from "./Counter.ce.vue";

export const CounterElement = defineCustomElement(Counter);

export function register() {
  customElements.define("vue-counter", CounterElement);
}
