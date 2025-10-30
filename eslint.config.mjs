import { base, recommended, strict } from './dist/index.js';
import tseslint from "typescript-eslint";

export default tseslint.config(
    base,
    recommended,
    strict
);