// //1
const list = [10, 20, 30];

function changeElements(list) {
	const temp = list[0];
	list[0] = list[1];
	list[1] = temp;
}

changeElements(list);

console.log(list); // [20, 10, 30];

//2

const list = [30, -5, 0, 10, 5];

function mySort(list) {
	for(let i = 0; i < list.length; i++) {
		for(let j = i; j < list.length; j++) {
			if (list[i] > list[j]) {
				let temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
	}
}

mySort(list);

console.log(list); // [-5, 0, 5, 10, 30]


//3
var func1 = function(message) {
	this(message);
}

var func2 = func1.bind(alert);
func2('Test'); // alert 'Test'

function myBind(func, context) {
	return function() {
		return func.apply(context, arguments);
	}
}

var func3 = myBind(func1, alert);
func3('Test2'); // alert 'Test'
