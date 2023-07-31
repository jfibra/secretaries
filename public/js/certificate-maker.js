// Create a media condition that targets viewports at least 768px wide
const certificateQuery = window.matchMedia('(min-width: 800px)')
// Check if the media query is true
if (certificateQuery.matches) {
    // get screen width
    const windowratio2 = window.screen.width;

    //Colorpicker
    $('.my-colorpicker1').colorpicker();
    // preview image being uploaded
    function uploadPreview(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#previewupload').find('img').attr('src', e.target.result);
                $('#certlist').css('height', '96%');
                $('#previewupload').removeClass('hide-this');
            };
            reader.readAsDataURL(input.files[0]);
        }

    }

    //Date picker
    $('#designdate').datetimepicker({
        format: 'YYYY-MM-DD',
    });
    // image url to base 64
    function toDataURL(src, callback) {
        var image = new Image();
        image.crossOrigin = 'Anonymous';
        image.onload = function () {
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            canvas.height = '1080';
            canvas.width = '1920';
            context.drawImage(this, 0, 0);
            var dataURL = canvas.toDataURL('image/jpeg');
            callback(dataURL);
        };
        image.src = src;
    }
    // check what category and type the user picked to control the details being used in the design
    function designTexts(typecat) {

        //design texts  
        const heading = $('#heading');
        const title = $('#title');
        const top = $('#top');
        const month = $('#month');
        const date = $('#date');
        const address = $('#address');
        const details = $('#details');
        const appreciation = $('#appreciation');
        const achievement = $('#achievement');
        const recognition = $('#recognition');
        const toptext = $('#toptext');

        heading.removeClass('hide-this');
        title.removeClass('hide-this');
        top.removeClass('hide-this');
        month.removeClass('hide-this');
        date.removeClass('hide-this');
        address.removeClass('hide-this');
        details.removeClass('hide-this');
        appreciation.removeClass('hide-this');
        achievement.removeClass('hide-this');
        recognition.removeClass('hide-this');
        toptext.removeClass('hide-this');

        switch (typecat) {
            case 'appreciation/customized':
                top.addClass('hide-this');
                month.addClass('hide-this');
                date.addClass('hide-this');
                address.addClass('hide-this');
                details.addClass('hide-this');
                achievement.addClass('hide-this');
                recognition.addClass('hide-this');
                toptext.addClass('hide-this');
                break;
            case 'appreciation/blank':
                top.addClass('hide-this');
                month.addClass('hide-this');
                date.addClass('hide-this');
                address.addClass('hide-this');
                appreciation.addClass('hide-this');
                achievement.addClass('hide-this');
                recognition.addClass('hide-this');
                toptext.addClass('hide-this');
                break;
            case 'recognition/customized':
                top.addClass('hide-this');
                month.addClass('hide-this');
                date.addClass('hide-this');
                address.addClass('hide-this');
                details.addClass('hide-this');
                appreciation.addClass('hide-this');
                achievement.addClass('hide-this');
                toptext.addClass('hide-this');
                break;
            case 'recognition/blank':
                top.addClass('hide-this');
                month.addClass('hide-this');
                date.addClass('hide-this');
                address.addClass('hide-this');
                appreciation.addClass('hide-this');
                achievement.addClass('hide-this');
                recognition.addClass('hide-this');
                toptext.addClass('hide-this');
                break;
            case 'achievement/customized':
                top.addClass('hide-this');
                month.addClass('hide-this');
                date.addClass('hide-this');
                address.addClass('hide-this');
                details.addClass('hide-this');
                appreciation.addClass('hide-this');
                recognition.addClass('hide-this');
                toptext.addClass('hide-this');
                break;
            case 'achievement/blank':
                top.addClass('hide-this');
                month.addClass('hide-this');
                date.addClass('hide-this');
                address.addClass('hide-this');
                appreciation.addClass('hide-this');
                achievement.addClass('hide-this');
                recognition.addClass('hide-this');
                toptext.addClass('hide-this');
                break;
            case 'top/customized':
                top.addClass('hide-this');
                month.addClass('hide-this');
                date.addClass('hide-this');
                address.addClass('hide-this');
                details.addClass('hide-this');
                appreciation.addClass('hide-this');
                achievement.addClass('hide-this');
                recognition.addClass('hide-this');
                break;
            case 'top/blank':
                top.addClass('hide-this');
                month.addClass('hide-this');
                date.addClass('hide-this');
                address.addClass('hide-this');
                toptext.addClass('hide-this');
                appreciation.addClass('hide-this');
                achievement.addClass('hide-this');
                recognition.addClass('hide-this');
                break;
            case 'brokerage/customized':
                title.addClass('hide-this');
                top.addClass('hide-this');
                month.addClass('hide-this');
                details.addClass('hide-this');
                appreciation.addClass('hide-this');
                achievement.addClass('hide-this');
                recognition.addClass('hide-this');
                toptext.addClass('hide-this');
                break;
            case 'brokerage/blank':
                title.addClass('hide-this');
                top.addClass('hide-this');
                month.addClass('hide-this');
                appreciation.addClass('hide-this');
                achievement.addClass('hide-this');
                recognition.addClass('hide-this');
                toptext.addClass('hide-this');
                break;
        }
    }
    // template switcher based on what the user choose
    function templateSwitcher(typecat) {
        //input forms DOM selector
        const completename = $('#completename');
        const positiontitle = $('#positiontitle');
        const selecttop = $('#selecttop');
        const selectmonth = $('#selectmonth');
        const selectdate = $('#selectdate');
        const addressinput = $('#addressinput');
        const detailsinput = $('#detailsinput');
        const hisherinput = $('#hisherinput');
        // set the default classes and state of divs
        completename.removeClass('col-sm-12 col-md-4 col-lg-4 hide-this col-md-8 col-lg-8 col-md-6 col-lg-6 col-md-12 col-lg-12').addClass('col-sm-12 col-md-4 col-lg-4');
        positiontitle.removeClass('col-sm-12 col-md-4 col-lg-4 hide-this col-md-6 col-lg-6').addClass('col-sm-12 col-md-4 col-lg-4');
        selecttop.removeClass('col-sm-12 col-md-4 col-lg-4 hide-this').addClass('col-sm-12 col-md-4 col-lg-4');
        selectmonth.removeClass('col-sm-12 col-md-4 col-lg-4 hide-this').addClass('col-sm-12 col-md-4 col-lg-4');
        selectdate.removeClass('col-sm-12 col-md-4 col-lg-4 hide-this').addClass('col-sm-12 col-md-4 col-lg-4');
        hisherinput.removeClass('col-sm-12 col-md-4 col-lg-4 hide-this').addClass('col-sm-12 col-md-4 col-lg-4');
        addressinput.removeClass('col-sm-12 col-md-4 col-lg-4 hide-this col-md-6 col-lg-6 col-md-8 col-lg-8').addClass('col-sm-12 col-md-4 col-lg-4');
        detailsinput.removeClass('col-sm-12 col-md-12 col-lg-12 hide-this').addClass('col-sm-12 col-md-12 col-lg-12');

        switch (typecat) {
            case 'appreciation/customized':
                detailsinput.addClass('hide-this');
                hisherinput.addClass('hide-this');
                break;
            case 'appreciation/blank':
                completename.removeClass('col-md-4 col-lg-4').addClass('col-md-8 col-lg-8');
                selecttop.addClass('hide-this');
                selectmonth.addClass('hide-this');
                selectdate.removeClass('col-md-4 col-lg-4').addClass('col-md-6 col-lg-6');
                addressinput.removeClass('col-md-4 col-lg-4').addClass('col-md-6 col-lg-6');
                hisherinput.addClass('hide-this');
                break;
            case 'recognition/customized':
                completename.removeClass('col-md-4 col-lg-4').addClass('col-md-8 col-lg-8');
                addressinput.removeClass('col-md-4 col-lg-4').addClass('col-md-8 col-lg-8');
                detailsinput.addClass('hide-this');
                hisherinput.addClass('hide-this');
                break;
            case 'recognition/blank':
                completename.removeClass('col-md-4 col-lg-4').addClass('col-md-8 col-lg-8');
                selecttop.addClass('hide-this');
                selectmonth.addClass('hide-this');
                selectdate.removeClass('col-md-4 col-lg-4').addClass('col-md-6 col-lg-6');
                addressinput.removeClass('col-md-4 col-lg-4').addClass('col-md-6 col-lg-6');
                hisherinput.addClass('hide-this');
                break;
            case 'achievement/customized':
                completename.removeClass('col-md-4 col-lg-4').addClass('col-md-6 col-lg-6');
                positiontitle.removeClass('col-md-4 col-lg-4').addClass('col-md-6 col-lg-6');
                selecttop.addClass('hide-this');
                selectmonth.addClass('hide-this');
                detailsinput.addClass('hide-this');
                hisherinput.addClass('hide-this');
                addressinput.removeClass('col-md-4 col-lg-4').addClass('col-md-8 col-lg-8');
                break;
            case 'achievement/blank':
                completename.removeClass('col-md-4 col-lg-4').addClass('col-md-8 col-lg-8');
                selecttop.addClass('hide-this');
                selectmonth.addClass('hide-this');
                selectdate.removeClass('col-md-4 col-lg-4').addClass('col-md-6 col-lg-6');
                addressinput.removeClass('col-md-4 col-lg-4').addClass('col-md-6 col-lg-6');
                hisherinput.addClass('hide-this');
                break;
            case 'top/customized':
                completename.removeClass('col-md-4 col-lg-4').addClass('col-md-6 col-lg-6');
                positiontitle.removeClass('col-md-4 col-lg-4').addClass('col-md-6 col-lg-6');
                selecttop.addClass('hide-this');
                selectmonth.addClass('hide-this');
                detailsinput.addClass('hide-this');
                addressinput.removeClass('col-md-4 col-lg-4').addClass('col-md-4 col-lg-4');
                break;
            case 'top/blank':
                completename.removeClass('col-md-4 col-lg-4').addClass('col-md-12 col-lg-12');
                positiontitle.addClass('hide-this');
                selecttop.addClass('hide-this');
                selectmonth.addClass('hide-this');
                selectdate.removeClass('col-md-4 col-lg-4').addClass('col-md-6 col-lg-6');
                addressinput.removeClass('col-md-4 col-lg-4').addClass('col-md-6 col-lg-6');
                hisherinput.addClass('hide-this');
                break;
            case 'brokerage/customized':
                positiontitle.addClass('hide-this');
                selecttop.addClass('hide-this');
                selectmonth.addClass('hide-this');
                detailsinput.addClass('hide-this');
                hisherinput.addClass('hide-this');
                break;
            case 'brokerage/blank':
                completename.removeClass('col-md-4 col-lg-4').addClass('col-md-12 col-lg-12');
                positiontitle.addClass('hide-this');
                selecttop.addClass('hide-this');
                selectmonth.addClass('hide-this');
                selectdate.removeClass('col-md-4 col-lg-4').addClass('col-md-6 col-lg-6');
                addressinput.removeClass('col-md-4 col-lg-4').addClass('col-md-6 col-lg-6');
                hisherinput.addClass('hide-this');
                break;
        }
    }

    // get templates under specific type and category chosen by user
    function getTemplate(elem) {
        let parentTemp = elem.parentNode;
        let imgsrc = parentTemp.firstChild.nextSibling.src;
        const capture2 = $('#capture');
        const certificatebox = $('#certbox');
        certificatebox.removeClass('hide-this');
        capture2[0].style.backgroundImage = `url(${imgsrc})`;
        $('#certbox')[0].focus();

        var i = new Image();

        i.onload = function () {
            //alert( i.width+", "+i.height );
        };

        i.src = imgsrc;
        let imgheight = parseInt(i.height);
        let imgwidth = parseInt(i.width);
        $('#capture').css('height', '1080px');
        $('#capture').css('width', '1920px');
        $('#certbox').css('height', '90vh');

        const headingtoplocation = $('#heading').css('top');
        const headingleftlocation = $('#heading').css('left');
        $('#title').css('top', parseInt(headingtoplocation) + 70);
        $('#appreciation').css('top', parseInt(headingtoplocation) + 140).css('left', parseInt(headingleftlocation));
        $('#date').css('top', parseInt(headingtoplocation) + 210);
        $('#address').css('top', parseInt(headingtoplocation) + 280);
        $('#details').css('top', parseInt(headingtoplocation) + 140);
        $('#achievement').css('top', parseInt(headingtoplocation) + 140).css('left', parseInt(headingleftlocation));
        $('#recognition').css('top', parseInt(headingtoplocation) + 140).css('left', parseInt(headingleftlocation));
        $('#toptext').css('top', parseInt(headingtoplocation) + 140).css('left', parseInt(headingleftlocation));
        let designtype = $('#designtype').val();
        let designcategory = $('#designcategory').val();
        let typecat = designtype + '/' + designcategory;

        designTexts(typecat);
    }
    // display font design controller whenever you clicked on an element/text
    function fontControls(elem) {
        $('#fontcontrols').removeClass('hide-this');
        let elementchange = elem;
        let elementtxt = elementchange.id + 'txt';
        let fontSize = $('#' + elementtxt + '').css('font-size');
        let fontFamily = $('#' + elementtxt + '').css('font-family');
        let fontWeight = $('#' + elementtxt + '').css('font-weight');
        let fontStyle = $('#' + elementtxt + '').css('font-style');
        let fontColor = $('#' + elementtxt + '').css('color');

        const fontChangeSize = document.getElementsByClassName('fontChangeSize');
        fontChangeSize[0].id = elementtxt + 'Size';
        fontChangeSize[0].value = parseInt(fontSize);

        const fontChangeFamily = document.getElementsByClassName('fontChangeFamily');
        fontChangeFamily[0].id = elementtxt + 'Family';
        fontChangeFamily[0].value = fontFamily;

        const fontBold = document.getElementsByClassName('fontBold');
        fontBold[0].id = elementtxt + 'Bold';
        fontBold[0].classList.remove("active");
        if (fontWeight === '700') {
            fontBold[0].classList.add("active");
        }
        else {
            fontBold[0].classList.remove("active");
        }

        const fontItalic = document.getElementsByClassName('fontItalic');
        fontItalic[0].id = elementtxt + 'Italic';
        fontItalic[0].classList.remove("active");
        if (fontStyle === 'italic') {
            fontItalic[0].classList.add("active");
        }
        else {
            fontItalic[0].classList.remove("active");
        }

        const fontStyleColor = document.getElementsByClassName('fontColor');
        fontStyleColor[0].id = elementtxt + 'Color';
        function rgbToHex(red, green, blue) {
            const rgb = (red << 16) | (green << 8) | (blue << 0);
            return '#' + (0x1000000 + rgb).toString(16).slice(1);
        }
        fontColor = fontColor.replace('rgb(', '');
        fontColor = fontColor.replace(')', '');
        fontColor = fontColor.replace(/\s/g, "");
        //fontStyleColor[0].value = fontColor;

        const fontleft = document.getElementsByClassName('fontleft');
        fontleft[0].id = elementtxt + 'left';

        const fontcenter = document.getElementsByClassName('fontcenter');
        fontcenter[0].id = elementtxt + 'center';

        const fontright = document.getElementsByClassName('fontright');
        fontright[0].id = elementtxt + 'right';

        const fontjustify = document.getElementsByClassName('fontjustify');
        fontjustify[0].id = elementtxt + 'justify';
    }
    // function for changing font size
    function fontChangeSize(elem) {
        let fontResize = document.getElementById(elem.id);
        let fontid = elem.id.replace('Size', '');
        $('#' + fontid + '').css('font-size', elem.value + 'px');
    }
    // function for changing font family of text chosen
    function fontChangeFamily(elem) {
        let fontFamily = document.getElementById(elem.id);
        let fontid = elem.id.replace('Family', '');
        $('#' + fontid + '').css('font-family', elem.value);
    }
    // function for changing font color
    function fontColor(elem) {
        let fontResize = document.getElementById(elem.id);
        let fontid = elem.id.replace('Color', '');
        $('#' + fontid + '').css('color', elem.value);
    }
    // function for changing font to bold or lighter
    function fontBold(elem) {
        let fontResize = document.getElementById(elem.id);
        let fontid = elem.id.replace('Bold', '');
        let fontWeight = $('#' + fontid + '').css('font-weight');

        if (fontWeight === '700') {
            $('#' + elem.id + '').removeClass('active');
            $('#' + fontid + '').css('font-weight', 'lighter');
        }
        else {
            $('#' + elem.id + '').addClass('active');
            $('#' + fontid + '').css('font-weight', '700');
        }
    }
    // function for changing font to italic or normal
    function fontItalic(elem) {
        let fontResize = document.getElementById(elem.id);
        let fontid = elem.id.replace('Italic', '');
        let fontStyle = $('#' + fontid + '').css('font-style');

        if (fontStyle === 'italic') {
            $('#' + elem.id + '').removeClass('active');
            $('#' + fontid + '').css('font-style', 'normal');
        }
        else {
            $('#' + elem.id + '').addClass('active');
            $('#' + fontid + '').css('font-style', 'italic');
        }
    }
    // function for changing font alignment
    function fontAlignLeft(elem) {
        let fontResize = document.getElementById(elem.id);
        let fontid = elem.id.replace('txtleft', '');
        $('#' + fontid + '').css('text-align', 'left');
    }
    // function for changing font alignment
    function fontAlignCenter(elem) {
        let fontResize = document.getElementById(elem.id);
        let fontid = elem.id.replace('txtcenter', '');
        $('#' + fontid + '').css('text-align', 'center');
    }
    // function for changing font alignment
    function fontAlignRight(elem) {
        let fontResize = document.getElementById(elem.id);
        let fontid = elem.id.replace('txtright', '');
        $('#' + fontid + '').css('text-align', 'right');
    }
    // function for changing font alignment
    function fontAlignJustify(elem) {
        let fontResize = document.getElementById(elem.id);
        let fontid = elem.id.replace('txtjustify', '');
        $('#' + fontid + '').css('text-align', 'justify');
    }

    $('.apptop').html($('#designtop').val());
    $('.appmonth').html($('#designmonth').val());
    // function for detecting changes on the following inputs
    document.querySelectorAll('#designname ,#designheader, #designaddr, #detailstext').forEach((ele) => {
        ele.onkeyup = function (e) {
            switch (ele.id) {
                case 'designname':
                    $('#headingtxt').html(ele.value);
                    break;
                case 'designheader':
                    $('#titletxt').html(ele.value);
                    break;
                case 'designaddr':
                    $('#addresstxt').html('AT ' + ele.value);
                    $('.appaddr').html('<br>AT ' + ele.value);
                    $('.appaddr2').html('<br>AT ' + ele.value);
                    break;
                case 'detailstext':
                    $('.appdetails').html(ele.value);
                    break;
            }
        }
    });
    // function for detecting changes on the following inputs
    document.querySelectorAll('#designtop, #designmonth, #hisher').forEach((ele) => {
        ele.addEventListener("change", function (e) {
            switch (ele.id) {
                case 'designtop':
                    $('.apptop').html($('#designtop').val());
                    break;
                case 'designmonth':
                    $('.appmonth').html($('#designmonth').val());
                    $('#monthtxt').html($('#designmonth').val());
                    break;
            }
        });
    });
    // function for detecting changes on the following inputs
    $('#designdate').blur(function () {
        let objectDate = new Date(this.value);
        const nth = function (d) {
            if (d > 3 && d < 21) return 'TH';
            switch (d % 10) {
                case 1: return "ST";
                case 2: return "ND";
                case 3: return "RD";
                default: return "TH";
            }
        };

        const dateObj = new Date(this.value);
        const date = dateObj.getDate();
        const month = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"][dateObj.getMonth()];
        const year = dateObj.getFullYear();

        var dateString = date + nth(date) + ' ' + month + ' ' + year;
        $('.appdate').html('<br>GIVEN THIS ' + dateString);
        $('.appyear').html(year);
        $('#datetxt').html('ON THE ' + dateString);
    });

    // on element click, proceed to drag function
    document.querySelectorAll('#heading, #title, #top, #month, #date, #address, #details, #appreciation, #achievement, #recognition').forEach((ele) => {
        ele.onclick = function (e) {
            dragElement(ele);
            fontControls(ele);
            ele.style.resize = 'both';
            ele.style.overflow = 'auto';
            ele.style.backgroundColor = 'aliceblue';
            ele.style.border = '1px solid black';
            //detect clicks outside element
            document.addEventListener('click', function (event) {

                $("#fontcontrols").removeClass('hide-this');
                if ($(event.target).closest("#" + ele.id).length === 0) {
                    // detects if click is outside text element but inside font controls
                    if ($(event.target).closest("#fontcontrols").length === 0) {
                        $("#fontcontrols").addClass('hide-this');
                        ele.style.resize = '';
                        ele.style.overflow = '';
                        ele.style.backgroundColor = '';
                        ele.style.border = '';
                    }
                }
            });
        }
    });
    // function for dragging element
    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "txt")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "txt").onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }


    // remove class hide-this to this elements to ensure no doubling of classes
    $('#detailsinput').addClass('hide-this');
    $('#hisherinput').addClass('hide-this');
    $('#top').removeClass('hide-this');
    $('#month').removeClass('hide-this');
    $('#date').removeClass('hide-this');
    $('#address').removeClass('hide-this');
    $('#details').removeClass('hide-this');
    $('#achievement').removeClass('hide-this');
    $('#recognition').removeClass('hide-this');

    $(document).ready(function () {

        let designtype = $('#designtype').val();
        let designcategory = $('#designcategory').val();
        // set default state of divs
        $('#top').addClass('hide-this');
        $('#month').addClass('hide-this');
        $('#date').addClass('hide-this');
        $('#address').addClass('hide-this');
        $('#details').addClass('hide-this');
        $('#achievement').addClass('hide-this');
        $('#recognition').addClass('hide-this');
        $('#toptexttxt').addClass('hide-this');
        //get templates based on type and category
        const designurl = `${BASE_URL}/certificate/type-and-category/${designtype}/${designcategory}`;
        $.ajax({
            type: "GET",
            url: designurl,
            success: function (templates) {
                if (templates.length == '0') {
                    $('#scrolltemplates').html('<span class="text-sm text-red text-bold">No templates found on this category.</span>');
                }
                templates.forEach(temp => {
                    let templateurl = `${BASE_URL}/certificate_templates/${temp.image}`;
                    $('#scrolltemplates').append('<div class="col-sm-12 col-md-3 col-lg-3 mb-2 text-center"> <img src="' + templateurl + '" id="tempimg"> <button type="button" class="btn btn-sm btn-block bg-gradient-light mt-2 choosetemplate" onclick="getTemplate(this)">USE TEMPLATE</button> </div>');
                })
            }
        });

    });

    document.addEventListener("DOMContentLoaded", function () {
        // function for detecting changes in the following inpu, type and category
        document.querySelectorAll('#designtype, #designcategory').forEach((ele) => {

            ele.addEventListener("change", function () {

                let designtype = $('#designtype').val();
                let designcategory = $('#designcategory').val();
                let typecat = designtype + '/' + designcategory;

                templateSwitcher(typecat);

                const designurl = `${BASE_URL}/certificate/type-and-category/${designtype}/${designcategory}`;
                $.ajax({
                    type: "GET",
                    url: designurl,
                    success: function (templates) {
                        $('#scrolltemplates').html('');
                        if (templates.length == '0') {
                            $('#scrolltemplates').html('<span class="text-sm text-red text-bold">No templates found on this category.</span>');
                        }
                        templates.forEach(temp => {
                            let templateurl = `${BASE_URL}/certificate_templates/${temp.image}`;
                            $('#scrolltemplates').append('<div class="col-sm-12 col-md-3 col-lg-3 mb-2 text-center"> <img src="' + templateurl + '" id="tempimg"> <button type="button" class="btn btn-sm btn-block bg-gradient-light mt-2 choosetemplate" onclick="getTemplate(this)">USE TEMPLATE</button> </div>');
                        })
                    }
                });
            });
        });

    });
}