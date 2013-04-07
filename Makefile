all:
	@rm -rf lib-cov
	@rm -rf apidocs
	./node_modules/.bin/jslint lib/dsjs.js
	./node_modules/.bin/jslint test/tests.js
	./node_modules/.bin/yuidoc .
	./node_modules/.bin/mocha --reporter spec
	@jscoverage --no-highlight lib lib-cov
	@DSJS_COV=1 ./node_modules/.bin/mocha --reporter html-cov > coverage.html