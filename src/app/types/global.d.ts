declare module '*.scss' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

interface ExtendSVGProps<T> extends React.SVGProps<T> {
    title?: string | undefined;
}
// declare global {
//     namespace React {
//         interface SVGProps<T> {
//             title?: string;
//         }
//     }
// }

declare module '*.svg' {
    import type React from 'react';

    const SVG: React.VFC<ExtendSVGProps<SVGSVGElement>>;
    // const SVG: React.VFC<SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;
