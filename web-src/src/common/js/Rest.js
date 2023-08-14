import { Instance, Instance_multi } from "./Instance";

const RestServer = (method, url, data) => {
    switch (method) {
        case "get":
            return Instance.get(url, data, { withCredentials: true });

        case "post":
            return Instance.post(url, data, { withCredentials: true });

        case "put":
            return Instance.put(url, data, { withCredentials: true });

        case "delete":
            return Instance.delete(url, data, { withCredentials: true });

        case "post_multi":
            return Instance_multi.post(url, data, { withCredentials: true });

        case "put_multi":
            return Instance_multi.put(url, data, { withCredentials: true });
        default:
            break;
    }
};

export { RestServer };
