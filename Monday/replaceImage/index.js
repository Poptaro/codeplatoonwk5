const alterid = document.querySelector('#alter')
const imgerid = document.querySelector('#imger')


function alter() {
  const images = document.querySelectorAll('img')
  images.forEach(item => {
      item.setAttribute('holder', item.src)
      item.src = ''
  })
  alterid.style.visibility = 'hidden'
  imgerid.style.visibility = 'visible'

}

function imger() {
  const images = document.querySelectorAll('img')
  // console.log(images[0].getAttribute('holder'))
  images.forEach(item => {
    item.src = (item.getAttribute('holder'))
  })
  alterid.style.visibility = 'visible'
  imgerid.style.visibility = 'hidden'
}