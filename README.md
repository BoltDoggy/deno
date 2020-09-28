# Deno.BoltDoggy.com

Some modules for [Deno](https://deno.land/).

- dpm - deno package manager, install global command for deno.
- dcc - deno cache clean, reloading deps when next running.
- denohup - deno nohup, like pm2 of node.
- derver - deno simple server, create a ts file, and respond your body, just like a static server.

## dpm `deprecated`

> !!!deprecated!!!, use `deno install` instead of

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
# example: denohup start https://deno.boltdoggy.com/x/denohup/test.ts
# or
denohup ls # list pid of this server
# or
denohup stop # stop this server
```

## derver

deno simple server, create a ts file, and respond your body, just like a static server.

```
# install
dpm https://deno.boltdoggy.com/x/derver/mod.ts derver

# using
derver

# or use denohup
denohup start https://deno.boltdoggy.com/x/derver/mod.ts
# and you will nohup
```

create `./xxx.ts`:

```
req.respond({ body: new TextEncoder().encode("Hello Doggy!") });

// you can use req / deno / config, but can't import by yourself.
```

visit `http://127.0.0.1:8000/xxx`, you will got `Hello Doggy!`;

