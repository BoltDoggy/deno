# denohup

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
