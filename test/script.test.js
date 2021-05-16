const assert = require('assert'),
    chai = require("chai"),
    expect = chai.expect;

const jsdom = require("jsdom"),
    { JSDOM } = jsdom;

const getDom = async () => {
	const dom = await JSDOM.fromFile("./public/index.html", { runScripts: "dangerously" });
	const win = dom.window;
	return win;
};

describe('Hasn\'t gone backwards', function() {
    it('has defaultCharacter', async function() {
        return expect(await getDom()).to.have.property('defaultCharacter');
    });
    it('Chewie has the right properties', async function() {
        return expect(await getDom()).property('defaultCharacter').property('canon','Canon');
    });
});

describe('Has been refactored', function() {
    it('Chewie is an instance of Character', async function() {
        return expect(await getDom()).property('defaultCharacter').property('constructor').property('name').to.equal('Character');
    });
});