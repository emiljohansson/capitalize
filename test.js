import test from 'ava';
import capitalize from './';

test('capitalize single word in string', t => {
    const expected = 'Unicorn';
    const actual = capitalize('unicorn');
    t.same(actual, expected);
});

test('capitalize every word in string', t => {
    const expected = 'Grumpy Wizards Make Toxic Brew For The Evil Queen And Jack.';
    const actual = capitalize('Grumpy wizards make toxic brew for the evil Queen and Jack.');
    t.same(actual, expected);
});

test('capitalize every word in array', t => {
    const expected = [
        "Grumpy",
        "Wizards",
        "Make",
        "Toxic",
        "Brew",
        "For",
        "The",
        "Evil",
        "Queen",
        "And",
        "Jack."
    ];
    const actual = capitalize([
        "Grumpy",
        "wizards",
        "make",
        "toxic",
        "brew",
        "for",
        "the",
        "evil",
        "Queen",
        "and",
        "Jack."
    ]);
    t.same(actual, expected);
});

test('return the same input if invalid', t => {
    const tests = [undefined, null, [], '', 123, isNaN];
    let ct = 0;
    tests.forEach(value => {
        const expected = value;
        const actual = capitalize(value);
        t.same(actual, expected);
        ct++;
    });
    const expected = tests.length;
    const actual = ct;
    t.same(actual, expected, 'should iterate each item in `tests`');
});

test('capitalize only strings in array', t => {
    const expected = [
        123,
        "Wizards",
        undefined,
        "Toxic",
        isNaN,
        "For",
        null,
        "Evil",
        "Queen",
        "And",
        "Jack."
    ];
    const actual = capitalize([
        123,
        "wizards",
        undefined,
        "toxic",
        isNaN,
        "for",
        null,
        "evil",
        "Queen",
        "and",
        "Jack."
    ]);
    t.same(actual, expected);
});
