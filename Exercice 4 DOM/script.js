let block1=document.getElementById("block1") ;
let block2=document.getElementById("block2") ;
let block3=document.getElementById("block3") ; 
let block4=document.getElementById("block4") ;
let block5=document.getElementById("block5") ;
let block6=document.getElementById("block6") ;
let block7=document.getElementById("block7") ;
let block8=document.getElementById("block8") ;
let block9=document.getElementById("block9") ;


        //Premiere  methode ;
/*block1.addEventListener("click" ,function(){
        let audio_1=document.getElementById("audio_1") ;
        console.log(audio_1)  ;
        audio_1.play() ;
}) ;
block2.addEventListener("click" ,function(){
        let audio_1=document.getElementById("audio_2") ;
        console.log(audio_2)  ;
        audio_2.play() ;
}) ;
block3.addEventListener("click" ,function(){
        let audio_1=document.getElementById("audio_3") ;
        console.log(audio_3)  ;
        audio_3.play() ;
}) ;
block4.addEventListener("click" ,function(){
        let audio_4=document.getElementById("audio_4") ;
        console.log(audio_4)  ;
        audio_4.play() ;
}) ;
block5.addEventListener("click" ,function(){
        let audio_5=document.getElementById("audio_5") ;
        console.log(audio_5)  ;
        audio_5.play() ;
}) ;
block6.addEventListener("click" ,function(){
        let audio_6=document.getElementById("audio_6") ;
        console.log(audio_6)  ;
        audio_6.play() ;
}) ;
block7.addEventListener("click" ,function(){
        let audio_5=document.getElementById("audio_7") ;
        console.log(audio_7)  ;
        audio_7.play() ;
}) ;
block8.addEventListener("click" ,function(){
        let audio_8=document.getElementById("audio_8") ;
        console.log(audio_8)  ;
        audio_8.play() ;
}) ;
block9.addEventListener("click" ,function(){
        let audio_9=document.getElementById("audio_9") ;
        console.log(audio_8)  ;
        audio_9.play() ;
}) ;
*/
// Deuxieme methode  ;
window.addEventListener("keydown" ,function(event){
        console.log(event.keyCode) ;
const currenaudio=document.querySelector(`audio[data-key="${event.keyCode}"]`) ;
        currenaudio.play() ;
}) ;