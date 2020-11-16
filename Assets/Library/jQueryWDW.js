fetch("https://weather-com.p.rapidapi.com/v3/wx/forecast/daily/undefined?units=undefined&geocode=34.080911%2C-118.270406&language=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "87fe806293mshd2b0a915f2b154ap1f05e8jsnd65e7e646933",
		"x-rapidapi-host": "weather-com.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});