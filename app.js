const h1 = document.querySelector('h1')
h1.textContent = "HACKED!"

//only changes for first link
const link = document.querySelector('a')
link.getAttribute("href");
link.setAttribute("href", "https://www.google.com");

const image = document.createElement('img')
image.src = "https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png"
document.body.appendChild(image)

//repeating myself
const child1 = document.getElementById('child1')
child1.remove()

const child2 = document.getElementById('child2')
child2.remove()

const paragraph = document.createElement('p')
paragraph.textContent = 'Your account has been compromised.'
document.body.appendChild(paragraph)

document.querySelector('span')
span.textContent = "0"