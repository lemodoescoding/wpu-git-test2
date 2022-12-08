let btnTest = document.querySelector('.btn-test');

btnTest.addEventListener('click', function(){
	btnTest.innerHTML = Math.floor(Math.random() * 10 + 1);
});
