
document.querySelector('.icon').addEventListener('click',()=>{
   selecionaUmConselho();
})

async function geradorDeConselhos(){
    const url = 'https://api.adviceslip.com/advice';

    const resposta = await fetch(url);
    
    return await resposta.json();
    
}


async function umConselho(slip_id){
  const urlCoselho = `	https://api.adviceslip.com/advice/${slip_id}`

  const respotaConselho = await fetch(urlCoselho)

  return await respotaConselho.json();
}





async function selecionaUmConselho(){
  const geraConselho  = await geradorDeConselhos();

 
 const id = geraConselho.slip.id
 
 const idConselho = await umConselho(id); 

 const conselhoExibido = geraConselho.slip.advice


 document.getElementById('titulo').innerHTML = `ADVICE # ${id}`


 document.getElementById('conselho').innerHTML = conselhoExibido
}

