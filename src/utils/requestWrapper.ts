import axios from 'axios';

interface Options {
    url: string;
    method: "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | "purge" | "PURGE" | "link" | "LINK" | "unlink" | "UNLINK" | undefined;
    data?: object;
    params?: object;
}

function configureRequest(options: Options) {
    const client = axios.create({
        baseURL: options.url,
        method: options.method,
        data: options.data,
        params: options.params,
    });
    return client(options);
}

export default async function requestWrapper(options: Options) {
    return configureRequest(options);
}