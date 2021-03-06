import { run, env, args, writeFileSync, removeSync, readFileSync, exit } from "deno";
import { parse } from "https://deno.land/x/flags/mod.ts";
// import { config } from "https://deno.land/x/dotenv/dotenv.ts";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const ENV = env();
// const CONF = config();

const argsParsed = parse(args);
argsParsed._.shift();
const runnerType = argsParsed._.shift();

const runner = {
    start() {
        let pidJSON: any = {};
        try {
            const data = readFileSync('./pid.json');
            const pidJSONString = decoder.decode(data);
            pidJSON = JSON.parse(pidJSONString);
        } catch (error) {

        }
        if (pidJSON.pid && pidJSON.pidWatchmen) {
            console.error('当前目录下已启动过进程, 不得重复启动');
            this.ls();
            return false;
        }
        if (argsParsed.forever) {
            if (pidJSON.pid) {
                console.error('被守护的进程已启动');
                return false;
            }
            const process = run({
                args: ['deno', '-A', ...argsParsed._],
                cwd: ENV.PWD
            });
            const data = encoder.encode(JSON.stringify({ ...pidJSON, ...process }));
            writeFileSync('pid.json', data);

            console.log('启动成功');
            this.ls();

            process.status().then((status) => {
                if (status.success) {
                    removeSync('./pid.json');
                    console.log('运行结束, 进程守护停止');
                    exit();
                } else if (status.signal === 9) {
                    console.log('手动退出, 进程守护重启');
                    this.restart(1);
                } else {
                    console.log('异常退出, 进程守护重启');
                    this.restart(1);
                }
            });
        } else {
            if (pidJSON.ridWatchmen) {
                console.error('进程守护者已启动');
                return false;
            }
            const process = run({
                args: ['deno', '-A', '/Volumes/coding/Bolt/deno/x/denohup/mod.ts', 'start', '--forever', 'true', ...argsParsed._],
                cwd: ENV.PWD
            });
            const data = encoder.encode(JSON.stringify({
                ...pidJSON,
                ridWatchmen: process.rid,
                pidWatchmen: process.pid,
            }));
            writeFileSync('pid.json', data);
        }
    },
    ls() {
        let pidJSON;
        try {
            const data = readFileSync('./pid.json');
            const pidJSONString = decoder.decode(data);
            pidJSON = JSON.parse(pidJSONString);
            console.log(pidJSON);
        } catch (error) {

        }
    },
    stop() {
        try {
            const data = readFileSync('./pid.json');
            const pidJSONString = decoder.decode(data);
            const pidJSON = JSON.parse(pidJSONString);
            run({
                args: ['kill', '-9', `${pidJSON.pidWatchmen}`]
            });
            run({
                args: ['kill', '-9', `${pidJSON.pid}`]
            });
            removeSync('./pid.json');
            console.error('停止成功');
        } catch (error) {

        }
    },
    restart(killed) {
        let pidJSON: any = {};
        try {
            const data = readFileSync('./pid.json');
            const pidJSONString = decoder.decode(data);
            pidJSON = JSON.parse(pidJSONString)
        } catch (error) {

        }
        if (!killed) {
            run({
                args: ['kill', '-9', `${pidJSON.pid}`]
            });
        } else {
            const data = encoder.encode(JSON.stringify({
                ...pidJSON,
                rid: undefined,
                pid: undefined,
            }));
            writeFileSync('pid.json', data);
            this.start();
        }
    }
};

if (runnerType && runnerType in runner) {
    runner[runnerType]();
} else {

}
