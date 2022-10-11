var list=document.getElementById('list');

//.............................................................Add reload the music as page load.........................................
window.onload=function(){
    document.getElementById('my_audio').play();
}

//.............................................................get all superhero by id from fetch.........................................

async function getAllSuperHero(){
    var favouriteSuperArray =getItemFromLS();
    favouriteSuperArray.map(async(item)=>{
        let resp=await fetch(`https://gateway.marvel.com/v1/public/characters/${item}?ts=1&apikey=ed58f40fc34db4a3acfc80e1bac20ac8&hash=90b839ceda08471f2e4549c79d75fd30`)
        let data=await resp.json();
        data=data.data.results[0];
        var li=document.createElement('li');
                li.innerHTML=`
            <div class="js-main-div">
                <div>
                    <a >
                        <img src="${data.thumbnail.path+"."+data.thumbnail.extension}"
                        class="fav-js-img"></img>
                        <p class="fav-js-name">${data.name}</p> 
                    </a>
                </div>
            <div>
            </>
            <button data-id=${data.id} class='removeFromFav Unfav-js-btn'>
                Remove to favourites
            </button>
            <a href="detail.html?id=${data.id}" target="blank" class="fav-js-more">
                More Detail
            </a>
                </div>
            </div>
                `;
                list.append(li);
                li.getElementsByClassName('removeFromFav')[0].addEventListener('click',function(){
                    removeItemFromLS(data.id);
                    window.location.reload();
                })
    })
}

//.............................................................Add function call.....................................................................

getAllSuperHero();