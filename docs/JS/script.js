var names = ["Dali","Mehdi","Saied","Jasser","jerbi","Naziha"];
function saySomething(namess)
{
	for (var i = 0; i < names.length ; i++)
	{
		if((namess[i][0] == "J")||(namess[i][0] == "j")) 
			console.log("Goodbye " + namess[i]);
		else 
			console.log("Hello " + namess[i]);
	}
}
saySomething(names);	