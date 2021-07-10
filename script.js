var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById('message').innerHTML = ("Today is "+daylist[day]);
document.write("<br/>");

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12)? " PM " : " AM ";
hour = (hour > 12)? hour - 12: hour;
if(hour === 0 && prepand === ' PM ')
{
	if(minute === 0 && second === 0)
	{
		hour = 12;
		prepand = ' Noon ';
	}
	else
	{
		hour = 12;
		prepand = ' PM ';
	}
}

if(hour === 0 && prepand === ' AM ')
{
	if(minute === 0 && second === 0)
	{
		hour = 12;
		prepand = ' Midnight ';
	}
	else
	{
		hour = 12;
		prepand = ' AM ';
	}
}



document.getElementById('message1').innerHTML = ("Current time is "+hour+prepand+": "+minute+": "+second);
document.write("<br/>");


const PI = 3.14;
var radius = prompt("Enter radius:");

var area = PI*radius**2;

console.log("Area of a Circle is:"+area);
document.getElementById('area').innerHTML = ("The area of the circle is:"+area);

		

function string_animate(id)
{
	var element = document.getElementById(id);
	var textNode = element.childNodes[0];
	var text = textNode.data;

setInterval(function()
	{
		text = text[text.length - 1] + text.substring(0, text.length - 1);
		textNode.data = text;
	}, 300);
}



function sortList()
{
	var list,i,switching,b,shouldSwitch;
	list = document.getElementById("demo");
	switching = true;

	while(switching)
	{
		switching = false;
		b = list.getElementsByTagName("LI");

		for(i = 0; i < (b.length-1); i++)
		{
			shouldSwitch = false;

			if(b[i].innerHTML.toLowerCase() > b[i+1].innerHTML.toLowerCase())
			{
				shouldSwitch = true;
				break;
			}
		} 

		if(shouldSwitch)
		{
			b[i].parentNode.insertBefore(b[i+1],b[i]);
			switching = true;
		}
	}
}



function myFunction1()
{
	var inp1 = document.getElementById("input1").value;
	var res1 = inp1 * 9 / 5 + 32;
	var res1 = res1.toFixed(2);

	document.getElementById("p1").innerHTML = "Result is:" + res1 + '\xB0F';
}

function myFunction2()
{
	var inp2 = document.getElementById("input2").value;
	var res2 = (inp2 - 32) * 5 /9 ;
	var res2 = res2.toFixed(2);

	document.getElementById("p2").innerHTML = "Result is:" + res2 + '\xB0C';
}