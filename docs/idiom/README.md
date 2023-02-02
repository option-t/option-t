# Idioms of this library.

Basically, this project follows APIs which inspired by [Rust's `std::option`](https://doc.rust-lang.org/std/option/),
and it's very low priority to implement APIs which Rust's one does not implement.

And implementing a new API increases our file size. It would be a problem as the library providing base primitive.
So we don't like to implement them without the concrete reasons which proves a new API is useful.

But we often need a glue code for the interoperability to JavaScript world.
This document provides some idioms of this library for the interoperability to JavaScript world.

* [Express Progressive data](./express_progress.md)
