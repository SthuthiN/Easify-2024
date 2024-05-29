/* eslint-disable jsx-a11y/iframe-has-title */
import * as React from 'react';
import './PPT.scss';

export interface IPPTProps {
    documentPath: string;
}

export interface IPPTState {
    documentPath: string;
}

export class PPTComponent extends React.Component<IPPTProps, IPPTState> {

    constructor(props: IPPTProps, state: IPPTState) {
        super(props);                    
        this.state = {
            documentPath: this.props.documentPath
        }
    }
    componentDidUpdate(prevProps: IPPTProps) {
        if (prevProps.documentPath !== this.props.documentPath) {
            this.setState({
                documentPath: this.props.documentPath,
            });
        }
    }

    componentDidMount() {
        const scriptUrl = 'https://content.powerapps.com/resource/webplayerbus/hashedresources/s5p7btlk9sp1c/js/es6.player-boot.js';

        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;

        document.body.appendChild(script);
    }

    componentWillUnmount() {
        const scriptUrl = 'https://content.powerapps.com/resource/webplayerbus/hashedresources/s5p7btlk9sp1c/js/es6.player-boot.js';
        const script = document.querySelector(`script[src="${scriptUrl}"]`);
        if (script) {
            document.body.removeChild(script);
        }
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <iframe src={this.state.documentPath} className="iframe-loader" width="100%" height="100%" frameBorder="0"></iframe>
            </div>
        )
    }
}