/* eslint-disable max-len */

import test from 'ava';
import execute from 'execa';
import fs from 'fs-promise';
import removeDir from 'rimraf-promise';

const command = '../dist/cli.js';

test.afterEach(async function() {
  await removeDir('output');
});

test('non-existent template should cause error', async function (t) {
  const commandArguments = ['-s', 'monokai', '-t', 'foo'];
  const {stderr: actual} = await execute(command, commandArguments);

  t.ok(/^Could not find a template called/.test(actual));
  t.ok(/goo.gl\/6c8djV$/.test(actual));
});

test('templates with special name should cause error', async function (t) {
  const templs = ['schemes', 'templates'];
  for (const templ of templs) {
    const commandArguments = ['-s', 'monokai', '-t', templ];
    const {stderr: actual} = await execute(command, commandArguments);

    t.ok(/^Could not find a template called/.test(actual));
    t.ok(/goo.gl\/6c8djV$/.test(actual));
  }
});

test('non-existent scheme should cause error', async function (t) {
  const commandArguments = ['-s', 'bar', '-t', 'i3wm'];
  const {stderr: actual} = await execute(command, commandArguments);

  t.ok(/^Could not find a scheme called/.test(actual));
  t.ok(/goo.gl\/ntnS1I$/.test(actual));
});

test('schemes with special name should cause error', async function (t) {
  const schemes = ['schemes', 'templates'];
  for (const scheme of schemes) {
    const commandArguments = ['-s', scheme, '-t', 'i3wm'];
    const {stderr: actual} = await execute(command, commandArguments);

    t.ok(actual.match(/^Could not find a scheme called/));
    t.ok(actual.match(/goo.gl\/ntnS1I$/));
  }
});

test('invalid command arguments should cause error', async function (t) {
  const invalidCommandArguments = [
    [],
    ['-t', 'i3wm'],
    ['-s', 'oceanicnext'],
    ['--template', 'i3wm'],
    ['--scheme', 'oceanicnext']
  ];
  for (const commandArguments of invalidCommandArguments) {
    const {stderr: actual} = await execute(command, commandArguments);

    t.ok(actual.match(/^fatal: You need to specify \*both\* a template/));
    t.ok(actual.match(/goo.gl\/JwwX13\.$/));
  }
});

test('help arguments should cause help to be output', async function (t) {
  const {stdout: actual} = await execute(command, ['--help']);

  t.ok(actual.match(/Usage/));
  t.ok(actual.match(/Options/));
  t.ok(actual.match(/Example/));
});

test('valid arguments cause output file to be written', async function (t) {
  const scheme = 'oceanicnext';
  const templ = 'i3wm';
  const commandArguments = ['-s', scheme, '-t', templ];
  await execute(command, commandArguments);

  try {
    const path = `output/${templ}/${scheme}`;
    const actual = await fs.readFile(path, 'utf8');

    t.ok(/set \$base00 1B2B34/.test(actual));
  } catch (error) {
    t.fail(error);
  }
});

test('with aliases, valid arguments cause output file to be written', async function (t) {
  const scheme = 'oceanicnext';
  const templ = 'i3wm';
  const commandArguments = ['--scheme', scheme, '--template', templ];
  await execute(command, commandArguments);

  try {
    const path = `output/${templ}/${scheme}`;
    const actual = await fs.readFile(path, 'utf8');

    t.ok(/set \$base00 1B2B34/.test(actual));
  } catch (error) {
    t.fail(error);
  }
});
