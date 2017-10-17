import Trueface from "./Trueface";

export default abstract class TruefaceBase {
    public abstract endpoint: string;
    protected data: object = Object.create(null);
    public post(): Promise<Response> {
        return fetch(this.endpoint, {
            body: JSON.stringify(this.data),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "x-api-key": Trueface.key,
            },
            method: "POST",
            mode: "no-cors",
        });
    }
}
