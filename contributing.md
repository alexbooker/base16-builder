# Contributing

## Pull Requests

:warning: If you would like to add functionality, please submit [an issue](https://github.com/alexbooker/base16-builder/issues) first to make sure it's a direction we want to take.

:warning: Please follow our commit message conventions even if you're making a small change! This repository uses a tool called [Commitizen](https://github.com/commitizen/cz-cli) to generate conventional commit messages.

Please do the following:

- Follow the existing code style
- Document your changes in the [`readme.md`](https://github.com/alexbooker/base16-builder/blob/master/readme.md)
- Document your changes in the `--help` page

### Development

1. Run `npm install`
- Run `npm test`. All tests should pass
- **Write some awesome code**
- Run `npm test`. All tests should _still_ pass :wink:
- Run `git add -A .`
- Run `npm run commit` and follow the prompt. Please do **not** use `git commit` unless you want to manually emulate the commit message convention.

If you want to run the cli module locally for manual testing:

1. Run `npm run build`
- Run `./dist/cli <arguments>` e.g. `./dist/cli -t i3wm -s gooey`

<sub>Attribution for `contributing.md` template: [angular-formly](https://github.com/formly-js/angular-formly/blob/master/CONTRIBUTING.md).</sub>