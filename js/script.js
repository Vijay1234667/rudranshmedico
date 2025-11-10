
        document.addEventListener('DOMContentLoaded', function () {
            const navbarToggler = document.querySelector('.navbar-toggler');
            const customToggler = document.querySelector('.custom-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            navbarToggler.addEventListener('click', function () {
                customToggler.classList.toggle('open');
            });

            navbarCollapse.addEventListener('hidden.bs.collapse', function () {
                customToggler.classList.remove('open');
            });
        });
