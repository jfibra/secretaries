

    //Initialize for Select2 Elements
    $('.select2').select2()

    //Date picker for datepicker on member letter of accreditation
    $('.accreditationdate').datetimepicker({
        format: 'L',
    });

    /* BOOTSTRAP SLIDER */
    $('.slider').bootstrapSlider();

    $('[data-mask]').inputmask();

    $(function() {
        bsCustomFileInput.init();
    });

    // Create a media condition that targets viewports at least 768px wide for front dashboard
    const frontmediaQuery = window.matchMedia('(max-width: 768px)')
    // Check if the media query is true
    if (frontmediaQuery.matches) {
        $('.closecrop').removeClass('btn-default').addClass('btn-block bg-gradient-lightblue');
        $('.savebtn').removeClass('btn-primary').addClass('btn-block bg-gradient-primary');
        $('.savecrop').addClass('btn-block');
        $('.resetcrop').addClass('btn-block');
        $('.mobileeditbtns').css('width', '100%');
        $('#titlenote').val('( Mobile View )');
    }

    // Create a media condition that targets viewports at least 768px wide
    const mediaQuery = window.matchMedia('(max-width: 990px)')
    // Check if the media query is true
    if (mediaQuery.matches) {
        // Then trigger an alert
        $('.shortcut').find('li a').addClass('btn btn-block bg-gradient-primary');
        $('.box-profile').parent().parent().addClass('hide-this');
        $('.right-dashboard').removeClass('col-md-9');
        $('.right-dashboard').addClass('col-md-12');
        $('.btneditbuttons').find('.btn').removeClass('btn-md btn-default');
        $('.btneditbuttons').find('.btn').addClass('btn-block bg-gradient-dark');
        $('.btneditbuttons').removeClass('btn-group');
    }

    //mobile navbar js
    const navbarToggler = document.querySelector(".navbar-toggler");
    const header = document.querySelector(".header");
    const sideBar = document.querySelector(".sidebar");
    let sidebarStyle = sideBar.currentStyle || window.getComputedStyle(sideBar);

    const setMargin = (margin) => {
        sideBar.style.marginLeft = margin;
    }

    navbarToggler.addEventListener("click", () => {
        sidebarStyle.marginLeft === '0px' ? setMargin('-275px') : setMargin('0px');
    });

    window.addEventListener("click", function(e) {
        $('.sidebar').find('ul').html($('.box-profile').html());
        $('.sidebar').find('ul').append('<br><br><br><br><br><br>');
        if (!sideBar.contains(e.target) && !header.contains(e.target) && !navbarToggler.contains(e.target)) {
            setMargin('-275px');
        }
    });

    // BS-Stepper Init
    document.addEventListener('DOMContentLoaded', function() {
        window.stepper = new Stepper(document.querySelector('.bs-stepper'))
    })