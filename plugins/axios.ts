import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
    const defaultUrl = "https://newsapi.org/v2/everything?q=geology&from=2023-03-07&sortBy=popularity&apiKey=dd6e64f517a0447cbb029493e3725285";

    let api = axios.create({
        baseUrl: defaultUrl,
        headers: {
            common: {},
        },
    });
    return {
        provide: {
            api: api,
        },
    };
});