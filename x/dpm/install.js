import { writeFileSync, env, chmodSync } from "deno";

const ENV = env();

const encoder = new TextEncoder();
const data = encoder.encode(`#!/bin/sh
deno https://deno.boltdoggy.com/x/dpm/mod.js "$@"
`);

const dvmFilePath = `${ENV.HOME}/.deno/bin/dvm`;
writeFileSync(dvmFilePath, data);
chmodSync(dvmFilePath, 0o777);
