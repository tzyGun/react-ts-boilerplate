import * as React from 'react';

interface AppProps {
    appProps?: any
}

export default class App extends React.Component<AppProps>{
    constructor(props: AppProps) {
        super(props)
    }
    render() {
        return(
            <div>Hello {this.props.appProps}</div>
        )
    }
}