//Hola bebita escucha musica bb
let more =document.querySelector('.image');
//NO SE QUE SERA
let audioArr = document.getElementsByTagName('audio');
console.log(audioArr);
//TAMPO SE SOLO PRACTICO
more.addEventListener('mouseenter', () => {
    audioArr[0].play()  
});
more.addEventListener('mouseleave', () => {
    audioArr[0].pause()  
});