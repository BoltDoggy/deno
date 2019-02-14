# Deno.BoltDoggy.com

Some module for [Deno](https://deno.land/).

- dpm - deno package manager, install global command for deno.
- dcc - deno cache clean, reloading deps when next running.

## dpm

deno package manager, install global command for deno.

``` sh
# install
deno https://deno.boltdoggy.com/x/dpm/install.js

# using
dpm <remote_url> <command_name> # install command of this remote_url to global
# more examples, you can see `dcc install`.
```

## dcc

deno cache clean, reloading deps when next running.

```sh
# install
dpm https://deno.boltdoggy.com/x/dcc/mod.js dcc

# using
dcc <remote_url> # remove cache for this remote_url
# or
dcc --all # or dcc -a, remove all cache
```
