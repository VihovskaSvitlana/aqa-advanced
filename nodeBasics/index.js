import chalk from 'chalk';

const red = chalk.red('Hello world!');
console.log(red);

const bright = chalk.blue.bgGreenBright.bold('Hello world!');
console.log(bright);

const bold = chalk.hex('#DEADED').italic('Hello world!');
console.log(bold);