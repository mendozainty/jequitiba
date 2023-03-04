$(document).ready(function () {
  const synth = window.speechSynthesis; 
  const voiceList = document.querySelector('#voiceList');
  const voiceSelect = document.querySelector('select');
  let voices = [];  
  const btnBo = document.querySelector('#btnBo');
  const btnNe = document.querySelector('#btnNe');  
  const btnCa = document.querySelector('#btnCa');
  const btnBoneca = document.querySelector('#btnBoneca');  
  const btnCav = document.querySelector('#btnCav');  
  const btnVa = document.querySelector('#btnVa');
  const btnLo = document.querySelector('#btnLo');
  const btnNho = document.querySelector('#btnNho');
  const btnCavalo = document.querySelector('#btnCavalo');
  const btnBi = document.querySelector('#btnBi');
  const btnCi = document.querySelector('#btnCi');
  const btnCle = document.querySelector('#btnCle');
  const btnTa = document.querySelector('#btnTa');
  const btnBicicleta = document.querySelector('#btnBicicleta');
  const btnCade1 = document.querySelector('#cade1');
  const btnCade2 = document.querySelector('#cade2');
  const btnCade3 = document.querySelector('#cade3');
  const btnCade4 = document.querySelector('#cade4');
  const btnCade5 = document.querySelector('#cade5');
  const btnCade6 = document.querySelector('#cade6');
  const btnCade7 = document.querySelector('#cade7');
  const btnCade8 = document.querySelector('#cade8');
  const btnCade9 = document.querySelector('#cade9');
  const btnCade10 = document.querySelector('#cade10');
  const btnCade11 = document.querySelector('#cade11');
  const btnCade12 = document.querySelector('#cade12');
  const btnCade13 = document.querySelector('#cade13');
  const btnFrase1 = document.querySelector('#btnFrase1');
  const btnFrase2 = document.querySelector('#btnFrase2');
  const btnFrase3 = document.querySelector('#btnFrase3');
  const btnFrase4 = document.querySelector('#btnFrase4');
  const btnFrase5 = document.querySelector('#btnFrase5');
  const btnFrase6 = document.querySelector('#btnFrase6');
  const btnFrase7 = document.querySelector('#btnFrase7');
  const btnFrase8 = document.querySelector('#btnFrase8');
  const btnFrase9 = document.querySelector('#btnFrase9');
  const btnFrase10 = document.querySelector('#btnFrase10');
  const btnFrase11 = document.querySelector('#btnFrase11');
  const btnFrase12 = document.querySelector('#btnFrase12');
  const btnFrase13 = document.querySelector('#btnFrase13');
  const btnFrase14 = document.querySelector('#btnFrase14');
  const btnFrase15 = document.querySelector('#btnFrase15');
  const btnFrase16 = document.querySelector('#btnFrase16');
  const btnFrase17 = document.querySelector('#btnFrase17');
  const btnFrase18 = document.querySelector('#btnFrase18');
  const btnFrase19 = document.querySelector('#btnFrase19');
  const btnFrase20 = document.querySelector('#btnFrase20');
  const btnFrase21 = document.querySelector('#btnFrase21');
  const btnFrase22 = document.querySelector('#btnFrase22');
  const btnFrase23 = document.querySelector('#btnFrase23');
  const btnFrase24 = document.querySelector('#btnFrase24');
  const btnFrase25 = document.querySelector('#btnFrase25');
  const btnFrase26 = document.querySelector('#btnFrase26');
  const btntoucinho = document.querySelector('#toucinho');
  const btnque = document.querySelector('#que');
  const btno1 = document.querySelector('#o1');
  const btno2 = document.querySelector('#o2');
  const btno3 = document.querySelector('#o3');
  const btno4 = document.querySelector('#o4');
  const btno5 = document.querySelector('#o5');
  const btno6 = document.querySelector('#o6');
  const btno7 = document.querySelector('#o7');
  const btno8 = document.querySelector('#o8');
  const btno9 = document.querySelector('#o9');
  const btno10 = document.querySelector('#o10');
  const btno11 = document.querySelector('#o11');
  const btno12 = document.querySelector('#o12');
  const btno13 = document.querySelector('#o13');
  const btno14 = document.querySelector('#o14');
  const btno15 = document.querySelector('#o15');  
  const btnfoi = document.querySelector('#foi');  
  const btnfoi2 = document.querySelector('#foi2');  
  const btnfoi3 = document.querySelector('#foi3');  
  const btnfoi4 = document.querySelector('#foi4');  
  const btnestava = document.querySelector('#estava');  
  const btnaqui = document.querySelector('#aqui');  
  const btngato1 = document.querySelector('#gato1');  
  const btngato2 = document.querySelector('#gato2');  
  const btncomeu = document.querySelector('#comeu');  
  const btnpara = document.querySelector('#para');  
  const btnmato = document.querySelector('#mato');  
  const btnmato2 = document.querySelector('#mato2');  
  const btnfogo = document.querySelector('#fogo');  
  const btnfogo2 = document.querySelector('#fogo2');  
  const btnqueimou = document.querySelector('#queimou');  
  const btna = document.querySelector('#a');   
  const btna2 = document.querySelector('#a2');   
  const btna3 = document.querySelector('#a3');   
  const btna4 = document.querySelector('#a4');   
  const btna5 = document.querySelector('#a5');   
  const btna6 = document.querySelector('#a6');   
  const btna7 = document.querySelector('#a7');   
  const btnagua = document.querySelector('#agua');   
  const btnagua2 = document.querySelector('#agua2');   
  const btnapagou = document.querySelector('#apagou');   
  const btnboi = document.querySelector('#boi');   
  const btnboi2 = document.querySelector('#boi2');   
  const btnbebeu = document.querySelector('#bebeu');   
  const btnamassar = document.querySelector('#amassar');   
  const btntrigo = document.querySelector('#trigo');   
  const btntrigo2 = document.querySelector('#trigo2');   
  const btngalinha = document.querySelector('#galinha');   
  const btngalinha2 = document.querySelector('#galinha2');   
  const btnespalhou = document.querySelector('#espalhou');   
  const btnbotar = document.querySelector('#botar');   
  const btnovo = document.querySelector('#ovo');   
  const btnovo2 = document.querySelector('#ovo2');   
  const btnpadre = document.querySelector('#padre');   
  const btnpadre2 = document.querySelector('#padre2');   
  const btncomeu2 = document.querySelector('#comeu2');   
  const btnmissa = document.querySelector('#missa');   
  const btnmissa2 = document.querySelector('#missa2');   
  const btnrezar = document.querySelector('#rezar');   
  const btnesta = document.querySelector('#esta');   
  const btnesta2 = document.querySelector('#esta2');   
  const btnno = document.querySelector('#no');   
  const btnaltar = document.querySelector('#altar');   
  const btnaltar2 = document.querySelector('#altar2');   
  const btnna = document.querySelector('#na');   
  const btnigreja = document.querySelector('#igreja');   
  const btnigreja2 = document.querySelector('#igreja2');   
  const btnfica = document.querySelector('#fica');   
  const btnpor = document.querySelector('#por');   
  const btnpor2 = document.querySelector('#por2');   
  const btnpor3 = document.querySelector('#por3');   
  const btnaqui2 = document.querySelector('#aqui2');   
  const btnaqui3 = document.querySelector('#aqui3');   
  const btnaqui4 = document.querySelector('#aqui4');   
  const btnnas = document.querySelector('#nas');   
  const btngrandes = document.querySelector('#grandes');   
  const btncidades = document.querySelector('#cidades');   
  const btnFrase27 = document.querySelector('#btnFrase27');   
  const btnos = document.querySelector('#os');   
  const btnbombeiros = document.querySelector('#bombeiros');   
  const btnestao = document.querySelector('#estao');   
  const btnFrase28 = document.querySelector('#btnFrase28');   
  const btnsempre = document.querySelector('#sempre');   
  const btnde = document.querySelector('#de');   
  const btnplantao = document.querySelector('#plantao');   
  const btnFrase29 = document.querySelector('#btnFrase29');   
  const btne = document.querySelector('#e');   
  const btntreinam = document.querySelector('#treinam');   
  const btnnum = document.querySelector('#num');   
  const btnquartel = document.querySelector('#quartel');   
  const btnbtnFrase30 = document.querySelector('#btnFrase30');   
 
  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {  
      if(voices[i].lang === 'pt-BR'){  
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);}
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  $('#voiceSelect').toggleClass('hiden', true);
  $("#projetoDiv").toggleClass("hiden", true);
  $("#tricicloDiv").toggleClass("hiden", true);
  $("#bicicletaRodinhaDiv").toggleClass("hiden", true);
  $("#bicicletaSemRodinhaDiv").toggleClass("hiden", true);

  $('.navTrigger').on("click", function () {
    $(this).toggleClass('active');    
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
    $("#mainListDiv").on("click", function (){
      $("#mainListDiv").removeClass("show_list");
      $('.navTrigger').removeClass('active');      
    })
  
  })
  $('#projeto').on("click", function(){ 
    $("#tricicloDiv").toggleClass("hiden", true);
    $("#bicicletaRodinhaDiv").toggleClass("hiden", true);
    $('#voiceSelect').toggleClass('hiden', true);
    $("#bicicletaSemRodinhaDiv").toggleClass("hiden", true);
    $("#projetoDiv").toggleClass('hiden', false);
    $("#projetoDiv").toggleClass("active", true); 
    $('#projetoDiv').fadeIn();
    $('#projetoDiv').on("click", function() {
      $("projetoDiv").toggleClass("active", false)
      $('#projetoDiv').toggleClass('hiden', true);
    })
  })
  $('#triciclo').on("click", function(){ 
    $("#projetoDiv").toggleClass("hiden", true);
    $("#bicicletaRodinhaDiv").toggleClass("hiden", true);
    $("#bicicletaSemRodinhaDiv").toggleClass("hiden", true);
    $("#tricicloDiv").toggleClass('hiden', false);
    $('#voiceSelect').toggleClass('hiden', false);
    $('#voiceSelect').toggleClass("voiceActive", true);
    $("#tricicloDiv").toggleClass("active", true);     
    $('#tricicloDiv').fadeIn();
  })
  $('#bicicletaRodinha').on("click", function(){    
    $("#projetoDiv").toggleClass("hiden", true);
    $("#tricicloDiv").toggleClass("hiden", true);
    $("#bicicletaSemRodinhaDiv").toggleClass("hiden", true);
    $("#bicicletaRodinhaDiv").toggleClass('hiden', false);
    $('#voiceSelect').toggleClass('hiden', false);
    $('#voiceSelect').toggleClass("voiceActive", true);
    $("#bicicletaRodinhaDiv").toggleClass("active", true); 
    $('#bicicletaRodinhaDiv').fadeIn();    
  })
  $('#bicicletaSemRodinha').on("click", function(){    
    $("#projetoDiv").toggleClass("hiden", true);
    $("#tricicloDiv").toggleClass("hiden", true);
    $("#bicicletaRodinhaDiv").toggleClass('hiden', true);
    $("#bicicletaSemRodinhaDiv").toggleClass("hiden", false);
    $('#voiceSelect').toggleClass('hiden', false);
    $('#voiceSelect').toggleClass("voiceActive", true);
    $("#bicicletaSemRodinhaDiv").toggleClass("active", true); 
    $('#bicicletaSemRodinhaDiv').fadeIn();    
  })
  btnbtnFrase30.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnbtnFrase30.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnquartel.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnquartel.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnnum.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnnum.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btntreinam.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btntreinam.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btne.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btne.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase29.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase29.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnplantao.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnplantao.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnde.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnde.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnsempre.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnsempre.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase28.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase28.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnestao.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnestao.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnbombeiros.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnbombeiros.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnos.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnos.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase27.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase27.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btncidades.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btncidades.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btngrandes.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btngrandes.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnnas.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnnas.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnaqui2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnaqui2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnaqui3.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnaqui3.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnaqui4.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnaqui4.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnpor.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnpor.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnpor2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnpor2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnpor3.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnpor3.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnfica.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnfica.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnigreja.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnigreja.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnigreja2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnigreja2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnna.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnna.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnaltar.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnaltar.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnaltar2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnaltar2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnno.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnno.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnesta.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnesta.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnesta2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnesta2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnrezar.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnrezar.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnmissa.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnmissa.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnmissa2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnmissa2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btncomeu2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btncomeu2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnpadre.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnpadre.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnpadre2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnpadre2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnovo.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnovo.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnovo2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnovo2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnbotar.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnbotar.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnespalhou.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnespalhou.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btngalinha.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btngalinha.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btngalinha2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btngalinha2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btntrigo.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btntrigo.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btntrigo2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btntrigo2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnamassar.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnamassar.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnbebeu.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnbebeu.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnboi.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnboi.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnboi2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnboi2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnapagou.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnapagou.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnagua.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnagua.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnagua2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnagua2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btna.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btna.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btna2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btna2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btna3.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btna3.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btna4.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btna4.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btna5.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btna5.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btna6.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btna6.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btna7.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btna7.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnqueimou.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnqueimou.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnfogo.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnfogo.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnfogo2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnfogo2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnmato.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnmato.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnmato2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnmato2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnpara.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnpara.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btncomeu.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btncomeu.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btngato1.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btngato1.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btngato2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btngato2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnaqui.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnaqui.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnestava.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnestava.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnBoneca.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnBoneca.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnBo.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnBo.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })  
  btnNe.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnNe.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCa.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCa.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCav.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCav.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnVa.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnVa.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnLo.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnLo.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnNho.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnNho.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCavalo.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCavalo.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnBi.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnBi.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCi.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCi.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCle.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCle.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnTa.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnTa.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnBicicleta.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnBicicleta.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCade1.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCade1.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCade2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCade2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCade3.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCade3.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCade4.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCade4.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCade5.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCade5.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCade6.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCade6.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCade7.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCade7.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCade8.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCade8.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCade9.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCade9.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCade10.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCade10.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCade11.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCade11.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCade12.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCade12.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnCade13.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnCade13.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase1.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase1.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase3.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase3.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase4.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase4.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase5.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase5.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase6.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase6.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase7.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase7.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase8.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase8.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase9.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase9.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase10.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase10.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase11.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase11.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase12.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase12.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase13.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase13.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase14.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase14.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase15.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase15.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase16.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase16.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase17.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase17.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase18.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase18.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase19.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase19.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase20.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase20.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase21.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase21.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase22.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase22.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase23.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase23.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase24.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase24.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase25.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase25.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnFrase26.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnFrase26.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btntoucinho.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btntoucinho.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnque.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnque.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btno1.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btno1.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btno2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btno2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btno3.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btno3.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btno4.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btno4.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btno5.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btno5.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btno6.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btno1.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btno7.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btno1.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btno8.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btno1.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btno9.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btno1.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btno10.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btno1.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btno11.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btno1.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btno12.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btno1.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btno13.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btno1.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btno14.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btno1.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btno15.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btno1.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnfoi.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnfoi.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnfoi2.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnfoi2.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnfoi3.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnfoi3.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
  btnfoi4.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(btnfoi4.value);
    var voiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
      if(voice.name === voiceName){
        toSpeak.voice = voice;
      }
    })
    synth.speak(toSpeak);
  })
 
  $(window).scroll(function() {
  if ($(document).scrollTop() > 0) {
      $('.nav').addClass('affix');
      
  } else {
      $('.nav').removeClass('affix');
  }
  })
})