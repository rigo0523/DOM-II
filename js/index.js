// Your code goes here
//#1 change all nav anchors to color white and background skyblue with padding using FOREACH() MOUSE ENTER / MOUSE LEAVE 
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(alinks => {
    ///mouse enter
    alinks.addEventListener('mouseenter', () => {
      alinks.style.color = "black";
      alinks.style.background = "yellow"
      alinks.style.padding = "10px 20px";
    })

    //mouse leave 
    alinks.addEventListener('mouseleave', () => {
        alinks.style.color = "skyblue";
        alinks.style.background = "white"
        alinks.style.padding = "10px";
        alinks.style.fontWeight = "bold";
      })
  })

//#2 make bus image dissappear  MOUSE ENTER / MOUSE LEAVE 
const busPhoto = document.querySelector('.intro img');
console.log(busPhoto) // make sure it's selecting the right img
busPhoto.addEventListener('mouseenter', () => {
  busPhoto.src = "https://www.hammondfarms.com/wp-content/uploads/2015/04/beach-sand.jpeg";
  busPhoto.style.width = "800px";
  busPhoto.style.height = "240px";
})

busPhoto.addEventListener('mouseleave', () => {
    busPhoto.src = "img/fun-bus.jpg";
  })


  //#3 RESIZE footer 
  const footer = document.querySelector('footer'); 
  const footerP = document.querySelector("footer p")
  window.addEventListener("resize", () => {
    footer.style.background = "red";
    footerP.style.color = "white";
  });

// #4 add border to all H2 elements 
const divClick = document.querySelectorAll('.text-content h2');
divClick.forEach(item => {
  item.addEventListener('click', (event) => {
    event.target.style.border = '6px dashed red';
  })
})

//#5 onload of page 
// window.addEventListener('load', () => { // will disable it so it doesn't pop up on ONLOAD
//   window.alert('all files are loaded');
  
// })


//#6 hight light fun bus H1
let elem = document.querySelector('h1');
elem.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'yellow';
    
}, false);



//#7 DOUBLE CLICK on paragraph to append text where all buttons are 
let productPTag = document.querySelectorAll(".destination p");

productPTag.forEach(item => {
  item.addEventListener("dblclick", (event) => {
    event.target.append(" Added more expeditions just by clicking")
    event.target.style.color = "red";
  })
})

// #8 change image to another one by clicking  - shows ROME 
const image = document.querySelectorAll('.img-content img')
image.forEach(item => {
item.addEventListener('click', (event) => {
  image[0].src = "https://s3.amazonaws.com/images.hamlethub.com/hh20mediafolder/5337/201904/rome-1554318872.jpg"
})
// #9 change second image to show another photo of leaning tower of pissa as mouse leaves from rome photo 
item.addEventListener('mouseleave', (event) => {
  image[1].src = "https://www.stdominics.nsw.edu.au/wp-content/uploads/2018/04/IMG_5557.jpg"
})
})

// #10 
let belowbus = document.querySelector('.intro p')
console.log(belowbus)
belowbus.addEventListener('wheel', (event) => {
  event.target.style.background = "skyblue"
  event.target.style.fontSize = "2em"
  event.target.append(' I JUST APPENDED TO THIS PARAGRAPH WHEN YOU SCROLLED DOWN/UP') // ADD MORE text as you scroll down/up with wheel on mouse 
})


//#11 GASP TEST on image to make it spin with animation 

let boatImage = document.querySelector('.content-destination img');
console.log(boatImage);

let anim = gsap.to(boatImage, 1, {
  x:0,
  opacity:0.9,
  rotation: 360,
  width: '1600',
  height: '250',
  paused: true,
})

boatImage.addEventListener("click", (event) => {   
anim.play()
anim.restart()
}, false);