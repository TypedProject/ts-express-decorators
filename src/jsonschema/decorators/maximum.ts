import {PropertyMetadata} from "../class/PropertyMetadata";
import {PropertyRegistry} from "../registries/PropertyRegistry";

/**
 * The value of `maximum` MUST be a number, representing an inclusive upper limit for a numeric instance.
 *
 * If the instance is a number, then this keyword validates only if the instance is less than or exactly equal to `maximum`.
 *
 * ## Example
 *
 * ```typescript
 * class Model {
 *    @Maximum(10)
 *    property: number;
 * }
 * ```
 *
 * @param {number} maximum
 * @param {boolean} exclusive
 * @returns {Function}
 * @decorator
 * @ajv
 * @jsonschema
 */
export function Maximum(maximum: number, exclusive: boolean = false) {
    return PropertyRegistry.decorate((propertyMetadata: PropertyMetadata) => {
        propertyMetadata.type = Number;

        if (exclusive) {
            propertyMetadata.schema.exclusiveMaximum = maximum;
        } else {
            propertyMetadata.schema.maximum = maximum;
        }
    });
}