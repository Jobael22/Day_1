const uncamelize = (word, chart = " ") => {
	const loweWord = word.toLowerCase();
	let str = "";
	for (let i = 0; i < word.length; i++) {
	if (word[i] !== loweWord[i]) {
	str += chart + loweWord[i];
	} else {
	str += word[i];
	}
	}
	return str;
	};
	
	
	console.log(uncamelize("helloWorld"));
	console.log(uncamelize("helloWorld", "-"));
	console.log(uncamelize("helloWorld", "_"));
