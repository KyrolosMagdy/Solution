expo = '+ - * x 10 y 5';
vara = {'x': 15, 'y': 3}

function result(expression, variables){
	const operators = [];
	const nums = [];
	var temporarly = [] ;
	const expressionArray = expression.split(' ');

	
	expressionArray.map(ex => {
		if(ex === '+' || ex === '-' || ex === '*' || ex ==='/'){
			operators.push(ex);
		} else if(isNaN(ex) === false){
			nums.push(ex - '')
		} else {
			nums.push(variables[ex])
		}
	});
	const reversedOperators = operators.reverse();
	
	function addToTemporarly(temporarly, num, operator) {
		if(temporarly.length === 0){
			operators.map(operator => {
				if(operator === '+' && temporarly.length === 0){
					temporarly.push(nums[0] + nums[1]);
				}else if (operator === '-' && temporarly.length === 0){
					temporarly.push(nums[0] - nums[1]);
				}else if(operator === '*' && temporarly.length === 0){
					temporarly.push(nums[0] * nums[1]);
				}else if(operator === '/' && temporarly.length === 0){
					temporarly.push(nums[0] / nums[1]);
				}
			})
			nums.splice(0, 2);
			operators.splice(0, 1);
		}else if(temporarly.length > 0) {
			operators.map(operator => {
				if(operator === '+' && temporarly.length > 0){
					temporarly.push( temporarly[temporarly.length-1] + nums[0]  );
					nums.splice(0, 1);
					operators.splice(0, 1);
				}else if (operator === '-' && temporarly.length > 0){
					temporarly.push( temporarly[temporarly.length-1] - nums[0]  );
					nums.splice(0, 1);
					operators.splice(0, 1);					
				}else if(operator === '*' && temporarly.length > 0){
					temporarly.push( temporarly[temporarly.length-1] * nums[0]);
					nums.splice(0, 1);
					operators.splice(0, 1);					
				}else if(operator === '/' && temporarly.length > 0){
					temporarly.push(  temporarly[temporarly.length-1] / nums[0] );
					nums.splice(0, 1);
					operators.splice(0, 1);					
				}
			})
		}
	}
	while(nums.length > 0 && operators.length > 0){
		addToTemporarly(temporarly, nums, reversedOperators);
	}
	console.log(nums, temporarly)
	return temporarly[temporarly.length -1];
}
console.log(result(expo, vara))