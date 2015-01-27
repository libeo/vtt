module.exports = {
    build: './build/',
    src: './src/',
    minify: true,
    sourcemaps: true,
    svgFallback: false,
    prettify: {
        indent_inner_html: false,
        indent_size: 4,
        preserve_newlines: true,
        wrap_line_length: 0
    },
    defaults: {
        browserSync: {
            open: false
        },
        compass: {
            logging: false
        },
        svgSprite: {
            filename: "symbols.svg"
        },
        loremipsum: {
            minRange: 0.75,
            maxRange: 1.25
        },
        svg: {
            width: '100',
            height: '100'
        },
        googleMap: {
            apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX-XX-XXXXXXXX'
        }
    }
};
