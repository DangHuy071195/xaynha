const swiper = new Swiper('.swiper-2', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination-2',
		clickable: true,
	},

	// Navigation arrows

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
})

const swiper1 = new Swiper('.swiper-1', {
	direction: 'horizontal',
	loop: true,
	touchMoveStopPropagation: true,

	pagination: {
		el: '.swiper-pagination-1',
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

