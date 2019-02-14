import { removeSync, env, args } from "deno";

if (args[1]) {
    let url = args[1];
    if (args[1] === '-a' || args[1] === '--all') {
        url = '';
    }

    const ENV = env();

    const rmFilePath = `${ENV.HOME}/.deno/deps/${url.replace('://', '/')}`;

    try {
        removeSync(rmFilePath, { recursive: true });
        console.log(`rm ${rmFilePath} ok`);
    } catch (error) {
        throw error;
    }
} else {
    console.log(`
        dcc
            deno cache clean, reloading deps when next running.
        ----
        dcc --all | -a      - remove all cache
        dcc <remote_url>    - remove cache for this remote_url
        ----
        more help,
            visit https://deno.boltdoggy.com/#/?id=dcc
    `);
}
