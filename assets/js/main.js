document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('openModal').onclick = function() {
        document.getElementById('videoModal').style.display = 'block';
        
        document.getElementById('videoFrame').src = 'https://vkvideo.ru/video_ext.php?oid=222530954&id=456239039&hd=2&hash=318dbfe1fa04fef4&autoplay=1" width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen'; // Замените параметры на актуальные
    }
    
    document.getElementById('closeModal').onclick = function() {
        document.getElementById('videoModal').style.display = 'none';
        document.getElementById('videoFrame').src = '';
    }
    
    window.onclick = function(event) {
        if (event.target == document.getElementById('videoModal')) {
            document.getElementById('videoModal').style.display = 'none';
            document.getElementById('videoFrame').src = '';
        }
    }

function initPhoneMask() {
    const phoneField = document.getElementById('userPhone');
    const maskOptions = {
        mask: '+{7} (000) 000-00-00',
        lazy: false,
        placeholderChar: '_'
    };
    
    if (!phoneField._mask) {
        phoneField._mask = IMask(phoneField, maskOptions);
    }
}
 
const checkbox = document.getElementById('agreeCheckbox');
const submitBtn = document.querySelector('.popup__btn');

function updateButtonState() {
    submitBtn.classList.toggle('active', checkbox.checked);
}

checkbox.addEventListener('change', updateButtonState);

document.addEventListener('DOMContentLoaded', () => {
    updateButtonState();
});

document.getElementById('popupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    updateButtonState();
    let isValid = true;
    
    
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

    
    const nameInput = document.getElementById('userName');
    if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.classList.add('error');
        nameInput.nextElementSibling.textContent = 'Поле не заполнено';
        nameInput.nextElementSibling.style.display = 'block';
    }

    const phoneInput = document.getElementById('userPhone');
    if (!phoneInput.value.includes('_')) {
        isValid = false;
        phoneInput.classList.add('error');
        phoneInput.nextElementSibling.textContent = 'Введите корректный номер';
        phoneInput.nextElementSibling.style.display = 'block';
    }

    const checkbox = document.getElementById('agreeCheckbox');
    if (!checkbox.checked) {
        isValid = false;
        checkbox.closest('.custom-checkbox').classList.add('error');
    }

    if (isValid) {
        
        console.log('Форма отправлена');
        closePopup();
    }
});

function openPopup() {
    popup.classList.add('open');
    lockScroll();
    initPhoneMask();
    
    document.getElementById('popupForm').reset();
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
}
    const popup = document.querySelector('.popup');
    const popupBtns = document.querySelectorAll('.popup-btn'); 
    const closePopupBtns = document.querySelectorAll('.close-popup');
    
    if (!popup || popupBtns.length === 0) return;
  
    
    function lockScroll() {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
        document.documentElement.classList.add('lock');
    }
  
    function unlockScroll() {
        document.documentElement.style.paddingRight = '';
        document.documentElement.classList.remove('lock');
    }
  
    function openPopup() {
        popup.classList.add('open');
        lockScroll();
        initPhoneMask();
    }
  
    function closePopup() {
        popup.classList.remove('open');
        unlockScroll();
    }
  

    popupBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openPopup();
        });
    });
  
    
    closePopupBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            closePopup();
        });
    });
  
    popup.addEventListener('click', function(e) {
        if (!e.target.closest('.popup__content')) {
            closePopup();
        }
    });
  
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.classList.contains('open')) {
            closePopup();
        }
    });

    
    document.querySelectorAll('.like, .follow').forEach(function(element) {
        element.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });


    initPhoneMask();
});

function initSwiper() {
    if (window.innerWidth < 768) {
        new Swiper(".mySwiper", {
            spaceBetween: 16,
            slidesPerView: 1.7,
            centeredSlides: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}

initSwiper();

window.addEventListener('resize', initSwiper);