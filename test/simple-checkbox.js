import { LitElement } from 'lit-element';
import { CheckedElementMixin } from '../index.js';

class SimpleCheckbox extends CheckedElementMixin(LitElement) {}
window.customElements.define('simple-checkbox', SimpleCheckbox);
