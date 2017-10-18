import * as React from "react";
import { IMatchState } from "./IMatchState";
import { MatchProps } from "./MatchProps";
declare class Match extends React.Component<MatchProps, IMatchState> {
    state: IMatchState;
    private canvas;
    private video;
    private streaming;
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private videoCanPlay(event);
    private takePhoto();
}
export { Match };
