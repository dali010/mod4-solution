var names = new Array();
names[0]="Dali";
names[1]="Mehdi";
names[2]="Jasser";
names[3]="jerbi";

function sayHello(namess){
	for (var i = 0; i < names.length; i++) {
		if ((names[i][0] != "J") && (names[i][0] != "j"))
			console.log("Hello " + names[i]);
	}
}


