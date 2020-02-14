import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { create } from 'react-test-renderer';

import MyComponent from '..';

const consoleError = jest.fn();
Object.defineProperty(console, 'error', {
    get() {
        return consoleError;
    },
});

beforeEach(() => {
    consoleError.mockClear();
});

const renderComponent = (props?: React.ComponentProps<typeof MyComponent>) => render(<MyComponent {...props} />);

describe('Component', () => {
    it('render properly', () => {
        expect(() => {
            const { queryByTestId } = renderComponent({ myProp: <span data-testid="children">mars</span> });

            expect(consoleError).not.toBeCalled();
            expect(queryByTestId('children')).toBeInTheDocument();
        }).not.toThrowError();
    });

    it('validates props', () => {
        expect(() => renderComponent({ myProp: { not: 'a react node' } })).toThrowError();
    });

    it('matches the snapshot', () => {
        const componentSnapshoot = create(<MyComponent />).toJSON();
        expect(componentSnapshoot).toMatchSnapshot();
    });
});
