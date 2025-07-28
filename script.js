const loadPhone = async (phn) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phn}`);

    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}


const displayPhones = phones => {
    const container = document.getElementById('container');
    container.textContent ='';
    console.log(phones.length);

    const notFound = document.getElementById('notFound');
    if(phones.length == 0){
        
        notFound.classList.remove('hidden');
    }
    else{
        notFound.classList.add('hidden');
    }

    phones.forEach(phone => {
        const card = document.createElement('div');
        card.classList = 'card w-96 bg-base-100 shadow-xl';

        card.innerHTML = `
            <figure>
                <img src="${phone.image}" alt="Phone" />
            </figure>
            <div class="card-body">
                <h2 class="card-title name">${phone.phone_name}</h2>
                
                <div class="card-actions justify-end">
                    <button onclick="handleShowDetails('${phone.slug}'),my_modal_3.showModal()" class="btn">Show Details</button>
                </div>
            </div>`; 

        container.appendChild(card);
    });
};

const handleShowDetails = async (id) => {
    console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    const status = data.status
    const other = phone.others;
    console.log(other);

    const detailsCon = document.getElementById('details');
    if(status){
        detailsCon.innerHTML = `
        <div class="flex flex-col gap-4">
            <div class="flex justify-center">
                <img src="${phone.image}" alt="${phone.name}">
            </div>

            <table class="w-full text-left border-separate border-spacing-y-1">
                <tbody>
                    <tr>
                        <td class="font-bold pr-4">Name</td>
                        <td>${phone.name}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Status</td>
                        <td>Available</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Release Date</td>
                        <td>${phone.releaseDate || 'Not available'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Brand</td>
                        <td>${phone.brand}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Storage</td>
                        <td>${phone.mainFeatures?.storage || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Display</td>
                        <td>${phone.mainFeatures?.displaySize || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">ChipSet</td>
                        <td>${phone.mainFeatures?.chipSet || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Memory</td>
                        <td>${phone.mainFeatures?.memory || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4 align-top">Sensors</td>
                        <td>${phone.mainFeatures?.sensors?.join(', ') || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">WLAN</td>
                        <td>${phone.others?.WLAN || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Bluetooth</td>
                        <td>${phone.others?.Bluetooth || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">GPS</td>
                        <td>${phone.others?.GPS || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">NFC</td>
                        <td>${phone.others?.NFC || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Radio</td>
                        <td>${phone.others?.Radio || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">USB</td>
                        <td>${phone.others?.USB || 'N/A'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        `;
    }
    else{
        detailsCon.innerHTML = `
        <div class="flex flex-col gap-4">
            <div class="flex justify-center">
                <img src="${phone.image}" alt="${phone.name}">
            </div>

            <table class="w-full text-left border-separate border-spacing-y-1">
                <tbody>
                    <tr>
                        <td class="font-bold pr-4">Name</td>
                        <td>${phone.name}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Status</td>
                        <td>Not Available</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Release Date</td>
                        <td>${phone.releaseDate || 'Not available'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Brand</td>
                        <td>${phone.brand}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Storage</td>
                        <td>${phone.mainFeatures?.storage || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Display</td>
                        <td>${phone.mainFeatures?.displaySize || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">ChipSet</td>
                        <td>${phone.mainFeatures?.chipSet || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Memory</td>
                        <td>${phone.mainFeatures?.memory || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4 align-top">Sensors</td>
                        <td>${phone.mainFeatures?.sensors?.join(', ') || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">WLAN</td>
                        <td>${phone.others?.WLAN || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Bluetooth</td>
                        <td>${phone.others?.Bluetooth || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">GPS</td>
                        <td>${phone.others?.GPS || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">NFC</td>
                        <td>${phone.others?.NFC || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">Radio</td>
                        <td>${phone.others?.Radio || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td class="font-bold pr-4">USB</td>
                        <td>${phone.others?.USB || 'N/A'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        `;
    }
    
}

handleSearch = () =>{
    const src = document.getElementById('search');
    console.log(src.value);
    loadPhone(src.value);

    
}

// for search button 2

handleSearch2 =() =>{
    toggleLoader(true);
    const src = document.getElementById('search');
    loadPhone2(src.value);

    
}

const toggleLoader =(isLoading) =>{
    const loader = document.getElementById('loader');
    if(isLoading){
            loader.classList.remove('hidden');
    }
    else{
        loader.classList.add('hidden');
    }

}

const loadPhone2 = async (phn) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phn}`);

    const data = await res.json();
    const phones = data.data;
    displayPhones2(phones);
}



const displayPhones2 = phones => {
    const container = document.getElementById('container');
    container.textContent ='';
    const showAll = document.getElementById('showAll');

    if(phones.length>10){
        showAll.classList.remove('hidden');
    }
    else{
            showAll.classList.add('hidden');
 
    }


    phones = phones.slice(0,4);
    

    phones.forEach(phone => {
        const card = document.createElement('div');
        card.classList = 'card w-96 bg-base-100 shadow-xl';

        card.innerHTML = `
            <figure>
                <img src="${phone.image}" alt="Phone" />
            </figure>
            <div class="card-body">
                <h2 class="card-title name">${phone.phone_name}</h2>
                <div class="card-actions justify-center">
                    <button class="btn">Show Details</button>
                </div>
            </div>`; 

        container.appendChild(card);
    });

    toggleLoader(false);
};
loadPhone('a');
