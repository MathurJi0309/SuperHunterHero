//.............................................................fetch the id from the url.........................................
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

//.............................................................Add function to get super hero fro detail by id ftech url.........................................

async function getSuperHeroDetail(){
    let id =findGetParameter('id');
    var resp =await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=ed58f40fc34db4a3acfc80e1bac20ac8&hash=90b839ceda08471f2e4549c79d75fd30`);
    var data=await resp.json();
    data=data.data.results[0];
        var li=document.createElement('li');
                li.innerHTML=`
                <div class="detail-js-div">
                <img src="${data.thumbnail.path+"."+data.thumbnail.extension}"class="detail-js-img">
                </img>
                <p class="detail-js-name">
                    ${data.name}
                </p>
                <div class="js-descr-div">
                    <p class="js-descr">
                        ${data.description}
                    </p>
                </div> 
                </>
                <button data-id=${id} class='addToFav fav-js-btn' >
                    Add to favourites
                </button>
                </div>
                `;
                list.append(li);
                li.getElementsByClassName('addToFav')[0].addEventListener('click',function(){
                    addItemToLS(data.id);
                })
}


//.............................................................Add function call.........................................
getSuperHeroDetail(); 