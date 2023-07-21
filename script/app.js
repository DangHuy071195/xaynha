const swiperT = new Swiper('.swiper-2', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination.swiper-pagination-2',
		clickable: true,
	},

	// Navigation arrows

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
})

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})

const swiper1 = new Swiper('.swiper-1', {
	direction: 'horizontal',
	loop: true,
	touchMoveStopPropagation: true,

	pagination: {
		el: '.swiper-pagination.swiper-pagination-1',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next.swiper-button-next-1',
		prevEl: '.swiper-button-prev.swiper-button-prev-1',
	},
})

const swiper2 = new Swiper('.swiper-villa', {
	direction: 'horizontal',
	// spaceBetween: 30,
	touchMoveStopPropagation: true,

	loop: true,
	navigation: {
		nextEl: '.swiper-button-next.swiper-button-next-2',
		prevEl: '.swiper-button-prev.swiper-button-prev-2',
	},
})
const swiper3 = new Swiper('.swiper-town', {
	direction: 'horizontal',
	loop: true,
	touchMoveStopPropagation: true,

	navigation: {
		nextEl: '.swiper-button-next.swiper-button-next-3',
		prevEl: '.swiper-button-prev.swiper-button-prev-3',
	},
})
const swiper4 = new Swiper('.swiper-garden', {
	direction: 'horizontal',
	touchMoveStopPropagation: true,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next.swiper-button-next-4',
		prevEl: '.swiper-button-prev.swiper-button-prev-4',
	},
})
var $st = $('.pagination')
var $slickEl = $('.center')

$slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	var i = (currentSlide ? currentSlide : 0) + 1
	$st.text(i + ' of ' + slick.slideCount)
	console.log('slick', slick)
	console.log('currentSlide', currentSlide)
	const currentSlideElm = document.querySelector('.slick-slide.slick-current')
	const currentSocialAlt = currentSlideElm.querySelector('img').getAttribute('alt')
	console.log('currentSocialAlt', currentSocialAlt)
	// const curSlideElm =
	const infoLinks = {
		tiktok: [
			{ url: 'https://www.tiktok.com/@thaytamnguyen2603', text: 'Phong Thủy Tam Nguyên' },
			{ url: 'https://www.tiktok.com/@tamnguyenchannel263', text: 'Tam Nguyen Channel' },
		],
		facebook: [
			{ url: 'https://www.facebook.com/thayphongthuytamnguyen.official', text: 'Phong thủy Tam Nguyên - Tam Hợp Phái' },
			{ url: 'https://www.facebook.com/thayphongthuytamnguyen.official', text: 'Phong Thủy Tam Nguyên TP.HCM' },
			{ url: 'https://www.facebook.com/thayphongthuytamnguyen2603', text: 'Phong Thủy Sư Tam Nguyên' },
		],
		youtube: [
			{
				url: 'https://www.youtube.com/@kientrucphongthuytamnguyen/videos?themeRefresh=1',
				text: 'Kiến trúc Phong thủy Tam Nguyên',
			},
			{
				url: 'https://www.youtube.com/channel/UCQOzqgd9oXUgFaL-qPWK6-g',
				text: 'Thầy Phong Thủy Tam Nguyên',
			},
			{
				url: 'https://studio.youtube.com/channel/UCj4PxQr88piCaijUHdHBt5Q?c=UCj4PxQr88piCaijUHdHBt5Q',
				text: 'Tam Nguyên Channel',
			},
		],

		zalo: [
			{
				url: 'https://rd.zapps.vn/detail/3277426331189217616?zarsrc=33&utm_campaign=zalo&broadcastId=fce4da50c015294b7004&utm_medium=zalo&id=7bfb229abddf54810dce&pageId=3277426331189217616&utm_source=zalo',
				text: 'Phong Thủy Tam Nguyên TP.HCM',
			},
			{ url: 'https://zalo.me/170565369197849185', text: 'Phong Thủy Tam Nguyên' },
		],
	}
	const socialLinkContainer = document.querySelector('.contact-socials__content--links')
	const ulElm = socialLinkContainer.querySelector('ul')
	const currentLinkInfos = infoLinks[currentSocialAlt]
	console.log('currentLinkInfos', currentLinkInfos)
	ulElm.innerHTML = ''
	currentLinkInfos.forEach((item) => {
		const newLink = document.createElement('li')
		newLink.innerHTML = `<a href='${item.url}'>${item.text}</a>`
		newLink.classList.add('new-link')
		ulElm.appendChild(newLink)
	})
})

$slickEl.slick({
	centerMode: true,
	centerPadding: '50px',
	slidesToShow: 2,
	focusOnSelect: true,
	dots: false,
	infinite: true,
	arrows: false,

	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1,
			},
		},
	],
})

window.onresize = function (event) {
	console.log('resizing')
	console.log(window.innerWidth)
	const banner1 = document.querySelector('.banner-1__img')
	const bannerImg = banner1.querySelector('img')
	if (window.innerWidth < 576) {
		bannerImg.src = '/images/banner-1-mob.png'
		bannerImg.width = 375
		bannerImg.height = 282
	} else {
		bannerImg.src = '/images/thay-tam-nguyen.png'
		bannerImg.width = 1440
		bannerImg.height = 551
	}
}

const steps = document.querySelectorAll('.step-child')
const advideStep = document.querySelector('.advise-steps')
const width = advideStep.getBoundingClientRect().width
console.log('steps', steps)
console.log('width', width)
const titleElm = document.querySelector('.advise-title')
const contentBox = document.querySelector('.advise-content--text')
const progress = document.querySelector('span.advise-steps')
const checkStepCss = () => {
	console.log('run here...')
	const curImg = advideStep.querySelector('.current-img')
	const curIdxOfImg = Array.from(steps).findIndex((item) => item === curImg)
	console.log('curIdxOfImg', curIdxOfImg)
	Array.from(steps).forEach((step, idx) => {
		if (curIdxOfImg >= idx) {
			step.classList.add('checked')
		} else {
			step.classList.remove('checked')
		}
	})
}
const clickStepHandler = (step, idx) => {
	step.addEventListener('click', () => {
		checkStepCss()

		contentBox.innerHTML = ''
		const url = step.getAttribute('data-image')
		const title = step.getAttribute('data-title')
		// const imgPart = contentBox.querySelector('img')
		const newImg = document.createElement('img')
		newImg.src = url
		newImg.style.width = 700
		newImg.style.height = 500
		contentBox.appendChild(newImg)
		console.log('progress', progress)
		titleElm.innerHTML = title
		console.log('idx to 100%', idx)

		progress.style.width = `${idx * 0.125 * (width - 48)}px`
		progress.classList.add('active')
		if (idx === 8) {
			progress.style.width = `100%`
		}
		const curImg = advideStep.querySelector('.current-img')
		const curIdxOfImg = Array.from(steps).findIndex((item) => item === curImg)
		curImg.classList.remove('current-img')
		step.classList.add('current-img')
		console.log('curIdxOfImg', curIdxOfImg, idx)
		if ((curIdxOfImg && curIdxOfImg < idx) || curIdxOfImg === 0) {
			newImg.classList.add('fade-left')
		} else {
			newImg.classList.add('fade-right')
		}
		checkStepCss()
	})
}

Array.from(steps).forEach((step, idx) => {
	clickStepHandler(step, idx)
})

checkStepCss()

const banner1 = document.querySelector('.banner-1__img')
const bannerImg = banner1.querySelector('img')
const swiperFirst = document.querySelector('.swiper')

if (window.innerWidth < 576) {
	bannerImg.src = '/images/banner-1-mob.png'
	bannerImg.width = 375
	bannerImg.height = 282
} else {
	bannerImg.src = '/images/thay-tam-nguyen.png'
	bannerImg.width = 1440
	bannerImg.height = 551
}

swiperFirst.style.cssText = `height: ${bannerImg.getBoundingClientRect().height - 24}px`

window.onresize = function (event) {
	if (window.innerWidth < 576) {
		bannerImg.src = '/images/banner-1-mob.png'
		bannerImg.width = 375
		bannerImg.height = 282
	} else {
		bannerImg.src = '/images/thay-tam-nguyen.png'
		bannerImg.width = 1440
		bannerImg.height = 551
	}
	swiperFirst.style.cssText = `height: ${bannerImg.getBoundingClientRect().height - 24}px`
}

const swiper5 = new Swiper('.swiper-5', {
	direction: 'horizontal',
	touchMoveStopPropagation: true,
	loop: true,
	on: {
		init: function () {
			console.log('swiper initialized')
			const title = document.querySelector('.swiper-advise__title')
			const swiperEl = document.querySelector('.swiper-5')
			const imgs = swiperEl.querySelectorAll('.img-data')
			const curImg = Array.from(imgs)[0]
			title.innerHTML = curImg.getAttribute('data-title')
		},
	},

	pagination: {
		el: '.swiper-pagination.swiper-pagination-5',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next.swiper-button-next-5',
		prevEl: '.swiper-button-prev.swiper-button-prev-5',
	},
})

swiper5.on('activeIndexChange', function (swiper) {
	console.log('activeIndexChange', swiper)
	console.log('activeIndexChange', swiper.activeIndex)
	const title = document.querySelector('.swiper-advise__title')
	const swiperEl = document.querySelector('.swiper-5')
	const imgs = swiperEl.querySelectorAll('.img-data')
	const curImg = Array.from(imgs)[swiper.activeIndex]
	console.log('curImg', curImg)
	console.log('imgs', imgs)
	console.log('title', title)
	console.log('curImg', curImg.getAttribute('data-title'))
	title.innerHTML = curImg.getAttribute('data-title')
})
swiper5.on('slideChange', function (swiper) {
	console.log('slide changed', swiper)
})

