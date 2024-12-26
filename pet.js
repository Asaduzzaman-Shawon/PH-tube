console.log("This is PH tube website");

const loadCatagories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCatagories(data.categories))
    .catch(error => console.log(error))
}

const loadCatagoriesVedios = (cat) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${cat}`)
    .then(res => res.json())
    .then(data => displayVedios(data.category))
    .catch(error => console.log(error))
}

const displayCatagories = (categories) => {
    const addedPlace = document.getElementById('btnCat')
    categories.forEach(item => {
        const btnName = item.category
        const catId = item.category_id
        const addBtn = document.createElement('button')
        addBtn.innerHTML = `
            <button id="btnClicked" onclick="loadCatagoriesVedios(${catId})" class="btn">${btnName}</button>
        `
        
        addedPlace.append(addBtn)
    });
}

loadCatagories()

const loadVedios = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVedios(data.videos))
    .catch(error => console.log(error))
}

const displayVedios = (videos) => {
    const addedPlace = document.getElementById('addVedio')
    addedPlace.innerHTML = " "
    if(videos.length == 0){
        addedPlace.classList.remove("grid")
        addedPlace.innerHTML = `
          <div class="grid items-center justify-center">
                <img class=" w-[420px]" src="img/Icon.png" alt="">
                <p class="text-center justify-center font-extrabold text-3xl">No content about Drawing</p>
          </div>
        `
        return;
    }
    else{
        addedPlace.classList.add("grid")
    }

        videos.forEach(item => {
            const vedioImg      = item.thumbnail
            const profileImg    = item.authors[0].profile_picture
            const vedioName     = item.title
            const authorsName   = item.authors[0].profile_name
            const vedioViews    = item.others.views 
            const verifyIcon    = item.authors[0].verified
            const addVedios     = document.createElement('div')
            addVedios.classList = " card card-compact m-2 p-2 border"
            addVedios.innerHTML = `
                <figure class="h-[200px]">
                        <img src="${vedioImg}" alt="" class="h-full w-full object-cover">
                    </figure>
                    <div class="flex mt-3 gap-3">
                        <div class="  ">
                            <img class="w-10 h-10 rounded-full object-cover" src="${profileImg}" alt="">
                        </div>
                        <div>
                            <h1 class="font-bold text-[16px]">${vedioName}</h1>
                            <div class="flex items-center gap-3"><p class="font-semibold">${authorsName}</p>${verifyIcon == true ? '<img class="w-4" src="https://img.icons8.com/?size=40&id=41816&format=png" alt="">' : ' '}</div>
                            <p>${vedioViews}</p>
                        </div>
                  </div>
            `
            addedPlace.append(addVedios)
        })
    }
    
    

loadVedios()