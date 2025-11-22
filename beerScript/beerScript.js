let lyricsDiv=document.getElementById('lyrics');

for(let i=99;i>0;i--){
	let bottlesCurrent;
    let bottlesNext;

    
    if (i === 1) {
        bottlesCurrent = "bottle";
    } 
	else {
        bottlesCurrent = "bottles";
    }
	if (i-1 === 1) {
        bottlesNext = "bottle";
    } 
	else if (i-1 === 0) {
        bottlesNext = "no more bottles";
    } 
	else {
        bottlesNext = "bottles";
    }
	let nextNumberText;
		if (i - 1 > 0) {
        nextNumberText = (i - 1) + " " + bottlesNext;
		}
		else {
        nextNumberText = bottlesNext;
		}
		let line = i + " " + bottlesCurrent + " of beer on the wall, " +
               i + " " + bottlesCurrent + " of beer,<br>";
		line += "Take one down and pass it around, " + nextNumberText + " of beer on the wall.<br><br>";

		// Add a line to the page
		lyricsDiv.innerHTML += line;
}

lyricsDiv.innerHTML += "No more bottles of beer on the wall, no more bottles of beer.<br>";
lyricsDiv.innerHTML += "Go to the store and buy some more, 99 bottles of beer on the wall.";

