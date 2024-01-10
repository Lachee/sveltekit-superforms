import type { Infer as InferSchema, Schema } from '@decs/typeschema';
import SuperDebug from './client/SuperDebug.svelte';
import type { AnyZodObject, ZodEffects, z } from 'zod';

export default SuperDebug;

export { superForm } from './client/superForm.js';
export {
	superValidate,
	type SuperValidated,
	type TaintedFields,
	type ValidationErrors
} from './superValidate.js';

export type MaybePromise<T> = T | Promise<T>;
export type Infer<T extends Schema> = NonNullable<InferSchema<T>>;
export type FieldPath<T extends object> = [keyof T, ...(string | number)[]];
export type { InputConstraints, InputConstraint } from '$lib/jsonSchema/constraints.js';

export { SuperFormError, SchemaError } from './errors.js';

export {
	type FormPath,
	type FormPathLeaves,
	type FormPathArrays,
	type FormPathType
} from './stringPath.js';

/**
 * @deprecated Use z.infer\<T\> instead, where T is the schema.
 */
export type ZodValidation<T extends AnyZodObject> = z.infer<
	| T
	| ZodEffects<T>
	| ZodEffects<ZodEffects<T>>
	| ZodEffects<ZodEffects<ZodEffects<T>>>
	| ZodEffects<ZodEffects<ZodEffects<ZodEffects<T>>>>
	| ZodEffects<ZodEffects<ZodEffects<ZodEffects<ZodEffects<T>>>>>
>;
