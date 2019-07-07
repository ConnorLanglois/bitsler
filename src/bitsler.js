setInterval(function () {
	if (number_rolls <= 5) {
		document.getElementById('btn-change-seeds').click();
		document.getElementById('btn-bet-start-pilot-dice').click();

		document.getElementById('limit-rolls-input').value = 50;
	}
}, 3000);
