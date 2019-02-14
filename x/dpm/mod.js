import { writeFileSync, env, chmodSync, args } from "deno";

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
