import Trueface from "./Trueface";
import TruefaceBase from "./TruefaceBase";

export default class Collection extends TruefaceBase {
    public readonly endpoint: string = `${Trueface.base}/v1/collection`;
    public set name(name: string) {
        this.data[`name`] = name;
    }
    public set unknowns(unknowns: boolean) {
        this.data[`unknowns`] = unknowns;
    }
    public set enrollmentId(enrollmentId: string) {
        this.data[`enrollment_id`] = enrollmentId;
    }
    public set collectionId(collectionId: string) {
        this.data[`collection_id`] = collectionId;
    }
    public put(): Promise<Response> {
        return this.post("PUT");
    }
    public delete(): Promise<Response> {
        return this.post("DELETE");
    }
    public get(): Promise<Response> {
        return this.post("GET");
    }
}
