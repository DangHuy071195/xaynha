const list = document.querySelector('.slider_img-container--list')
const items = Array.from(list.children)
const prev = document.querySelector('.slider_btn.slider_btn--left')
const next = document.querySelector('.slider_btn.slider_btn--right')
const sliderNav = document.querySelector('.slider_nav')
const dots = Array.from(sliderNav.children)

const itemWidth = items[0].getBoundingClientRect().width
console.log('prev', prev)
console.log('next', next)

const setItemPos = (item, idx) => {
	item.style.left = itemWidth * idx + 'px'
}
items.forEach(setItemPos)

const moveToImg = (list, curItem, targetItem) => {
	console.log('list', list)
	console.log('targetItem', targetItem.style.left)
	list.style.transform = 'translateX(-' + targetItem.style.left + ')'
	curItem.classList.remove('current--slider')
	targetItem.classList.add('current--slider')
}

const hideButton = (items, prevBtn, nextBtn, targetIdx) => {
	if (targetIdx === 0) {
		prevBtn.classList.add('disabled')
		prevBtn.disabled = true
		nextBtn.classList.remove('disabled')
	} else if (targetIdx === items.length - 1) {
		prevBtn.classList.remove('disabled')
		nextBtn.classList.add('disabled')
		nextBtn.disabled = true
	} else {
		prevBtn.classList.remove('disabled')
		nextBtn.classList.remove('disabled')
		nextBtn.disabled = false
		prevBtn.disabled = false
	}
}

const updateDots = (curDot, tarDot) => {
	console.log('curDot', curDot)
	console.log('tarDot', tarDot)
	curDot.classList.remove('current--dot')
	tarDot.classList.add('current--dot')
}

prev.addEventListener('click', (e) => {
	const curItem = list.querySelector('.current--slider')
	const prevItem = curItem.previousElementSibling
	const curDot = sliderNav.querySelector('.current--dot')
	const prevDot = curDot.previousElementSibling
	const prevIdx = items.findIndex((item) => item === prevItem)
	console.log('prevItem', prevItem)

	moveToImg(list, curItem, prevItem)
	updateDots(curDot, prevDot)
	hideButton(items, prev, next, prevIdx)
})

next.addEventListener('click', (e) => {
	const curItem = list.querySelector('.current--slider')
	const nextItem = curItem.nextElementSibling
	const curDot = sliderNav.querySelector('.current--dot')
	const nextDot = curDot.nextElementSibling
	const nextIdx = items.findIndex((item) => item === nextItem)

	moveToImg(list, curItem, nextItem)
	updateDots(curDot, nextDot)
	hideButton(items, prev, next, nextIdx)
})

const tabs = document.querySelector('.heading-bars')
const tabItems = Array.from(tabs.children)
const showContentPara = document.querySelector('.solutions-content__info-text-data')
showContentPara.innerText = tabs.querySelector('.heading-bar--active').getAttribute('data-text')

const clickTab = (item, idx) => {
	item.addEventListener('click', (e) => {
		console.log('run here')
		showContentPara.innerText = item.getAttribute('data-text')
		const activeTab = tabs.querySelector('.heading-bar--active')
		// const activeIdx = tabItems.findIndex(tab => tab === item)
		activeTab.classList.remove('heading-bar--active')
		item.classList.add('heading-bar--active')
	})
}

tabItems.forEach((item, idx) => {
	clickTab(item, idx)
})

sliderNav.addEventListener('click', (e) => {
	const targetDot = e.target.closest('button')
	if (!targetDot) return

	const curItem = list.querySelector('.current--slider')
	const curDot = sliderNav.querySelector('.current--dot')
	const targetIdx = dots.findIndex((dot) => dot === targetDot)
	const targetItem = items[targetIdx]

	moveToImg(list, curItem, targetItem)
	updateDots(curDot, targetDot)
	hideButton(items, prev, next, targetIdx)
})
const faqs = document.querySelector('.faqs-questions')
const faqItems = Array.from(faqs.children)

const clickFaq = (item, idx) => {
	item.addEventListener('click', (e) => {
		console.log('run here')
		item.classList.add('faqs-active')
		console.log(Array.from(item.classList))
		const para = document.createElement('p')
		para.innerText = item.getAttribute('data-text')
		const arrowLogo = item.querySelector('img')

		if (!Array.from(item.classList).includes(`open-${idx}`)) {
			item.classList.add(`open-${idx}`)
			item.appendChild(para)
			arrowLogo.src = '/images/icons/arrow-circle-down.png'
		} else {
			const curItem = document.querySelector(`.open-${idx}`)
			curItem.classList.remove(`open-${idx}`)
			curItem.classList.remove(`faqs-active`)
			curItem.removeChild(curItem.querySelector('p'))
			arrowLogo.src = '/images/icons/arrow-circle.png'
		}
	})
}

faqItems.forEach((item, idx) => clickFaq(item, idx))

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
})

var swiper1 = new Swiper('.swiper1', {
	direction: 'horizontal',
	pagination: '.swiper-pagination1',
	paginationClickable: true,
})
var swiper2 = new Swiper('.swiper2', {
	pagination: '.swiper-pagination2',
	paginationClickable: true,
	direction: 'horizontal',
})
