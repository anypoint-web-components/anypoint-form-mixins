import { LitElement } from 'lit-element';
import { CheckedElementMixin } from '../checked-element-mixin.js';

class SimpleCheckbox extends CheckedElementMixin(LitElement) {
}
window.customElements.define('simple-checkbox', SimpleCheckbox);
