import * as React from "react";
import { EnrollProps } from "./EnrollProps";
import { IEnrollState } from "./IEnrollState";
declare class Enroll extends React.Component<EnrollProps, IEnrollState> {
    state: IEnrollState;
    private canvas;
    private video;
    private streaming;
    private photos;
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private videoCanPlay(event);
    private takePhoto();
}
export { Enroll };
