import SSE from '../src/main.ts';

document.addEventListener('alpine:init', () => {
    SSE(window.Alpine);
});
