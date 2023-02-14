export function buildSVGLoader() {
    return {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    };
}
