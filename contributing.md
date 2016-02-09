# Contribution Guidelines

## Introuction

Glad to see you here! If your are reading this, you may want to contribute to Base16-builder. Awesome! To help keeping the project as nice as possible, we ask you to following this contribution guidelines. Welcome in the contributor-side of Base16-builder.

## How can I contribute? /* this title can change */

### Writing an issue

* Search if the [issue](https://github.com/alexbooker/base16-builder/issues) exist.
* If the issue exists, then contribute by comments, or you can create one.
* Try to be as descriptive, concise and specific as possible.
* Titles must be able to stand on their own without requiring readers to click on the issue.
* Submit your issue.

### Writing a pull request

* Check if there is an issue related to your feature. If there is not, create one.
* Search for an [pull request](https://github.com/alexbooker/base16-builder/pulls) that relates to your submission. You don't want to duplicate effort.
* [Fork the project](https://help.github.com/articles/fork-a-repo/).
* Create a [pull request](https://help.github.com/articles/creating-a-pull-request/).
* Write [good commits]().
* Submit your pull request.

### Writing a good commit

You MUST follow our commit message conventions even if you're making a small change! This repository uses a tool called [Commitizen](https://github.com/commitizen/cz-cli) to generate conventional commit messages. See this [document](https://github.com/stevemao/conventional-changelog-angular/blob/master/convention.md) to learn more about the commit message conventions.

## What can I contribute?

### Writing a new template or a new scheme

#### Guidelines

* Follow the specification for each one.
* Avoid duplicate as possible.
* Each contribution MUST be preceded by an [issue]().

#### Writing a template /* Move the spec to RFC 2119 */

A Base16-builder's template is a nunjucks file. Nunjucks is a rich and powerful templating language for JavaScript made by Mozilla. You can learn more about nunjuck files on their [page](https://mozilla.github.io/nunjucks/).

Templates are saved in `./db/templates/`.

/* Add more informations */

| name       | type   | mandatory | note                                 |
|------------|--------|-----------|--------------------------------------|
| tool       | string | true      | Can contain any alphanumeric character or `.-` | 
| luminosity | enum   | true      | Can be `dark` or `light`             | 
| delimiter  | char   | false     | SHALL be use only if palette is used. MUST be a `-` | 
| palette    | int    | false     | 256 only value known /* todo */      | 


Feel free to browse the folder [`templates`](https://github.com/alexbooker/base16-builder/tree/master/db/templates) to see valid example of template.

#### Writing a scheme /* Move the spec to RFC 2119 */

A Base16-builder's scheme is a YAML file. YAML is a human friendly data serialization standard for all programming languages. You can learn more about YAML files on their [page](http://yaml.org/).

Schemes are saved in `./db/schemes/`.

Each scheme MUST follows this table:

| name   | type   | mandatory | note                                           |
|--------|--------|-----------|------------------------------------------------|
| scheme | string | true      | MUST contain any alphanumeric characters or `.-` |
| author | string | true      | SHOULD contain a name and MAY contain an url   |
| base0X | string | true      | MUST be a hexadecimal color in uppercase       |

You are free to add any comments in your file. YAML comments start with the delimiter `#` and finish at the end of the line.

Feel free to browse the folder [`schemes`](https://github.com/alexbooker/base16-builder/tree/master/db/schemes) to see valid example of scheme.

### Writing a feature, a bugfix or anything else code related

#### Guidelines

* Follow the existing code style. /* which one? */
* Document your changes in the [`readme.md`](https://github.com/alexbooker/base16-builder/blob/master/readme.md).
* Document your changes in the `--help` page.
* Each contribution MUST be preceded by an [issue]().

#### Development

1. Run `npm install`
- Run `npm test`. All tests should pass.
- **Write some awesome code**
- Run `npm test`. All tests should _still_ pass :wink:
- Run `git add -A .`
- Run `npm run commit` and follow the prompt. Please do **not** use `git commit` unless you want to manually emulate the commit message convention. You shouldn't have to do this.

If you want to run the cli module locally for manual testing:

1. Run `npm run build`
- Run `./dist/cli <arguments>` e.g. `./dist/cli -t i3wm -s gooey -l dark`

### Writing some documentations or tutorials

Any help to talk about base16-builder or to help user to use it is welcome. If you made something like this, share it with us. We would love to add it somewhere in the project!

### Fixing a typo

All contributors are not english speaker. If you find a typo somewhere, feel free to correct it. :wink:





<sub>Attribution for `contributing.md` template: [angular-formly](https://github.com/formly-js/angular-formly/blob/master/CONTRIBUTING.md).</sub>