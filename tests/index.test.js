var expect = require('chai').expect;
var starWars = require('../src/index');

describe('starwars-names', function() {
	describe('#all', function() {
		it('should be an array of strings', function() {
			expect(starWars.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item === 'string';
				});
			}
		});

		it('should contain "Luke Skywalker"', function() {
			expect(starWars.all).to.include('Luke Skywalker');
		});
	});

	describe('#random', function() {
		it('should return a random item from the starWars.all', function() {
			var randomItem = starWars.random();
			expect(starWars.all).to.include(randomItem);
		});

		it('should return an array of random items if passed a number', function() {
			var randomItems = starWars.random(3);
			expect(randomItems.length).to.equal(3);
			randomItems.forEach(function(item) {
				expect(starWars.all).to.include(item);
			});
		});
	});

	describe('#get', function() {
		it('should return the nth item from starWars.all, where n is the number passed in', function() {
			var item = starWars.get(0);
			expect(starWars.all).to.include(item);
			expect(starWars.all[0]).to.equal(item);
		});

		it('should return undefined if the number is out of range', function() {
			var num1 = -1;
			var num2 = starWars.all.length + 10;

			expect(starWars.get(num1)).to.be.undefined;
			expect(starWars.get(num2)).to.be.undefined;
		});
	});
});
