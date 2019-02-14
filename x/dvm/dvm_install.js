import { writeFileSync, env, chmodSync } from "deno";

const ENV = env();

const encoder = new TextEncoder();
const data = encoder.encode(`#!/bin/sh
deno https://deno.boltdoggy.com/x/dvm/dvm.js
`);

const dvmFilePath = `${ENV.HOME}/.deno/bin/dvm`;
writeFileSync(dvmFilePath, data);
chmodSync(dvmFilePath, 0o777);