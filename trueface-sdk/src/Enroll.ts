import Trueface from "./Trueface";
import TruefaceBase from "./TruefaceBase";

export default class Enroll extends TruefaceBase {
    public readonly endpoint: string = `${Trueface.base}/v1/enroll`;
    private length: number = 0;
    public set name(name: string) {
        this.data[`name`] = name;
    }
    public set collectionId(collectionId: string) {
        this.data[`collection_id`] = collectionId;
    }
    public set enrollmentId(enrollmentId: string) {
        this.data[`enrollment_id`] = enrollmentId;
    }
    public add(image: string) {
        this.data[`img${this.length}`] = image;
        this.length++;
    }
    public get size(): number {
        return this.length;
    }
    public get put(): Promise<Response> {
        if (this.data[`enrollment_id`] === "") {
            throw new Error("You need to set enrollment id");
        }
        return this.post("PUT");
    }
    public get delete(): Promise<Response> {
        if (this.data[`enrollment_id`] === "") {
            throw new Error("You need to set enrollment id");
        }
        return this.post("DELETE");
    }
}
