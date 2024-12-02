const subHeaders = [
  'Variant from the Star Wars series. A model of R-series astromech droid manufactured by Industrial Automaton.',
  'Every masterpiece begins as a model.',
  'Every masterpiece begins as a model.',
  'Beyond the object, there is a world of creation. Dive into the chain.'
]

const items = document.querySelectorAll('#item-1, #item-2, #item-3, #item-4')
const placeholder = document.querySelector('.placeholder')
const subheader = document.querySelector('#subheader')

function changeColors() {
  gsap.to('.container', { backgroundColor: '#000', duration: 0.5 })
  gsap.to('.placeholder, nav, footer, p', { color: '#fff', duration:0.5})
}

function revertColors() {
  gsap.to('.container', { backgroundColor: '#e3e3e3',  duration: 0.5 })
  gsap.to('.placeholder, nav, footer, p', { color: '#000', duration:0.5})
}

items.forEach((item) => {
  item.addEventListener('mouseover', changeColors)
  item.addEventListener('mouseout', revertColors)
})

// function animateScale(element, scaleValue) {
//   gsap.fromTo(element, { scale:1 }, {scale: scaleValue, duration: 2, ease: 'power1.out'})
// }

function wrapLetters(text) {
  placeholder.innerHTML = '';
  [...text].forEach(letter => {
    const span = document.createElement('span')
    span.style.filter = 'blur(8px)'
    span.textContent = letter
    placeholder.appendChild(span)
  })
}

function animateBlurEffect() {
  const letters = placeholder.children
  let index = 0

  function clearNextLetter() {
    if (index < letters.length) {
      gsap.to(letters[index], { filter: 'blur(0px)', duration:0.5 })
      index++
      
      if (index < letters.length) {
        setTimeout(clearNextLetter, 100)
      }
    }
  }

  setTimeout(clearNextLetter, 0)
}

function shuffleLetters(finalText) {
  wrapLetters('')
  wrapLetters(finalText.replace(/./g, ' '))

  let textArray = finalText.split('')
  let shufflingCounter = 0
  let intervalHandles = []

  function shuffle(index) {
    if (shufflingCounter < 30) {
      textArray[index] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)]
      placeholder.children[index].textContent = textArray[index]
    } else {
      placeholder.children[index].textContent = finalText.charAt(index)
      clearInterval(intervalHandles[index])
    }
  }

  for (let i = 0; i < finalText.length; i++) {
    intervalHandles[i] = setInterval(shuffle, 80, i)
  }

  setTimeout(() => {
    shufflingCounter = 30
    for (let i = 0; i < finalText.length; i++) {
      placeholder.children[i].textContent = finalText.charAt(i)
      clearInterval(intervalHandles[i])
    }
    animateBlurEffect()
  }, 1000)
}

function updatePlaceholderText(event) {
  const newText = event.target.textContent.toUpperCase()
  const itemText = Array.from(items).indexOf(event.target)
  const newSubHeaderText = subHeaders[itemText].toUpperCase()

  subheader.textContent = newSubHeaderText
  // animateScale(placeholder, 1.25)
  shuffleLetters(newText)
}

function resetPlaceholderText() {
  const defaultText = 'FIGURES'
  const defaultSubHeaderText = 'Hasbro, Kenner, G.I. Joe.'

  subheader.textContent = defaultSubHeaderText
  // animateScale(placeholder, 1.25)
  shuffleLetters(defaultText)
}

items.forEach((item) => {
  item.addEventListener('mouseover', updatePlaceholderText)
  item.addEventListener('mouseout', resetPlaceholderText)
})








document.addEventListener('DOMContentLoaded', function () {
  const item3 = document.getElementById('item-3');
  const item1 = document.getElementById('item-1');
  const rightContent = document.querySelector('.right-content');
  const tree=document.querySelector('.tree')



  item1.addEventListener('mouseover', function () {
    tree.style.display='block';
    rightContent.style.display ='none'; 
  });


  item1.addEventListener('mouseout', function () {
    tree.style.display = 'none'; 
  });



  item3.addEventListener('mouseover', function () {
    rightContent.style.display = 'block'; 
  });


  item3.addEventListener('mouseout', function () {
    rightContent.style.display = 'none'; 
  });
});







