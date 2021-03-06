# derver

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

## config

based on https://github.com/pietvanzoen/deno-dotenv.

Setup a .env file in the root of your project.

```
# .env
GREETING=hello world
```

```
# xxx.ts
console.log(config());
```

then visit `http://127.0.0.1:8000/xxx`, console will show

```
{ GREETING: "hello world" }
```
