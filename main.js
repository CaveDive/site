document.addEventListener("mousemove", parallax);
      function parallax(event) {
        this.querySelectorAll(".mouse").forEach((shift) => {
          const position = shift.getAttribute("value");
          const x = (window.innerWidth - event.pageX * position) / 90+window.innerWidth*0.05/2;
          const y = (window.innerHeight - event.pageY * position) / 90+window.innerHeight*0.05/2;
  
          shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      }