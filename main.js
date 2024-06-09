//Carousel
const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

//Example
document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
  
    accordionButtons.forEach(button => {
      button.addEventListener('click', function() {
        const accordionContent = this.nextElementSibling;
        const isCollapsed = accordionContent.classList.contains('show');
  
        // Ẩn tất cả accordion content
        accordionButtons.forEach(otherButton => {
          otherButton.nextElementSibling.classList.remove('show');
        });
  
        // Nếu accordion content hiện tại đang ẩn, thì hiển thị
        if (!isCollapsed) {
          accordionContent.classList.add('show');
        }
      });
    });
  });
  
  // Modal

  const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const PARTICLES = document.querySelectorAll('.star')
PARTICLES.forEach(P => {
  P.setAttribute('style', `
    --angle: ${RANDOM(0, 360)};
    --duration: ${RANDOM(6, 20)};
    --delay: ${RANDOM(1, 10)};
    --alpha: ${RANDOM(40, 90) / 100};
    --size: ${RANDOM(2, 6)};
    --distance: ${RANDOM(40, 200)};
  `)
})

// Lấy thẻ modal
var modal = document.getElementById("myModal");

// Lấy nút mở modal
var btn = document.getElementById("openModalButton");

// Lấy thẻ đóng modal
var span = document.getElementsByClassName("close")[0];

// Khi người dùng click vào nút, mở modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Khi người dùng click vào <span> (x), đóng modal
span.onclick = function() {
  modal.style.display = "none";
}

// Khi người dùng click ra ngoài modal, đóng modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
