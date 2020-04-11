const hand_hour = document.querySelector('.hand.hour');
const hand_min = document.querySelector('.hand.minute');
const hand_sec = document.querySelector('.hand.second');


function clock() {
	const d = new Date();

	// Seconds
	let seconds = d.getSeconds();
	const secDeg = ((seconds / 60) * 360) + 90;
	hand_sec.style.transform = `translateY(-50%) rotate(${secDeg}deg)`;

	// Minutes
	let minutes = d.getMinutes();
	const minDeg = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
	hand_min.style.transform = `translateY(-50%) rotate(${minDeg}deg)`;

	// Hour
	let hour = d.getHours();
	const hourDeg = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
	hand_hour.style.transform = `translateY(-50%) rotate(${hourDeg}deg)`;
}

setInterval("clock()", 1000)
