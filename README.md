# ts-assertions

A tiny library of assertions that can be used to validate data integrity and optionally produce type inferences of the returned value at the same time. Each of these functions throws if its conditions are not met. There is additionally an `IAssertion` interface which can be used externally as a generic type definition for all assertion functions, and an `AssertionError` class that can be used to identify any exception coming from this library.

If you want to assert the validity of a condition, use `assert`:

**assert(condition: any, message?: string | null): true**

```javascript
assert(1 === 1, 'This will not throw.');
assert(1 === 2, 'This will throw.');
```

If you want to assert the validity of a value and have typescript respect the validated type of the , use `assertValid`:

**assertValid&lt;T&gt;(value: any, message?: string | null, validator?: (value: any) => boolean): T**

```javascript
assertValid<number>(1, 'This will not throw.');
assertValid<boolean>(false, 'This will throw.');
assertValid<string[]>(
  [ 'one', 'two', 'three', ],
  'This will not throw.',
  (value) => (
    Array.isArray(value) && !value.find((item) => typeof item !== 'string')
  )
);
```

The type argument for `assertValid` cannot be inferred and must be provided for every usage. The default validator is coercing `value` to `boolean` and checking whether it is `true`.
