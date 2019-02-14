import { writeFileSync, env, chmodSync, args } from "deno";

if (args[1] && args[2]) {
    const url = args[1];
    const name = args[2];

    const ENV = env();

    const encoder = new TextEncoder();
    const data = encoder.encode(`#!/bin/sh
deno ${url} "$@"
`);

    const dvmFilePath = `${ENV.HOME}/.deno/bin/${name}`;
    writeFileSync(dvmFilePath, data);
    chmodSync(dvmFilePath, 0o777);
} else {
    console.log(`
        dpm
            deno package manager, install global command for deno.
        ----
        dpm <remote_url> <command_name> - install command of this remote_url to global
        ----
        more help,
            visit https://deno.boltdoggy.com/#/?id=dpm
    `);
}
