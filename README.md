# Deno.BoltDoggy.com

Some modules for [Deno](https://deno.land/).

- dpm - deno package manager, install global command for deno.
- dcc - deno cache clean, reloading deps when next running.

## dpm

deno package manager, install global command for deno.

``` sh
# install
deno https://deno.boltdoggy.com/x/dpm/install.js

# using
dpm <remote_url> <command_name> # install command of this remote_url to global
# more examples, you can see `install of dcc`.
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

## denohup

deno nohup, like pm2 of node.

```sh
# install
dpm https://deno.boltdoggy.com/x/denohup/mod.ts denohup

# using
denohup start <deno_file> # start a server
# or
denohup ls # list pid of this server
# or
denohup stop # stop this server
```
