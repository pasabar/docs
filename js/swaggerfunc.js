import SwaggerUIBundle from 'https://cdn.skypack.dev/swagger-ui-dist/swagger-ui-bundle.js';

export let URLData = "https://raw.githubusercontent.com/pasabar/swagger/main/yaml/openapi.yaml";

export const UIData = SwaggerUIBundle({
    url: URLData,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset
    ],
    requestInterceptor: (request) => {
        // Tambahkan logika untuk menyertakan token ke setiap permintaan
        // Contoh: request.headers['Login'] = 'your-api-key';

        // Ambil token API key dari tempat penyimpanan atau tempat lain yang sesuai
        const apiKey = localStorage.getItem('api_key');

        // Sisipkan token API key ke header permintaan jika tersedia
        if (apiKey) {
            request.headers['Login'] = apiKey;
        }

        return request;
    },
    plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
    ],
});

export function setSwagger() {
    return UIData;
}