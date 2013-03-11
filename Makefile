all:
	./node_modules/.bin/jslint lib/dsjs.js
	./node_modules/.bin/jslint test/tests.js
	./node_modules/.bin/yuidoc .
	./node_modules/.bin/mocha --reporter spec
	@jscoverage lib lib-cov
	@EXPRESS_COV=1 ./node_modules/.bin/mocha --reporter html-cov > coverage.html