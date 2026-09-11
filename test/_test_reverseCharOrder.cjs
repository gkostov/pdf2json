const fs = require('fs');
const path = require('path');
const PDFParser = require("../dist/pdfparser.cjs");

describe('Reading documents with charcters laid in reverse order', () => {
	let pdfParser;
	const outputDir = path.join(__dirname, 'target/misc');

	beforeEach(() => {
		pdfParser = new PDFParser(null, 1);
	});

	afterEach(() => {
		if (pdfParser) {
			pdfParser.destroy();
		}
	});

	test('should have properly parsed characters in left-to-right order', () => {
    const contentOutputPath = path.join(outputDir, 'i421-character-order.content.txt');
    const contentFileContent = fs.readFileSync(contentOutputPath, 'utf8');
    expect(contentFileContent).toContain('Reversed number test: 0.532\nTc’ed AB test: AB');
	});
});
