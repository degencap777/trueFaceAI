import * as React from "react";

import { IMatchState } from "./IMatchState";
import { MatchProps } from "./MatchProps";

class Match extends React.Component<MatchProps, IMatchState> {

    public state: IMatchState = {
        height: "640",
        src: "",
        stream: new MediaStream(),
        width: "480",
    };

    private canvas: HTMLCanvasElement | null;
    private video: HTMLVideoElement | null;
    private streaming: boolean = false;

    public render() {
        const className = `host ${this.props.className || ""}`;
        return (
            <div className={className}>
                <video
                    autoPlay={true}
                    ref={(video) => this.video = video}
                    width={this.state.width}
                    height={this.state.height}
                    src={this.state.src}
                >
                    Video stream not available.
                </video>
                <section className="toolbar">
                    <button onClick={(e) => this.takePhoto()}>Take photos</button>
                </section>
                <canvas ref={(canvas) => this.canvas = canvas} />
            </div>
        );
    }

    public componentDidMount() {
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
        this.video.addEventListener("canplay", this.videoCanPlay.bind(this), false);
    }

    public componentWillUnmount() {
        if (this.state.stream) {
            if (this.state.stream.stop) {
                this.state.stream.stop();
            } else {
                if (this.state.stream.getVideoTracks) {
                    this.state.stream.getVideoTracks().map((track) => track.stop());
                }
                if (this.state.stream.getAudioTracks) {
                    this.state.stream.getAudioTracks().map((track) => track.stop());
                }
            }
        }
        if (this.state.src) {
            window.URL.revokeObjectURL(this.state.src);
        }
    }

    private videoCanPlay(event: Event) {
        if (!this.streaming) {
            if (!this.video || !this.canvas) {
                return;
            }
            const height: string = `${this.video.videoHeight / (this.video.videoWidth / +this.state.width)}`;
            this.video.setAttribute("width", this.state.width);
            this.canvas.setAttribute("width", this.state.width);
            this.video.setAttribute("height", `${height}`);
            this.canvas.setAttribute("height", `${height}`);
            this.setState({
                height,
            });
            this.streaming = true;
        }
    }

    private takePhoto() {
        if (!this.canvas || !this.video) {
            return;
        }
        const context = this.canvas.getContext("2d");
        if (!context) {
            return;
        }
        context.drawImage(this.video, 0, 0, +this.state.width, +this.state.height);

        const data = this.canvas.toDataURL("image/jpeg");
        const photo = data.replace("data:image/jpeg;base64,", "");

        if (this.props.onPhotoTaken) {
            this.props.onPhotoTaken(photo);
        }
    }
}

export {
    Match,
};
