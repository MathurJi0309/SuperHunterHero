//make same key for every entry
const FAV_KEY = 'superhero';
//.........................................................add hero from list ..................................................................
function addItemToLS(item){
	//item --> string  

	var favSuperHeroArray = getItemFromLS();
	//validation if item is present or not
	var isPresent = false;
	favSuperHeroArray.map((tempItem)=>{
		if(item == tempItem ){
			isPresent = true;
		}
	}); 
	
	if(isPresent){
		return;
	}

	favSuperHeroArray = [item,...favSuperHeroArray];
	
	localStorage.setItem(FAV_KEY,JSON.stringify(favSuperHeroArray));
}
//.........................................................get hero in list ..................................................................
function getItemFromLS(){
	var favSuperHeroArray = JSON.parse(localStorage.getItem(FAV_KEY));
	if(!favSuperHeroArray){
		favSuperHeroArray = [];
	}
	return favSuperHeroArray;
}

//.........................................................fremove hero from list ..................................................................

function removeItemFromLS(item){
	var favSuperHeroArray = getItemFromLS();
	favSuperHeroArray = favSuperHeroArray.filter((tempItem)=>{
		return item != tempItem;
	});
	localStorage.setItem(FAV_KEY,JSON.stringify(favSuperHeroArray));
}





