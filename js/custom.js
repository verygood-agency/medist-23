document.addEventListener('DOMContentLoaded', function () {
  // Проверяем ширину экрана
  if (window.innerWidth <= 650) {
    console.log('Чпоньк! скрипт включился!');
    // Находим все select элементы
    var selects = document.querySelectorAll('.new-select');

    selects.forEach(function (select) {
      // Создаем обертку для кастомного select
      var customSelect = document.createElement('div');
      customSelect.className = 'custom-select';

      // Создаем элемент для выбранного значения
      var selectBox = document.createElement('div');
      selectBox.className = 'select-box';
      selectBox.textContent = select.options[select.selectedIndex].textContent; // первоначальное значение
      customSelect.appendChild(selectBox);

      // Создаем контейнер для опций
      var optionsContainer = document.createElement('div');
      optionsContainer.className = 'options';
      customSelect.appendChild(optionsContainer);

      // Создаем опции
      for (var i = 0; i < select.options.length; i++) {
        var option = document.createElement('div');
        option.textContent = select.options[i].textContent;
        option.dataset.value = select.options[i].value;

        // Обновление selectBox при клике
        option.addEventListener('click', function () {
          selectBox.textContent = this.textContent;
          select.value = this.dataset.value;
          optionsContainer.style.display = 'none';
          customSelect.classList.remove('active');
        });
        optionsContainer.appendChild(option);
      }

      // Обработчик клика по selectBox
      selectBox.addEventListener('click', function () {
        optionsContainer.style.display =
          optionsContainer.style.display === 'block' ? 'none' : 'block';
        customSelect.classList.toggle('active');
      });

      // Вставляем кастомный select перед оригинальным и скрываем оригинальный
      select.parentNode.insertBefore(customSelect, select);
      select.style.display = 'none';
    });
  };

  // слайдер с документами
  if (document.querySelector('.licensesSwiper')) {

    var swiperLicenses = new Swiper('.licensesSwiper', {
      slidesPerView: 5, // Показывать 5 слайдов на экране
      spaceBetween: 24, // Отступ между слайдами 24px
      // navigation: {
      //   nextEl: '.licensesSwiper .swiper-button-next',
      //   prevEl: '.licensesSwiper .swiper-button-prev',
      // },
      breakpoints: {
        // when window width is >= 320px
        240: {
          slidesPerView: 1,
          spaceBetween: 48
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 48
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 5,
          spaceBetween: 24
        }
      }
      // breakpoints: {
      //   // На экранах размером 550px и меньше показывать 1 слайд
      //   240: {
      //     slidesPerView: 1,
      //   },
      //   1980: {
      //     slidesPerView: 5,
      //   }
      // }
    });
  };


});
