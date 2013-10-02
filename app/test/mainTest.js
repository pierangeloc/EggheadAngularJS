/* testing suite */

//testing the filter
describe('filter', function() {
	// the filter is declared within the application, so I need the app to access the filter
	beforeEach(module('myApp'));
	
	describe('reverse', function()
	{
		//behavior
		it('should reverse a string', inject(function(reverseFilter)
		{
			expect(reverseFilter('ABCD')).toEqual('DCBA');
	
		}));
	});
});