const correctAnswers = ['B','C','C','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

//Submit event is attached to the FORM and NOT the submit button!!!
form.addEventListener('submit', e => {
	e.preventDefault();

	let score = 0;
	const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
	/*
	console.log(form.q1.value);
	console.log(form.q2.value);
	console.log(form.q3.value);
	console.log(form.q4.value);
	*/
	//checking answers
	userAnswers.forEach((answer,index) => {
		if(answer === correctAnswers[index])
		{
			score += 25;
		}
	});

	//console.log(score);
	//Scroll to the top of the page to view the score - dont let user scroll up
	scrollTo(0,0); 				//Arguments are X & Y co-ordinates.
	//result.querySelector('span').textContent = `${score}%`;
	result.classList.remove('d-none');  //unhide the result div to show updated score!

	let output = 0;
	const timer = setInterval(() => {
		result.querySelector('span').textContent = `${output}%`; //show values changing instead of actual score.
		if(output === score)
		{
			clearInterval(timer);   //stops infinter setInterval function by clearing the timer
		}
		else
		{
			output++;
		}

	},20);
});
/*
//Understanding the Window object
console.log('hello');
  //is identical to :
window.console.log('hello');
//OR
console.log(window.document.querySelector('form'));
  //Also Identical
console.log(document.querySelector('form'));
*/
/*
//SetTimeout Function takes a callback function and time in ms
setTimeout(() => {
	//alert('hi')
}, 3000);
*/