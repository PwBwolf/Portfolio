import { OnDestroy, OnInit } from '@angular/core';
import { ControlGroup } from '../model';
import { ControlContainer } from './control_container';
import { Form } from './form_interface';
import { AsyncValidatorFn, ValidatorFn } from './validators';
export declare const controlGroupProvider: any;
/**
 * Creates and binds a control group to a DOM element.
 *
 * This directive can only be used as a child of {@link NgForm} or {@link NgFormModel}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/7EJ11uGeaggViYM6T5nq?p=preview))
 *
 * ```typescript
 * @Component({
 *   selector: 'my-app',
 *   template: `
 *     <div>
 *       <h2>Angular Control &amp; ControlGroup Example</h2>
 *       <form #f="ngForm">
 *         <div ngControlGroup="name" #cgName="ngForm">
 *           <h3>Enter your name:</h3>
 *           <p>First: <input ngControl="first" required></p>
 *           <p>Middle: <input ngControl="middle"></p>
 *           <p>Last: <input ngControl="last" required></p>
 *         </div>
 *         <h3>Name value:</h3>
 *         <pre>{{valueOf(cgName)}}</pre>
 *         <p>Name is {{cgName?.control?.valid ? "valid" : "invalid"}}</p>
 *         <h3>What's your favorite food?</h3>
 *         <p><input ngControl="food"></p>
 *         <h3>Form value</h3>
 *         <pre>{{valueOf(f)}}</pre>
 *       </form>
 *     </div>
 *   `
 * })
 * export class App {
 *   valueOf(cg: NgControlGroup): string {
 *     if (cg.control == null) {
 *       return null;
 *     }
 *     return JSON.stringify(cg.control.value, null, 2);
 *   }
 * }
 * ```
 *
 * This example declares a control group for a user's name. The value and validation state of
 * this group can be accessed separately from the overall form.
 *
 * @experimental
 */
export declare class NgControlGroup extends ControlContainer implements OnInit, OnDestroy {
    private _validators;
    private _asyncValidators;
    constructor(parent: ControlContainer, _validators: any[], _asyncValidators: any[]);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Get the {@link ControlGroup} backing this binding.
     */
    readonly control: ControlGroup;
    /**
     * Get the path to this control group.
     */
    readonly path: string[];
    /**
     * Get the {@link Form} to which this group belongs.
     */
    readonly formDirective: Form;
    readonly validator: ValidatorFn;
    readonly asyncValidator: AsyncValidatorFn;
}
