var getArgs = require('get-args');
var toSnake = require('camel-to-snake');
var args = getArgs();

if (!args.options || !args.options.name || args.options.name === 'true') {
    console.log('Add options `--name <name>`. Name should be in camelCase');
    return;
}

var NAME_SPACE = args.options.name;
var SNAKE_NAME_SPACE = toSnake(NAME_SPACE).toUpperCase();

console.log(
`
export const ${SNAKE_NAME_SPACE} = '${SNAKE_NAME_SPACE}';
`,
`
// ${SNAKE_NAME_SPACE}
export function ${NAME_SPACE}(data) {
    return {
        type: types.${SNAKE_NAME_SPACE},
        payload: data
    }
}
`
);

