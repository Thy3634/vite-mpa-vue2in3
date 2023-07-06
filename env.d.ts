/// <reference types="vite/client" />

declare module 'sub/*.vue' {
    import { Component } from 'vue2'
    const component: Component
    export default component
}

declare module 'sub/**/*.vue' {
    import { Component } from 'vue2'
    const component: Component
    export default component
}