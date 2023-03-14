export function buildSVGLoader() {
    return {
        test: /\.svg$/i,
        use: [{ loader: '@svgr/webpack', options: { titleProp: true } }],
    };
}
