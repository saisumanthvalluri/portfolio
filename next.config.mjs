/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        // Find the existing rule for handling SVG imports
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

        if (fileLoaderRule) {
            // Update rules to handle SVGs in two ways:
            // 1. Use file-loader for *.svg?url imports
            // 2. Use @svgr/webpack for all other *.svg imports
            config.module.rules.push(
                {
                    ...fileLoaderRule,
                    test: /\.svg$/i,
                    resourceQuery: /url/, // *.svg?url
                },
                {
                    test: /\.svg$/i,
                    issuer: fileLoaderRule.issuer,
                    resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
                    use: {
                        loader: "@svgr/webpack",
                        options: {
                            svgoConfig: {
                                plugins: [
                                    {
                                        name: "preset-default",
                                        params: {
                                            overrides: {
                                                removeViewBox: false,
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                    },
                }
            );

            // Exclude *.svg from the original file loader rule
            fileLoaderRule.exclude = /\.svg$/i;
        }

        return config;
    },

    // Add the @next/bundle-analyzer for optional analysis and remove console in production
    experimental: {
        removeConsole: true,
    },
};

export default nextConfig;
