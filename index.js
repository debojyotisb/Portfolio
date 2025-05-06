document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200, 
        easing: 'ease-in-out', 
        once: false, // Animation will happen every time
    });
});



const btnEl = document.querySelector(".btn");

btnEl.addEventListener('mouseover',(event) => {
const x = event.pageX - btnEl.offsetLeft;
const y = event.pageY - btnEl.offsetTop;

btnEl.style.setProperty("--xPos", x + "px");
btnEl.style.setProperty("--yPos", y + "px");

});



// freelancing available animation
document.addEventListener("DOMContentLoaded", function () {
    const freelancingWord = document.querySelector(".freelancingAvailable");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    freelancingWord.classList.add("visible");
                } else {
                    freelancingWord.classList.remove("visible"); 
                }
            });
        },
        { threshold: 1.0 } 
    );

    observer.observe(freelancingWord);
});

//Introduce word animation
document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".common-heading");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        heading.classList.add("visible");
                    }, 500); 
                } else {
                    heading.classList.remove("visible"); 
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(heading);
});


//hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerCheckbox = document.getElementById("check");
    const navbarLists = document.querySelector(".navbar-lists");
    const navbarLinks = document.querySelectorAll(".navbar-link");

    // Toggle hamburger menu on checkbox change
    hamburgerCheckbox.addEventListener("change", function () {
        if (hamburgerCheckbox.checked) {
            navbarLists.classList.add("show");
        } else {
            navbarLists.classList.remove("show");
        }
    });

    // Close the hamburger menu when a navbar link is clicked
    navbarLinks.forEach((link) => {
        link.addEventListener("click", function () {
            if (hamburgerCheckbox.checked) {
                hamburgerCheckbox.checked = false; // Uncheck the hamburger checkbox
                navbarLists.classList.remove("show"); // Hide the menu
            }
        });
    });
});


// Contact me animation
// document.addEventListener('DOMContentLoaded', () => {
//     const heading = document.querySelector('.common-heading'); 
//     // const rect = heading.getBoundingClientRect();
//     // console.log("rect",rect);
    
//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     heading.classList.add('visible');
//                 } else {
//                     heading.classList.remove('visible');
//                 }
//             });
//         },
//         { threshold: 0.1 }
//     );

//     observer.observe(heading);
// });


// Icons Popup card
  const skillData = {
    "react-icon": {
      name: "React.js",
      level: 85,
      description: "Proficient with hooks, component architecture, and animations using Framer Motion."
    },
    "node-icon": {
      name: "Node.js",
      level: 70,
      description: "Comfortable with Express.js, REST APIs, and MongoDB integration."
    },
    "js-icon": {
      name: "JavaScript",
      level: 90,
      description: "Strong understanding of ES6+, DOM, events, and async operations."
    },
    "html-icon": {
      name: "HTML5",
      level: 95,
      description: "Semantic, accessible, and SEO-friendly HTML with modern practices."
    },
    "css-icon": {
      name: "CSS3",
      level: 88,
      description: "Expertise in layouts, animations, Flexbox, Grid, and responsive design."
    }
  };

  document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const key = icon.classList[1]; // like 'react-icon'
      const skill = skillData[key];
      if (skill) {
        document.getElementById('skillName').textContent = skill.name;
        document.getElementById('skillDescription').textContent = skill.description;
        document.getElementById('progressText').textContent = `${skill.level}%`;

        const circle = document.getElementById('progressCircle');
        const radius = 50;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (skill.level / 100) * circumference;
        circle.style.strokeDashoffset = offset;

        document.getElementById('skillPopup').classList.add('show');
      }
    });
  });

  function closePopup() {
    document.getElementById('skillPopup').classList.remove('show');
  }
