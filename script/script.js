/* =============== typing animation =============== */
// var typed = new Typed(".typing", {
//     strings:["", "web designer", "Web Developer"],
//     typeSpeed:100,
//     BackSpeed:60,
//     loop:true
// });

/* =============== Aside =============== */
const nav = document.querySelector('.nav'),
      navList = nav.querySelectorAll('li'),
      totalNavList = navList.length,
      allSection = document.querySelectorAll('.section'),
      totalSection = allSection.length;
    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector('a');
        a.addEventListener('click',function(){
            removeBackSection();
            for (let j = 0; j < totalNavList; j++) {
                if(navList[j].querySelector('a').classList.contains('active')){
                    addBackSection(j);
                }
                navList[j].querySelector('a').classList.remove('active');
            }
            this.classList.add('active');
            showSection(this);
            if (window.innerWidth < 1200) {
                asideSectionTogglerBtn();
            }
        })
    }

    function addBackSection(nb){
        allSection[nb].classList.add('back-section');
    }
    function removeBackSection(){
        
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove('back-section');
        }
    }

    function showSection(element){
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove('active');
        }
       const target =  element.getAttribute('href').split('#')[1];
    //    document.querySelector(element.getAttribute('href')).classList.add('active');
       document.querySelector("#"+target).classList.add('active');
    }
    function updateNav(element){
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector('a').classList.remove('active');
            const target = element.getAttribute('href').split('#')[1];
            if(target === navList[j].querySelector('a').getAttribute('href').split('#')[1]){
                navList[j].querySelector('a').classList.add('active');
            }
        }
    }
    document.querySelector('.hire-me').addEventListener('click',function(){
        const sectionIndex = this.getAttribute('data-section-index');
        showSection(this);
        updateNav(this);
        removeBackSection(sectionIndex);
    })
const navTogglerBtn = document.querySelector('.nav-toggler'),
      aside = document.querySelector('.aside');
      navTogglerBtn.addEventListener('click', () => {
        asideSectionTogglerBtn();
      });
      function asideSectionTogglerBtn(){
        aside.classList.toggle('open');
        navTogglerBtn.classList.toggle('open');
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.toggle('open');
        }
      }

const handleSubmit = (event) => {
    event.preventDefault();
    
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
    };
    
    document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);
      

