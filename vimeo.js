import React, {Component} from 'react';

export default class Vimeo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoSrc: "https://player.vimeo.com/video/" + this.props.video
        };
    }

    render() {
        return (
            <div>
                <iframe width={this.props.width} height={this.props.height} src={this.state.videoSrc} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
        );
    }
}
