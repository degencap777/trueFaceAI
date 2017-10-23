import Trueface from "./Trueface";

export default abstract class TruefaceBase {
    public abstract endpoint: string;
    protected data: object = Object.create(null);
    public post(fetchMethod: string = "POST"): Promise<Response> {
        if (Trueface.key === "") {
            throw new Error("You need to set API key");
        }
        const fetchHeaders = new Headers();
        fetchHeaders.append("Accept", "application/json");
        fetchHeaders.append("Content-Type", "application/json");
        fetchHeaders.append("x-api-key", Trueface.key);
        return fetch(this.endpoint, {
            body: JSON.stringify(this.data),
            headers: fetchHeaders,
            method: fetchMethod,
        });
    }
}
