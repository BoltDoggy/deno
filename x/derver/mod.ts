import * as deno from "deno";
import { serve } from "https://deno.land/x/http/server.ts";
import { config } from "https://deno.land/x/dotenv/dotenv.ts";

const { readFileSync, cwd } = deno;

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const s = serve("0.0.0.0:8000");

async function main() {
    for await (const req of s) {
        try {
            const handlerCode = readFileSync(`${cwd()}${req.url}.ts`);
            const handlerString = decoder.decode(handlerCode);

            const globals = {
                req, deno, config
            };

            const globalsKeys = Object.keys(globals);
            const globalsValues = globalsKeys.map((key) => globals[key]);

            new Function(...globalsKeys, handlerString)(...globalsValues);
        } catch (error) {
            console.log(error);
            req.respond({ status: 404, body: encoder.encode("404!") });
        }
    }
}

main();
