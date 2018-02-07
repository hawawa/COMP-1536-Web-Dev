var SignNames = new Array(
		 "Rat",
		 "Ox",
		 "Tiger",
		 "Rabbit",
		 "Dragon",
		 "Snake",
		 "Horse",
		 "Goat",
		 "Monkey",
		 "Rooster",
		 "Dog",
		 "Pig");
var SignImages = new Array(
         "rat.gif",
         "ox.gif",
         "tgr.gif",
         "rbt.png",
         "drgn.png",
         "snk.png",
         "hrs.gif",
         "gt.gif",
         "mnky.png",
         "rstr.gif",
         "dog.gif",
         "pig.gif");
		 


var table = document.getElementById("myTable");

var tr_head = document.createElement("TR");
tr_head.setAttribute("id", "tr_head");
table.appendChild(tr_head);


for (i = 0; i < 12; i++) { 
	var td = document.createElement("TD");
	if (i % 2 ==0) {
		td.setAttribute("class", "td1");
	} else {
		td.setAttribute("class", "td2");
	}
	var t = document.createTextNode(SignNames[i]);
	var img = document.createElement("IMG");
    img.setAttribute("src", "Images/" + SignImages[i]);
	img.setAttribute("alt", SignNames[i]);
  	
	td.appendChild(t);
	td.appendChild(img);
		
	tr_head.appendChild(td);

}

var trNumber = 0;
var d = new Date();

for (i = 1912; i <= d.getFullYear(); i++) { 
	if ((i - 1900) % 12 ==0){
		trNumber++;
		var tr_year = document.createElement("TR");
		tr_year.setAttribute("id", "tr_year" + trNumber);
		table.appendChild(tr_year);
	}
		
	var td = document.createElement("TD");
	if (i % 2 ==0) {
		td.setAttribute("class", "td1");
	} else {
		td.setAttribute("class", "td2");
	}
	var t = document.createTextNode(i);

	td.appendChild(t);
	tr_year.appendChild(td);

}

