import * as React from 'react';

import './style.css';

export abstract class Props {
    height?: string = '640';
    width?: string = '480';
    onPhotoTaken: Function;
    className?: string;
}

export interface State {
    src: string;
    stream: MediaStream;
    width: string;
    height: string;
}

class Enroll extends React.Component<Props, State> {

    canvas: HTMLCanvasElement | null;
    video: HTMLVideoElement | null;

    streaming: boolean = false;
    photos: Array<string> = [];

    state: State = {
        height: '640',
        width: '480',
        src: '',
        stream: new MediaStream()
    };

    componentDidMount() {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then((stream: MediaStream) => {
                const src = window.URL.createObjectURL(stream);
                this.setState({ stream, src });
            })
            .catch((err: MediaStreamError)  => {
                throw new Error(err.name);
            });
        if (this.video === null) {
            return;
        }
        this.video.addEventListener('canplay', this.videoCanPlay.bind(this), false);
    }

    videoCanPlay(event: Event) {
        if (!this.streaming) {
            if (!this.video || !this.canvas) {
                return;
            }
            const height: string = `${this.video.videoHeight / (this.video.videoWidth / +this.state.width)}`;
            this.video.setAttribute('width', this.state.width);
            this.canvas.setAttribute('width', this.state.width);
            this.video.setAttribute('height', `${height}`);
            this.canvas.setAttribute('height', `${height}`);
            this.setState({
                height
            });
            this.streaming = true;
        }
    }

    componentWillUnmount() {
        if (this.state.stream) {
            if (this.state.stream.stop) {
                this.state.stream.stop();
            } else {
                if (this.state.stream.getVideoTracks) {
                    this.state.stream.getVideoTracks().map(track => track.stop());
                }
                if (this.state.stream.getAudioTracks) {
                    this.state.stream.getAudioTracks().map(track => track.stop());
                }
            }
        }
        if (this.state.src) {
            window.URL.revokeObjectURL(this.state.src);
        }
    }

    takePhoto() {
        if (!this.canvas || !this.video) {
            return;
        }
        const context = this.canvas.getContext('2d');
        if (!context) {
            return;
        }
        context.drawImage(this.video, 0, 0, +this.state.width, +this.state.height);

        const data = this.canvas.toDataURL('image/jpeg');
        const photo = data.replace('data:image/jpeg;base64,', '');
        this.photos.push(photo);

        this.forceUpdate();

        if (this.props.onPhotoTaken) {
            this.props.onPhotoTaken(photo);
        }
    }

    render() {
        const className = `host ${this.props.className || ''}`;
        return (
            <div className={className}>
                <section className="photos">
                    {this.photos.map((photo, index) => {
                        return (<img key={index} alt={`img${index}`} src={`data:image/png;base64,${photo}`} />);
                    })}
                </section>
                <video
                    autoPlay={true}
                    ref={video => this.video = video}
                    width={this.state.width}
                    height={this.state.height}
                    src={this.state.src}
                >
                    Video stream not available.
                </video>
                <section className="toolbar">
                    <button onClick={e => this.takePhoto()}>Take photos</button>
                </section>
                <canvas ref={canvas => this.canvas = canvas} />
            </div>
        );
    }
}

export {
    Enroll
};
