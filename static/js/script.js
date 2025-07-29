
document.addEventListener("DOMContentLoaded", eventFunction);
function createNewImageDiv(idNo, array, index, mobile) {


    

    if (mobile) {


        const imageSection = document.querySelector('.image-section-mobile');
        const newDiv = document.createElement('img');
        newDiv.className = 'image-box-mobile';

        newDiv.id = `box-mobile${idNo}`;

        newDiv.style.height = '100%'
        newDiv.style.width = '0'
        newDiv.src = `${array[index]}`
         newDiv.style.objectFit = 'cover'
        newDiv.style.objectPosition = 'center'

        imageSection.appendChild(newDiv);

    } else {

        const imageSection = document.querySelector('.image-section');
        const newDiv = document.createElement('img');
        newDiv.className = 'image-box';
        newDiv.id = `box${idNo}`;
        newDiv.style.height = '100%'
        newDiv.style.width = '0'
        newDiv.src = `${array[index]}`
        newDiv.style.objectFit = 'cover'
        newDiv.style.objectPosition = 'center'
        // newDiv.style.backgroundRepeat = 'no-repeat'

        imageSection.appendChild(newDiv);

    }


}


function eventFunction() {

    let imageCount = 0
    let imageIndex = 0



    if (window.screen.width < 1336) {

        setInterval(
            () => {
                console.log(imageCount);

                const images = [
                    "./static/img/10p.jpg",
                    "./static/img/11p.jpg",
                    "./static/img/9p.jpg",
                ];

                const imageArray = document.querySelectorAll('.image-box-mobile')

                console.log(imageArray, 'imagearray');



                imageArray[imageCount].style.width = 0
                imageArray[imageCount].style.marginLeft = 0
                imageArray[imageCount + 1].style.width = '15.5rem'
                imageArray[imageCount + 1].style.marginLeft = '5px'
                imageArray[imageCount + 2].style.width = '5.5rem'
                imageArray[imageCount + 3].style.width = '2.375rem'
                createNewImageDiv(imageCount + 4, images, imageIndex, true)

                imageCount++

                if (imageIndex == 2) {
                    imageIndex = 0
                } else {
                    imageIndex++
                }

            },
            2000);
    } else {
        setInterval(
            () => {
                console.log(imageCount);

                const images = [
                    "./static/img/10p.jpg",
                    "./static/img/11p.jpg",
                    "./static/img/9p.jpg",
                ];

                const imageArray = document.querySelectorAll('.image-box')


                imageArray[imageCount].style.width = 0
                imageArray[imageCount].style.marginLeft = 0
                imageArray[imageCount + 1].style.width = '22.5rem'
                imageArray[imageCount + 2].style.width = '12.5rem'
                imageArray[imageCount + 3].style.width = '9.375rem'
                createNewImageDiv(imageCount + 4, images, imageIndex, false)

                imageCount++

                if (imageIndex == 2) {
                    imageIndex = 0
                } else {
                    imageIndex++
                }

            },
            2000);
    }

}


// property card in home page 


  function toggleSidebar() {
    const sidebar = document.getElementById("sidebarFilter");
    sidebar.classList.toggle("translate-x-full");
  }

  function filterCards(type, button) {
    const cards = document.querySelectorAll('.property-card');
    const noResultsMsg = document.getElementById('no-results-msg');
    let matchCount = 0;

    cards.forEach(card => {
      const cardType = card.getAttribute('data-type');
      if (type === 'all' || cardType === type) {
        card.classList.remove('hidden');
        matchCount++;
      } else {
        card.classList.add('hidden');
      }
    });

   
    const allButtons = document.querySelectorAll('.filter-btn');
    allButtons.forEach(btn => {
      btn.classList.remove('bg-[#8bc83f]', 'text-white');
      btn.classList.add('bg-gray-100', 'text-gray-700');
    });
    button.classList.remove('bg-gray-100', 'text-gray-700');
    button.classList.add('bg-[#8bc83f]', 'text-white');

   
    if (matchCount === 0) {
      noResultsMsg.classList.remove('hidden');

      cards.forEach(card => card.classList.remove('hidden'));
    } else {
      noResultsMsg.classList.add('hidden');
    }
  }







  const images = [
    './static/images/demo.png',
    './static/images/about1.png',
    './static/images/addproperty.png'
  ];

  const imageEl = document.getElementById('propertyImage');
  const dots = document.querySelectorAll('.dot');

  function changeImage(index) {
    imageEl.src = images[index];

    // Reset all dots
    dots.forEach(dot => {
      dot.classList.remove('w-2', 'h-2', 'opacity-100');
      dot.classList.add('w-2', 'h-2', 'opacity-70');
    });

    // Highlight active dot
    dots[index].classList.remove('w-2', 'h-2', 'opacity-70');
    dots[index].classList.add('w-2.5', 'h-2.5', 'opacity-100');
  }

  // Load first image by default
  window.onload = () => changeImage(0);



  // faq

   document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const icon = button.querySelector('svg');

      // Close all other answers
      document.querySelectorAll('.faq-toggle').forEach(btn => {
        if (btn !== button) {
          btn.nextElementSibling.classList.add('hidden');
          btn.querySelector('svg').classList.remove('rotate-180');
        }
      });

      // Toggle current answer
      answer.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
    });
  });