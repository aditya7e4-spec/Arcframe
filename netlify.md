The Netlify deploy errored, with the following guidance provided:

Diagnosis

- Relevant log lines: failure starts at [line 23](#L23), the npm install error path is shown at [line 25](#L25), and the install script fails with a permission-denied EACCES when trying to run the esbuild binary at [line 32](#L32) and [line 40](#L40). The installer tries to validate the esbuild binary at [line 36](#L36).
- Error type and cause: npm install fails because the esbuild installer attempted to execute node_modules/esbuild/bin/esbuild but got EACCES (permission denied). That usually means the esbuild binary in the checked-out repo or cache is not executable (committed node_modules with wrong file mode, or a bad cache/checkout), so the install script cannot run the binary to validate/download the correct binary.

Solution

1) Verify whether node_modules was accidentally committed
- Run locally in your repo root:
```bash
git ls-files node_modules | head -n 5
```
If this prints files, node_modules is committed. Remove it from the repo and add it to .gitignore:

```bash
git rm -r --cached node_modules
printf '\nnode_modules/\n' >> .gitignore
git add .gitignore
git commit -m "Remove node_modules from repo and ignore it"
git push
```

2) Clear Netlify cache and redeploy
- On Netlify: Deploys → Trigger deploy → "Clear cache and deploy site" (or use the Netlify UI/CLI to clear the build cache). This ensures Netlify installs fresh packages instead of using a cached non-executable binary.

3) (Optional, temporary) If you cannot remove node_modules immediately, add a safe postinstall to fix exec bit while you fix the repo:
- Add to package.json:
```json
"scripts": {
  "postinstall": "chmod +x ./node_modules/esbuild/bin/esbuild || true"
}
```
This forces the esbuild binary to be executable during install (not ideal long-term — prefer removing node_modules from the repo).

4) Rebuild
- After pushing the fix and clearing the Netlify cache, trigger a new deploy. The install should now proceed and esbuild’s installer can run correctly.

Notes
- Root cause is permissions on the esbuild binary inside node_modules; the recommended, permanent fix is to remove node_modules from version control and let Netlify perform a clean install.

*✅ In this repo the fix has already been applied: `node_modules` was removed from Git, a `.gitignore` has been added to block it, and a temporary `postinstall` script was added to package.json to guard the esbuild binary until packages are re‑installed.*

The relevant error logs are:

Line 13: mise [36m~/.config/mise/config.toml[0m tools: [34mruby[0m@3.4.8
Line 14: mise [36m~/.config/mise/config.toml[0m tools: [34mgo[0m@1.26.0
Line 15: Downloading and installing node v22.22.1...
Line 16: Downloading https://nodejs.org/dist/v22.22.1/node-v22.22.1-linux-x64.tar.xz...
Line 17: Computing checksum with sha256sum
Line 18: Checksums matched!
Line 19: Now using node v22.22.1 (npm v10.9.4)
Line 20: Enabling Node.js Corepack
Line 21: No npm workspaces detected
Line 22: Installing npm packages using npm version 10.9.4
Line 23: Failed during stage 'Install dependencies': dependency_installation script returned non-zero exit code: 1
Line 24: npm error code 1
Line 25: npm error path /opt/build/repo/node_modules/esbuild
Line 26: npm error command failed
Line 27: npm error command sh -c node install.js
Line 28: npm error node:internal/child_process:1120
Line 29: npm error     result.error = new ErrnoException(result.error, 'spawnSync ' + options.file);
Line 30: npm error                    ^
Line 31: npm error
Line 32: npm error <ref *1> Error: spawnSync /opt/build/repo/node_modules/esbuild/bin/esbuild EACCES
Line 33: npm error     at Object.spawnSync (node:internal/child_process:1120:20)
Line 34: npm error     at spawnSync (node:child_process:902:24)
Line 35: npm error     at Object.execFileSync (node:child_process:945:15)
Line 36: npm error     at validateBinaryVersion (/opt/build/repo/node_modules/esbuild/install.js:102:28)
Line 37: npm error     at /opt/build/repo/node_modules/esbuild/install.js:287:5 {
Line 38: npm error   errno: -13,
Line 39: npm error   code: 'EACCES',
Line 40: npm error   syscall: 'spawnSync /opt/build/repo/node_modules/esbuild/bin/esbuild',
Line 41: npm error   path: '/opt/build/repo/node_modules/esbuild/bin/esbuild',
Line 42: npm error   spawnargs: [ '--version' ],
Line 43: npm error   error: [Circular *1],
Line 44: npm error   status: null,
Line 45: npm error   signal: null,
Line 46: npm error   output: null,
Line 47: npm error   pid: 0,
Line 48: npm error   stdout: undefined,
Line 49: npm error   stderr: undefined
Line 50: npm error }
Line 51: npm error
Line 52: npm error Node.js v22.22.1
Line 53: npm error A complete log of this run can be found in: /opt/buildhome/.npm/_logs/2026-03-06T15_43_33_916Z-debug-0.log
Line 54: Error during npm install
Line 55: Failing build: Failed to install dependencies
Line 56: Finished processing build request in 9.767s