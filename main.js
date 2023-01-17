document.addEventListener("mousemove", parallax);
      function parallax(event) {
        this.querySelectorAll(".mouse").forEach((shift) => {
          const position = shift.getAttribute("value");
          const x = (window.innerWidth - event.pageX * position) / 90+window.innerWidth*0.1/2;
          const y = (window.innerHeight - event.pageY * position) / 90+window.innerHeight*0.10/2;
  
          shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      }
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
const bgs = [];
bgs.push("media/LushCave.webp", "media/IceCave.webp")
document.getElementById("bg").style.backgroundImage = "linear-gradient(#00000000,#000000FF),url("+bgs[getRandomInt(bgs.length)]+")";
      