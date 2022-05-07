let container = document.querySelector('.container')
let textSpan = document.querySelector('.text-span')
let lt = document.querySelectorAll('.lt')
let oth = document.querySelectorAll('.oth')
let wrapper = document.querySelectorAll('.wrapper')
let viewHeight;
let textSpanTopPos;
let widhtArray = [];
oth.forEach((item)=>{
    widhtArray.push(getComputedStyle(item).width)
})

window.addEventListener('scroll' , ()=>{
    viewHeight = window.innerHeight;
    textSpanTopPos = textSpan.getBoundingClientRect().top

    console.log(widhtArray);

    if (Number(textSpanTopPos) <= 60) {
        wrapper.forEach((item, index, array)=>{
            item.style.width= widhtArray[index]
            item.classList.add('active')
        })
        container.classList.add('active')
        textSpan.classList.add('active')
    }else{
        wrapper.forEach((item, index, array)=>{
            item.classList.remove('active')
            // item.style.width= widhtArray[index]

        })
        container.classList.remove('active')
        textSpan.classList.remove('active')
    }
})

// setTimeout(()=>{

//     wrapper[0].style.width= getComputedStyle(oth[0]).width
//     console.log(getComputedStyle(oth[0]).width + 'px');
//     wrapper[0].classList.add('active')
// }, 1000)