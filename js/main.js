(() =>{

   console.log();
   
   discSet = document.querySelectorAll('.disc-set'),
   dragDiscs = document.querySelectorAll('.disc-set img'),
   dropZones = document.querySelectorAll('.drag-box');
   
   function startDrop(ev){
      ev.preventDefault();
   }
   
   function startDrag(ev){
      ev.dataTransfer.setData("img",ev.target.id);
   }
   
   
   document.addEventListener("dragover", function(ev) {
   ev.preventDefault();
   });
   
   function startDrop(ev){
      ev.preventDefault();
      ev.target.appendChild(document.getElementById(data));
   }
   
   
   dragDiscs.forEach(piece => {
   piece.addEventListener("dragstart", function(ev) {
      console.log();
   
      ev.dataTransfer.setData("img", this.id);
   })
   });
   
   //stop window from opening when icons are outside of dropzone
   window.addEventListener("dragover",function(ev){
   ev.preventDefault();
   },false);
   
   window.addEventListener("drop",function(ev){
   
   ev.preventDefault();
   },false);
   
   dropZones.forEach(zone => {
   zone.addEventListener("dragover", function(ev){
   ev.preventDefault();
   });
   zone.addEventListener("drop", function(ev) {
   
   
   ev.preventDefault();
   console.log();
   
   if (this.childElementCount > 0) {
      console.log();
      return;
   }
   
   //debugger;
   
   console.log(ev.dataTransfer.getData('img'));
   
   let targetAudio = document.querySelector(`#${ev.dataTransfer.getData('img')}`).dataset.audio;
   
   console.log(targetAudio);
   
   //debugger;
   
   myAudio = document.createElement('audio');
   myAudio.src = targetAudio;
   
   myAudio.loop = "true";
   
   document.body.appendChild(myAudio);
   
   myAudio.loop = "true"; document.body.appendChild(myAudio);
   myAudio.play();
   let data = ev.dataTransfer.getData("img");
   
   ev.target.appendChild(document.querySelector(`#${data}`));
   
   })
   
   });
   })();
   
   //debugger