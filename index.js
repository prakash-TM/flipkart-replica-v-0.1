var modal = document.querySelector(".modal");
    var btn = document.querySelector(".login-button");
    var span = document.querySelector(".close");
    btn.addEventListener("click", () => {
       modal.style.display = "block";
    });
    span.addEventListener("click", () => {
       modal.style.display = "none";
    });
    window.onclick = function(event) {
       if (event.target == modal) {
          modal.style.display = "none";
       }
    };

