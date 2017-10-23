import TruefaceBase from "./TruefaceBase";
export default class Enroll extends TruefaceBase {
    readonly endpoint: string;
    private length;
    name: string;
    collectionId: string;
    enrollmentId: string;
    add(image: string): void;
    readonly size: number;
    readonly put: Promise<Response>;
    readonly delete: Promise<Response>;
}
