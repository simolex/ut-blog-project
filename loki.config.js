module.exports = {
    diffingEngine: 'pixelmatch',
    pixelmatch: {
        threshold: 0.1,
        includeAA: true,
        diffMask: true,
    },
    fetchFailIgnore: '.*',
    configurations: {
        'chrome.laptop': {
            target: 'chrome.app',
            width: 1440,
            height: 1024,
            deviceScaleFactor: 1,
            mobile: false,
        },
        'chrome.iphone7': {
            target: 'chrome.app',
            preset: 'iPhone 7',
            deviceScaleFactor: 2,
        },
    },
};
