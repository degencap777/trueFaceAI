import Trueface from "./Trueface";
import TruefaceBase from "./TruefaceBase";

export default class Match extends TruefaceBase {
    public readonly endpoint: string = `${Trueface.base}/v1/match`;
    public set image(img: string) {
        this.data[`img`] = img;
    }
    public set id(id: string) {
        this.data[`id`] = id;
    }
    public set threshold(threshold: number) {
        this.data[`threshold`] = threshold;
    }
}
