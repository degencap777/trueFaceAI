import TruefaceBase from "./TruefaceBase";
export default class Match extends TruefaceBase {
    readonly endpoint: string;
    image: string;
    id: string;
    threshold: number;
}
