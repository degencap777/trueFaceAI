import Trueface from "./Trueface";
import TruefaceBase from "./TruefaceBase";

export default class Enroll extends TruefaceBase {
    public readonly endpoint: string = `${Trueface.base}/v1/enroll`;
    private length: number = 0;
    public set name(name: string) {
        this.data[`name`] = name;
    }
    public add(image: string) {
        this.data[`img${this.length}`] = image;
        this.length++;
    }
    public get size(): number {
        return this.length;
    }
}
