
# alpine-sse

Alpine SSE is a lightweight library for integrating [Server-Sent Events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) with [Alpine.js](https://alpinejs.dev/). It provides Alpine.js magic helpers and directives for real-time updates, fragment merging, and more, using a simple API.

## Features

- Alpine.js magic helper `$sse` for easy SSE requests
- Alpine directive `x-sse` for declarative SSE integration
- Supports fragment merging, Alpine data updates, script execution, and more
- View transitions support (where available)
- Written in TypeScript

## Getting Started

Clone this repository and install dependencies:

```bash
git clone https://github.com/flying-swallow/alpine-sse.git
cd alpine-sse
npm install
```

To build the library:

```bash
npm run build
```

This will generate UMD bundles in `dist/alpine-sse.js` and `dist/alpine-sse.min.js`.

To develop with automatic rebuilds:

```bash
npm run dev
```


```html
<div x-data="{ url: '/events', data: {} }" x-sse="{ url: url, payload: { foo: 'bar' } }" @sse-merge-alpine-data.window="Object.assign(data, $event.detail)">
    <!-- Your content here -->
</div>
```

See the `src/main.ts` for all available options and event types.

## API

### Magic Helper: `$sse`

```js
$sse.get(url, options)
$sse.post(url, options)
// ...patch, put, delete
```

### Directive: `x-sse`

```html
<div x-sse="{ url: '/events', payload: { ... } }"></div>
```

#### Options
- `url`: The SSE endpoint
- `payload`: Data to send (for POST/PUT/PATCH)
- `headers`: Custom headers
- `contentType`: 'json' or 'form'
- `openWhenHidden`: Keep connection open when tab is hidden
- `retryInterval`, `retryScaler`, `retryMaxWaitMs`, `retryMaxCount`: Retry options

#### Events
- `sse-merge-alpine-data`
- `sse-execute-alpine-data`
- `sse-remove-fragments`
- `sse-execute-script`
- `sse-merge-fragments`

See `src/main.ts` for details on each event.

## Development

- Source: `src/`
- Build entry: `builds/cdn.js`
- Output: `dist/`

## License

[MIT](LICENSE).
