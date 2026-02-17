# Explore Core Node.js

A clean, progressive Node.js core learning lab.

## Goal
Understand how Node works under the hood: event loop, process, fs, events, http, streams, and worker threads.

## Project Structure
- `src/00-foundation` -> event loop, process, path, buffer
- `src/01-fs` -> sync vs async I/O, promises API, file streaming
- `src/02-events` -> custom events using `EventEmitter`
- `src/03-http` -> basic and routed HTTP servers
- `src/04-streams` -> pipe, backpressure, gzip
- `src/05-worker-threads` -> CPU blocking vs worker thread offloading
- `src/data` -> sample data used by examples

## Run Lessons
Use scripts in order.

```bash
npm run lesson:00
npm run lesson:01
npm run lesson:02
npm run lesson:03

npm run lesson:10
npm run lesson:11
npm run lesson:12

npm run lesson:20

npm run lesson:30
npm run lesson:31

npm run lesson:40
npm run lesson:41
npm run lesson:42

npm run lesson:50
npm run lesson:51
```

## HTTP/Stream Lessons Testing
For server lessons, open a second terminal:

```bash
curl http://localhost:5000
curl http://localhost:5000/users
curl -OJ http://localhost:5001/download
curl http://localhost:5002/stream
curl --compressed http://localhost:5003/gzip
```

## Suggested Next Expansion
- Add tests with Node's built-in test runner (`node:test`)
- Add child process and cluster examples
- Add TCP/UDP (`net`, `dgram`) exercises
