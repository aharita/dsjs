all:
	./node_modules/.bin/jslint dsjs.js
	./node_modules/.bin/yuidoc .
	./node_modules/.bin/mocha --reporter spec