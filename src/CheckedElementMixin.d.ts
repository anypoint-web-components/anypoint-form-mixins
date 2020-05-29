import { ValidatableMixin } from '@anypoint-web-components/validatable-mixin';
declare function CheckedElementMixin<T extends new (...args: any[]) => {}>(base: T): T & CheckedElementMixinConstructor;
interface CheckedElementMixinConstructor {
  new(...args: any[]): CheckedElementMixin;
}

interface CheckedElementMixin extends ValidatableMixin {
  /**
   * Gets or sets the state, `true` is checked and `false` is unchecked.
   */
  checked: boolean;
  /**
   * If true, the button toggles the active state with each click or press
   * of the spacebar.
   */
  toggles: boolean;
  /**
   * The name of this form element.
   */
  name: string;
  /**
   * The value of this form control
   */
  value: any;
  /**
   * Set to true to mark the input as required. If used in a form, a
   * custom element that uses this mixin should also use
   * AnypointValidatableMixin and define a custom validation method.
   * Otherwise, a `required` element will always be considered valid.
   * It's also strongly recommended to provide a visual style for the element
   * when its value is invalid.
   */
  required: boolean;
  /**
   * Disabled state of the control
   */
  disabled: boolean;

  /**
   * @returns false if the element is required and not checked, and true
   * otherwise.
   */
  _getValidity(): boolean;

  /**
   * Updates the `aria-required` label when `required` is changed.
   */
  _requiredChanged(required: boolean): void;

  /**
   * Fire `iron-changed`for compatybility with iron elements, `change` event
   * for consistency with HTML elements, and `checked-changed` for Polymer.
   */
  _checkedChanged(value: boolean): void;

  /**
   * Reset value to 'on' if it is set to `undefined`.
   */
  _valueChanged(value: any): void;
}
export {CheckedElementMixinConstructor};
export {CheckedElementMixin};
