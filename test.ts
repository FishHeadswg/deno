// deno run --allow-read --allow-net test.ts
import { serve } from "https://deno.land/std@0.82.0/http/server.ts";
const server = serve({port:8000});
 
for await (const req of server) {
    req.respond({body : "node".split("").sort().join("")});
}

console.log(Deno.cwd());
console.log(Deno.pid);
const wasmBin = new Uint8Array([0x00, 0x61, 0x73, 0x6d,0x01,0x0,0x0,0x0]);
const wasmMod = new WebAssembly.Module(wasmBin);
