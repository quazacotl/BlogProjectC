declare module '*.module.css';
declare module '*.module.scss';

declare module '*.jpg';
declare module '*.png';
declare module '*.woff2';
declare module '*.woff';
declare module '*.ttf';


declare module '*.svg' {
    import React = require('react');
    const src: React.FC<React.SVGProps<SVGSVGElement>>
    export default src
}

declare const __IS_DEV__: boolean