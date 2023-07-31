
//when image is attached in the uploader, we get a preview
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('.image-profile').attr('src', e.target.result);
            $('#cropped-original').html('');
            $('#croppedimaged').val('');
            $('#profile-wrapper').append('<img id="image-2" width="100%" name="profile-picture">');
            $('#image-2').attr('src', e.target.result);
            $('#update').removeClass('hide-this');
            $('#upload2').addClass('hide-this');
            $('#undocrop').addClass('hide-this');
            $('#crop-picture').removeClass('hide-this');
        };
        reader.readAsDataURL(input.files[0]);
    }
}
//profile picture uploader cropping
$('#update').click(function() {
    $('#update').addClass('hide-this');
    console.log('');
    var $image2 = $('#image-2'),
        $update = $('#update'),
        inputs = {
            x: $('#x'),
            y: $('#y'),
            width: $('#width'),
            height: $('#height')
        },
        fill = function() {
            var values = $image2.rcrop('getValues');
            for (var coord in inputs) {
                inputs[coord].val(values[coord]);
            }
        }
    $('#image-2').rcrop({
        minSize: [200, 200],
        preserveAspectRatio: true,
    });

    $image2.on('rcrop-changed rcrop-ready', fill);
    $update.click(function() {
        $image2.rcrop('resize', inputs.width.val(), inputs.height.val(), inputs.x.val(), inputs.y
            .val());
        fill();
    });

    $('#crop-picture').click(function() {
        var srcOriginal = $('#image-2').rcrop('getDataURL');
        $('#image-2').remove();
        $(this).addClass('hide-this');
        $('#upload2').removeClass('hide-this');
        $('#undocrop').removeClass('hide-this');
        $('#cropped-original').html('<img src="' + srcOriginal + '">');
        $('#cropverifier').val('1');
        $('#croppedimaged').val(srcOriginal);
    });


});

$('.uploadnew').click(function() {
    $('#update').removeClass('hide-this');
    $('#cropverifier').val('0');
});

$('#upload2').click(function() {
    $('#cropverifier').val('1');
});


//action when submitting uploaded picture cropped or not
document.getElementById("form-change-profile-pic").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new FormData(document.getElementById("form-change-profile-pic"));
    const cropverifier = document.getElementById("cropverifier");
    if (cropverifier.value == '1') {
        const cimage = document.getElementById("croppedimaged").value;
        const b64data = atob(cimage.split(",")[1]);
        const byteNumbers = new Array(b64data.length);
        for (let i = 0; i < b64data.length; i++) {
            byteNumbers[i] = b64data.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {
            type: 'image/png'
        });

        data.append("croppedimage", blob);
        $('#update-profile-sync').removeClass('hide-this');
        $('#update-profile-sync').addClass('overlay ');
        const response = axios.post(`${BASE_URL}/change-profile-pic`, data, {
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

        console.log(response);
    }

})