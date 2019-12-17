import { FC, ReactNode } from 'react';
interface MyComponentProps {
    /** Inline prop doc example. Default `world` */
    myProp?: ReactNode;
}
/** MyComponent description. See [Docs](https://github.com/jonamat/react-library-boilerplate). */
declare const MyComponent: FC<MyComponentProps>;
export default MyComponent;
