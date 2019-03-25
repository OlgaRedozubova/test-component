import * as React from 'react';

export interface HelloWorldProps {
    color: string;
}

export default class HelloWorld extends React.Component<HelloWorldProps> {
    render() {
        return (
            <div style={{ color: this.props.color }}>
                Hello world!
            </div>
        );
    }
}