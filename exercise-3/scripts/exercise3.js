var person;

function doStuff(){
    person = {
        name: "Karsten",
        age: "6",
        favFoods: ["pizza", "pasta", "pepper"],
        favMovies: [
            {name: "Glede Glede", credits: {director: "Naden", star: "Ogso Naden!"}},
            {name: "HarryPotter", credits: {director: "kleinton", star: "manfred"}},
            {name: "Dinkyland", credits: {director: "bimbos", star: "laila"}}]
    };
};


function presentNaden(){
    document.getElementById("naden").innerHTML = `Hello, my name is ${person.name}.
I'm ${person.age} years old and my favorite movies are ${person.favMovies[2].name}
which is directed by ${person.favMovies[2].credits.director} and stars ${person.favMovies[2].credits.star},
${person.favMovies[1].name} which is directed by ${person.favMovies[1].credits.director} and stars ${person.favMovies[1].credits.star}
and ${person.favMovies[0].name} which is directed by ${person.favMovies[0].credits.director} and stars ${person.favMovies[0].credits.star}`;
};


doStuff();
presentNaden();

// (function() {
//     // our code goes here...
//     var name = {name: "Karsten"};
//     var age = {age: "5"};
//     var favFoods = ["Ramen","Viltgryta te Daniel","Noke andre greier"];
//     var faviMovies = [{movies: [
//                        {name: "Glede Glede", credits: {director: "Naden", star: "ogso Naden"}},
//                        {name: "Ein anna film", credits: {director: "Meg", star: "Naden Den tredje"}},
//                        {name: "Clerks", credits: {director: "Kevin Smith", star: "og Kevin"}}]}];
//     console.log(faviMovies);
// })();

