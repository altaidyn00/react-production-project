
declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg' {
  import type React from 'react'
  const content: React.VFC<React.SVGProps<SVGSVGElement>>
  export default content
}

declare const __IS_DEV__: boolean
