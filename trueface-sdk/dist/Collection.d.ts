import TruefaceBase from "./TruefaceBase";
export default class Collection extends TruefaceBase {
    readonly endpoint: string;
    name: string;
    unknowns: boolean;
    enrollmentId: string;
    collectionId: string;
    put(): Promise<Response>;
    delete(): Promise<Response>;
    get(): Promise<Response>;
}
