export type Mutable<out T> = {
    -readonly [P in keyof T]: T[P];
};
