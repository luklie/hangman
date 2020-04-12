var answer = "Fundamentals of JavaScript";
answer = answer.toUpperCase();

var long = answer.length;
var how_many_wrong = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var answer1 = "";

for (i=0; i<long; i++)
{
	if (answer.charAt(i)==" ") answer1 = answer1 + " ";
	else answer1 = answer1 + "-";
}

function write_answer()
{
	document.getElementById("board").innerHTML = answer1;
}

window.onload = start;

var letters = new Array(26);

letters[0] = "A";
letters[1] = "B";
letters[2] = "C";
letters[3] = "D";
letters[4] = "E";
letters[5] = "F";
letters[6] = "G";
letters[7] = "H";
letters[8] = "I";
letters[9] = "J";
letters[10] = "K";
letters[11] = "L";
letters[12] = "M";
letters[13] = "N";
letters[14] = "O";
letters[15] = "P";
letters[16] = "Q";
letters[17] = "R";
letters[18] = "S";
letters[19] = "T";
letters[20] = "U";
letters[21] = "V";
letters[22] = "W";
letters[23] = "X";
letters[24] = "Y";
letters[25] = "Z";




function start()
{
	
	var div_content ="";
	
	for (i=0; i<=25; i++)
	{
		var element = "let" + i;
		div_content = div_content + '<div class="letter" onclick="check('+i+')" id="'+element+'">'+letters[i]+'</div>';
		if ((i+1) % 5 ==0) div_content = div_content + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alphabet").innerHTML = div_content;
	
	
	write_answer();
}

String.prototype.setSign = function(position, sign)
{
	if (position > this.length - 1) return this.toString();
	else return this.substr(0, position) + sign + this.substr(position+1);
}


function check(nr)
{
	
	var correct = false;
	
	for(i=0; i<long; i++)
	{
		if (answer.charAt(i) == letters[nr]) 
		{
			answer1 = answer1.setSign(i,letters[nr]);
			correct = true;
		}
	}
	
	if(correct == true)
	{
		yes.play();
		var element = "let" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		write_answer();
	}
	else
	{
		no.play();
		var element = "let" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//wrong
		how_many_wrong++;
		var picture = "img/s"+ how_many_wrong + ".jpg";
		document.getElementById("hangman").innerHTML = '<img src="'+picture+'" alt="" />';
	}
	
	//win
	if (answer ==answer1)
	document.getElementById("alphabet").innerHTML  = "Well done! You guessed the answer: "+answer+'<br /><br /><span class="reset" onclick="location.reload()">PLAY AGAIN?</span>';
	
	//loose
	if (how_many_wrong>=9)
	document.getElementById("alphabet").innerHTML  = "Lost! Correct answer: "+answer+'<br /><br /><span class="reset" onclick="location.reload()">PLAY AGAIN?</span>';
}
