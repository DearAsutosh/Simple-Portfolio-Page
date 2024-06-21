function showSideBar(){
    let sidebar=document.querySelector('.side-bar');
    sidebar.style.display='flex';
}
function hideSideBar(){
    let sidebar=document.querySelector('.side-bar');
    sidebar.style.display='none';
}

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
  
    window.speechSynthesis.speak(text_speak);
  }

  
window.addEventListener("contextmenu", (event) => {
    speak(" Right click Disabled !\n for Security Purposes ! ");
  alert(" Right click Disabled !\n for Security Purposes ! ");
});


document.onkeydown=function(e){
    console.log(e.keyCode);
    if (e.ctrlKey && e.keyCode==85) {
        speak("Source code is secured by my Boss Asutosh .");
        alert("Source code is secured by my Boss Asutosh . ");
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode==73) {
        speak("Inspection can't be done for security purposes.");
        alert("Inspection can't be done for security purposes. ");
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode==74) {
        speak("Console can't be opened for security purposes.");
        alert("Console can't be opened for security purposes. ");
        return false;
    }
}