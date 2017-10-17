import Trueface from "./Trueface";
import TruefaceBase from "./TruefaceBase";

export default class Match extends TruefaceBase {
    public readonly endpoint: string = `${Trueface.base}/v1/match`;
    set image(img: string) {
        this.data[`img`] = img;
    }
    set id(id: string) {
        this.data[`id`] = id;
    }
    set threshold(threshold: number) {
        this.data[`threshold`] = threshold;
    }
}
