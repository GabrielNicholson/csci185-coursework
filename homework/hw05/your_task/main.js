const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search(ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks(term) {

    let tracksEndpoint = baseURL + "?";
    tracksEndpoint += "q=" + term + "&type=track";
    const data = await fetch(tracksEndpoint).then(response => response.json());
    console.log(data);
    console.log(tracksEndpoint);
    document.querySelector('#tracks').innerHTML = "";
    if (data.length === 0) {
        document.querySelector('#tracks').innerHTML = "No Results Found";
        return;}
    for(let i = 0; i < 5; i++){
        const template = `
        <section class="track-item preview" onclick="playSong('${data[i].id}')">
                            <img src="${data[i].album.image_url}" alt="album cover for this song">
                            <i class="fas fa-play play-track" aria-hidden="true"></i>
                            <div class="label">
                                <h2>${data[i].name}</h2>
                                <p>
                                    ${data[i].artist.name}
                                </p>
                            </div>
                        </section>
                        
        `
        document.querySelector('#tracks').insertAdjacentHTML('beforeend',template);
}
}


function playSong(id){
    const iframe = `
    <iframe style="border-radius:12px" 
    src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" 
    width="100%" 
    height="352" 
    frameBorder="0" 
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"></iframe>
    `;
    document.querySelector('#artist').innerHTML = iframe;
}
async function getAlbums(term) {
    let albumsEndpoint = baseURL + "?";
    albumsEndpoint += "q=" + term + "&type=album";
    
    const data = await fetch(albumsEndpoint).then(response => response.json());
    console.log("albums")
    console.log(data);
    console.log(albumsEndpoint);
    document.querySelector('#albums').innerHTML = "";
    if (data.length === 0) {
        document.querySelector('#albums').innerHTML = "No Results Found";
        return;}
    for(let i = 0; i < 5; i++){
            const template = `
            <section class="album-card">
                        <div>
                            <img src="${data[i].image_url}" alt="album cover art">
                            <h2>${data[i].name}</h2>
                            <div class="footer">
                                <a href="https://open.spotify.com/album/${data[i].id}" target="_blank" alt="link to spotify">
                                    view on spotify
                                </a>
                            </div>
                        </div>
                    </section>
                            
            `
            document.querySelector('#albums').insertAdjacentHTML('beforeend',template);
}
}
async function getArtist(term) {
    let artistEndpoint = baseURL + "?";
    artistEndpoint += "q=" + term + "&type=artist";


    console.log(artistEndpoint);
    const data = await fetch(artistEndpoint).then(response => response.json());
    console.log(data[0]);

if (data.length === 0) {
    document.querySelector('#artist').innerHTML = "No Results Found";
    return;
}

    const template = `
    <section>
    <img src="${data[0].image_url}" />
    <h2>${data[0].name}</h2>
    <p>On Spotify: ${data[0].spotify_url}
    </section>
    `;
    const template2 = `
    <section class="artist-card" id=${data[0].id}>
                            <div>
                                <img src="${data[0].image_url}" alt="artist cover image">
                                <h2>${data[0].name}</h2>
                                <div class="footer">
                                    <a href="${data[0].spotify_url}" target="_blank" alt="link to spotify" >
                                        view on spotify
                                    </a>
                                </div>
                            </div>
                        </section>
    
    `
    document.querySelector('#artist').innerHTML = template2;
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}