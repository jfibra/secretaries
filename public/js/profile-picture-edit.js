

    // Get all the sliders of the image
    let brightnessSlider = document.getElementById("brightnessSlider");
    let contrastSlider = document.getElementById("contrastSlider");
    let grayscaleSlider = document.getElementById("grayscaleSlider");
    let hueRotateSlider = document.getElementById("hueRotateSlider");
    let saturateSlider = document.getElementById("saturationSlider");
    let sepiaSlider = document.getElementById("sepiaSlider");
    let profileedit = document.getElementById("profileedit");

    // Get the source image to be edited
    let image = document.getElementById('sourceImage');
    // Get the canvas for the edited image
    let canvas = document.getElementById('canvas');
    // Get the 2D context of the image
    let context = canvas.getContext('2d');
    // Get Currect Profile Picture for Editing
    let profimg = document.getElementById('profile-picture');


    function editimage() {
        fetch(profimg.src)
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], "asset(' $user->photo ')", blob)
                // Set the source of the image from the uploaded file
                image.src = URL.createObjectURL(file);
            })

        image.onload = function() {
            // Set the canvas the same width and height of the image
            canvas.width = this.width;
            canvas.height = this.height;
            canvas.crossOrigin = "anonymous";
            brightnessSlider.value = 90;
            contrastSlider.value = 100;
            saturateSlider.value = 85;
            grayscaleSlider.value = 0;
            hueRotateSlider.value = 0;
            sepiaSlider.value = 0;
            //change brightness slider to default
            $("#brightnessSlider").parent().find('.slider').find('.min-slider-handle').css('left', '33.33%');
            $("#brightnessSlider").parent().find('.slider').find('.min-slider-handle').attr('aria-valuenow', '90');
            $('#brightnessSlider').parent().find('.slider').find('.slider-selection').css('width', '33.33%');
            $('#brightnessSlider').parent().find('.slider').find('.slider-track-high').css('width', '33.33%');
            $('#brightnessSlider').parent().find('.slider').find('.tooltip-main').find('.tooltip-inner').html('90');
            //change contrast slider to default
            $("#contrastSlider").parent().find('.slider').find('.min-slider-handle').css('left', '45%');
            $("#contrastSlider").parent().find('.slider').find('.min-slider-handle').attr('aria-valuenow', '100');
            $('#contrastSlider').parent().find('.slider').find('.slider-selection').css('width', '45%');
            $('#contrastSlider').parent().find('.slider').find('.slider-track-high').css('width', '45%');
            $('#contrastSlider').parent().find('.slider').find('.tooltip-main').find('.tooltip-inner').html('100');
            //change grayscale slider to default
            $("#grayscaleSlider").parent().find('.slider').find('.min-slider-handle').css('left', '0%');
            $("#grayscaleSlider").parent().find('.slider').find('.min-slider-handle').attr('aria-valuenow', '0');
            $('#grayscaleSlider').parent().find('.slider').find('.slider-selection').css('width', '0%');
            $('#grayscaleSlider').parent().find('.slider').find('.slider-track-high').css('width', '0%');
            $('#grayscaleSlider').parent().find('.slider').find('.tooltip-main').find('.tooltip-inner').html('0');
            //change saturation slider to default
            $("#saturationSlider").parent().find('.slider').find('.min-slider-handle').css('left', '28.33%');
            $("#saturationSlider").parent().find('.slider').find('.min-slider-handle').attr('aria-valuenow', '85');
            $('#saturationSlider').parent().find('.slider').find('.slider-selection').css('width', '28.33%');
            $('#saturationSlider').parent().find('.slider').find('.slider-track-high').css('width', '28.33%');
            $('#saturationSlider').parent().find('.slider').find('.tooltip-main').find('.tooltip-inner').html('85');
            applyFilter();
        };

    };

    // This function is used to update the image
    // along with all the filter values
    function applyFilter() {

        // Create a string that will contain all the filters
        // to be used for the image
        let filterString =
            "brightness(" + brightnessSlider.value + "%" +
            ") contrast(" + contrastSlider.value + "%" +
            ") grayscale(" + grayscaleSlider.value + "%" +
            ") saturate(" + saturateSlider.value + "%" +
            ") sepia(" + sepiaSlider.value + "%" +
            ") hue-rotate(" + hueRotateSlider.value + "deg" + ")";

        // Apply the filter to the image
        context.filter = filterString;

        // Draw the edited image to canvas
        context.drawImage(image, 0, 0);
    }

    // A series of functions that handle the preset filters
    // Each of these will first reset the image
    // and then apply a certain parameter before
    // redrawing the image
    function brightenFilter() {
        resetImage();
        brightnessSlider.value = 130;
        contrastSlider.value = 120;
        saturateSlider.value = 120;
        applyFilter();
    }

    function bwFilter() {
        resetImage();
        grayscaleSlider.value = 100;
        brightnessSlider.value = 120;
        contrastSlider.value = 120;
        applyFilter();
    }

    function funkyFilter() {
        resetImage();

        // Set a random hue rotation everytime
        hueRotateSlider.value =
            Math.floor(Math.random() * 360) + 1;
        contrastSlider.value = 120;
        applyFilter();
    }

    function vintageFilter() {
        resetImage();
        brightnessSlider.value = 120;
        saturateSlider.value = 120;
        sepiaSlider.value = 150;
        applyFilter();
    }

    // Reset all the slider values to there default values
    function resetImage() {
        brightnessSlider.value = 90;
        contrastSlider.value = 100;
        saturateSlider.value = 85;
        grayscaleSlider.value = 0;
        hueRotateSlider.value = 0;
        sepiaSlider.value = 0;
        //change brightness slider to default
        $("#brightnessSlider").parent().find('.slider').find('.min-slider-handle').css('left', '33.33%');
        $("#brightnessSlider").parent().find('.slider').find('.min-slider-handle').attr('aria-valuenow', '90');
        $('#brightnessSlider').parent().find('.slider').find('.slider-selection').css('width', '33.33%');
        $('#brightnessSlider').parent().find('.slider').find('.slider-track-high').css('width', '33.33%');
        $('#brightnessSlider').parent().find('.slider').find('.tooltip-main').find('.tooltip-inner').html('90');
        //change contrast slider to default
        $("#contrastSlider").parent().find('.slider').find('.min-slider-handle').css('left', '45%');
        $("#contrastSlider").parent().find('.slider').find('.min-slider-handle').attr('aria-valuenow', '100');
        $('#contrastSlider').parent().find('.slider').find('.slider-selection').css('width', '45%');
        $('#contrastSlider').parent().find('.slider').find('.slider-track-high').css('width', '45%');
        $('#contrastSlider').parent().find('.slider').find('.tooltip-main').find('.tooltip-inner').html('100');
        //change grayscale slider to default
        $("#grayscaleSlider").parent().find('.slider').find('.min-slider-handle').css('left', '0%');
        $("#grayscaleSlider").parent().find('.slider').find('.min-slider-handle').attr('aria-valuenow', '0');
        $('#grayscaleSlider').parent().find('.slider').find('.slider-selection').css('width', '0%');
        $('#grayscaleSlider').parent().find('.slider').find('.slider-track-high').css('width', '0%');
        $('#grayscaleSlider').parent().find('.slider').find('.tooltip-main').find('.tooltip-inner').html('0');
        //change saturation slider to default
        $("#saturationSlider").parent().find('.slider').find('.min-slider-handle').css('left', '28.33%');
        $("#saturationSlider").parent().find('.slider').find('.min-slider-handle').attr('aria-valuenow', '85');
        $('#saturationSlider').parent().find('.slider').find('.slider-selection').css('width', '28.33%');
        $('#saturationSlider').parent().find('.slider').find('.slider-track-high').css('width', '28.33%');
        $('#saturationSlider').parent().find('.slider').find('.tooltip-main').find('.tooltip-inner').html('85');
        //change hue slider to default
        $("#hueRotateSlider").parent().find('.slider').find('.min-slider-handle').css('left', '0%');
        $("#hueRotateSlider").parent().find('.slider').find('.min-slider-handle').attr('aria-valuenow', '0');
        $('#hueRotateSlider').parent().find('.slider').find('.slider-selection').css('width', '0%');
        $('#hueRotateSlider').parent().find('.slider').find('.slider-track-high').css('width', '0%');
        $('#hueRotateSlider').parent().find('.slider').find('.tooltip-main').find('.tooltip-inner').html('0');
        //change sepia slider to default
        $("#sepiaSlider").parent().find('.slider').find('.min-slider-handle').css('left', '0%');
        $("#sepiaSlider").parent().find('.slider').find('.min-slider-handle').attr('aria-valuenow', '0');
        $('#sepiaSlider').parent().find('.slider').find('.slider-selection').css('width', '0%');
        $('#sepiaSlider').parent().find('.slider').find('.slider-track-high').css('width', '0%');
        $('#sepiaSlider').parent().find('.slider').find('.tooltip-main').find('.tooltip-inner').html('0');
        applyFilter();
    }

    function saveImage() {
        // Convert the canvas data to a image data URL
        let canvasData = canvas.toDataURL("image/png")
        const editdata = new FormData(document.getElementById("form-edit-profile-pic"));
        // Replace it with a stream so that
        // it starts downloading
        canvasData.replace(
            "image/png", "image/octet-stream"
        )

        const eimage = canvasData;
        const b64img = atob(eimage.split(",")[1]);
        const bitNumbers = new Array(b64img.length);
        for (let i = 0; i < b64img.length; i++) {
            bitNumbers[i] = b64img.charCodeAt(i);
        }
        const bitArray = new Uint8Array(bitNumbers);
        const blobimg = new Blob([bitArray], {
            type: 'image/jpg'
        });

        editdata.append("editedimage", blobimg);
        $('#edit-profile-sync').removeClass('hide-this');
        $('#edit-profile-sync').addClass('overlay');
        const response = axios.post(`${BASE_URL}/edit-profile-pic`, editdata, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(res => {
            if (res.status === 200) {
                var Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Profile picture has been succesfully changed.'
                });
                location.reload(true);
            }
        });
    }