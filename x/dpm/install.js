import { writeFileSync, env, chmodSync, args } from "deno";

const url = 'https://deno.boltdoggy.com/x/dpm/mod.js';
const name = 'dpm';

const ENV = env();

const encoder = new TextEncoder();
const data = encoder.encode(`#!/bin/sh
deno ${url} "$@"
`);

const dvmFilePath = `${ENV.HOME}/.deno/bin/${name}`;
writeFileSync(dvmFilePath, data);
chmodSync(dvmFilePath, 0o777);
