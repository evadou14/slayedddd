var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
if (content=="take my selfie"){
    speak();
    
}
    document.getElementById("textbox").innerHTML=content;

};
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);

    setTimeout(function(){
        snapshot();
        save();
    },5000);
    Webcam.attach(camera);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
var camera=document.getElementById("camera");

function snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_url+"'>";
    })
}
function save(){
    link1=document.getElementById("link");
    image=document.getElementById("selfie_image".src);
    link1.href=image;
    link1.click();
}
