export function buildSVGLoader() {
    return {
        test: /\.svg$/i,
        use: [{ 
            loader: '@svgr/webpack', 
            options: { 
                titleProp: true, 
                icon: true, 
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor:true,
                            }
                        }
                    ]
                } 
            } 
        }],
    };
}
