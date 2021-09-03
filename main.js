fetch("https://animechan.vercel.app/api/random")

.then(response => response.json())
.then(res => {
    console.log(res);

	document.getElementById('cita').innerHTML = res.quote;
	document.getElementById('autor').innerHTML = '- ' + res.anime + ' -';
    
})
.catch(err => {
	console.log(err);
});




		

        