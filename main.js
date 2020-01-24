window.addEventListener("load", event => main());

const main = () => {
	
	console.log("MAIN");
	
	


let user = {

	FirstName : "billy",
	LastName : "joe",
	Age : 29,
	Adresse : "8 rue des ours",
	Mail : "testalacon@mail.com",
	Telephone : "0760230173",

};

console.log("Bonjour" + " " + user.FirstName + " " + user.LastName);
console.log("Bonjour", user.FirstName, user.LastName);

let capFirstName = user.FirstName.charAt().toUpperCase();
console.log(capFirstName);
//Prends la premiere lettre

const capFirstLetter = value => value.charAt().toUpperCase() + value.slice(1);
console.log(capFirstLetter(user.FirstName));
//Prends la premiere lettre et la met en MAJ

const VraiFaux = () => Math.random() > 0.5 ? "Face" : "Pile";
console.log(VraiFaux());

// const TestVraiFaux = count => (
//	let result = (pile 0, face 0);
//	for (let i = 1; i<count; i++) result(VraiFaux())++;
//	return result;
//	)

// console.log(TestVraiFaux(10));

let tab = [];
for (let i = 0; i < 500; i++) tab.push(i);
// tab.forEach(element => console.log(element));
let tb1 = tab.map(element => element * 2);

console.log(tb1);

}

