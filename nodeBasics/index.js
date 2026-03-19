import chalk from 'chalk';

console.log(chalk.bold.blue('Chalk library demonstration'));

console.log(chalk.green('Success: automation started'));
console.log(chalk.yellow('Warning: test data is incomplete'));
console.log(chalk.red('Error: request failed'));

console.log(chalk.bold.magenta('\nStyled text examples'));

console.log(chalk.bgBlue.white('White text on blue background'));
console.log(chalk.bgRed.bold('Critical error message'));
console.log(chalk.underline.cyan('Underlined informational message'));

console.log(chalk.bold.green('\nAutomation QA is running'));