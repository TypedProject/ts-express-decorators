import {Format} from "./format";

/**
 * Apply an email validation on property.
 *
 * ## Example
 *
 * ```typescript
 * class Model {
 *    @Email()
 *    property: string;
 * }
 * ```
 *
 * @returns {Function}
 * @decorator
 * @ajv
 * @jsonschema
 */
export function Email() {
    return Format("email");
}