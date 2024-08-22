module.exports = {
    tabWidth: 2,
    printWidth: 120,
    useTabs: false,
    semi: true,
    singleQuote: false,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    trailingComma: 'all',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: 'always',
    endOfLine: 'lf',
    overrides: [
        {
            files: ['*.tsx', '*.ts', '*.js'],
            options: {
                singleQuote: true,
            },
        },
    ],
};
