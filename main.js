async function criarBaralhoEmbaralhado(){
    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const reposta = await fetch(url);
    return await reposta.json(url);
}

async function tirarUmaCarta(deck_id){
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
    const reposta = await fetch(url);
    return await reposta.json(url);
}

async function tirarUmaCartaAleatoriaDoBaralho(){
    const baralho = await criarBaralhoEmbaralhado();
    const carta = await tirarUmaCarta(baralho.deck_id);
    const image = carta.cards[0].image;
    document.getElementById('carta').src = image; 
}

tirarUmaCartaAleatoriaDoBaralho();