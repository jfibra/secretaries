
function generateID() {
    const canvas = document.createElement('canvas');
    canvas.width = 590;
    canvas.height = 1004;
    const ctx = canvas.getContext('2d');

    const bgImage = new Image();
    bgImage.onload = function () {
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

        const userDetails = {
            name: generateMemberName,
            id: generateMemberID,
            photo: document.getElementById('generate-profile-picture').src,
            membertype: generateMemberType
        };

        const userImage = new Image();
        userImage.onload = function () {
            ctx.drawImage(userImage, 50, 240, 225, 225);
            ctx.font = 'bold 30px sans-serif';
            ctx.fillStyle = '#403F64';
            const idText = `${userDetails.name}`;
            const idTextWidth = ctx.measureText(idText).width;
            const idX = (canvas.width - idTextWidth) / 2;
            ctx.fillText(idText, idX, 565);
            console.log(userDetails.membertype);
            const designation = userDetails.membertype === 'broker' ? 'BROKER' : 'SALESPERSON';
            const designationWidth = ctx.measureText(designation).width;
            const designationX = (canvas.width - designationWidth) / 2;
            ctx.fillText(designation, designationX, 700);

            ctx.font = '20px sans-serif';
            ctx.fillText(`${userDetails.id}`, 400, 372);

            const downloadLink = document.createElement('a');
            downloadLink.download = 'user-id-front.png';
            downloadLink.href = canvas.toDataURL('image/png;base64');
            downloadLink.click();
            generateBackID(); 
        };
        userImage.src = userDetails.photo;
    };
    bgImage.src = `${BASE_URL}/images/LeuterioRealtyIDFront.png`;
}

function generateBackID() {
    const canvasBack = document.createElement('canvas');
    canvasBack.width = 590;
    canvasBack.height = 1004;
    const ctxBack = canvasBack.getContext('2d');

    const bgImageBack = new Image();
    bgImageBack.onload = function () {
        ctxBack.drawImage(bgImageBack, 0, 0, canvasBack.width, canvasBack.height);

        const expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 6);
        const expiryDateString = expiryDate.toLocaleDateString('en-US');

        ctxBack.font = 'bold 32px sans-serif';
        ctxBack.fillStyle = '#403F64';
        ctxBack.fillText(`${expiryDateString}`, 300, 928);

        const downloadLink = document.createElement('a');
        downloadLink.download = 'user-id-back.png';
        downloadLink.href = canvasBack.toDataURL('image/png;base64');
        downloadLink.click();
    }
    bgImageBack.src = `${BASE_URL}/images/LeuterioRealtyIDBack.png`;
}

function generateFHBC()
{
    const canvas = document.createElement('canvas');
    canvas.width = 2008;
    canvas.height = 1181;
    const ctx = canvas.getContext('2d');

    const bgImage = new Image();
    bgImage.onload = function () {
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

        const userDetails = {
            name: generateMemberName,
            email: generateMemberEmail,
            mobile: generateMemberMobile,
            address: generateAddress,
            url: generateQRURL
        }

        ctx.font = 'bold 100px Open Sans';
        ctx.fillStyle = '#403F64';
        ctx.fillText(`${userDetails.name}`, 120, 300);
        ctx.font = '50px Open Sans';
        ctx.fillText(`${userDetails.email}`, 250, 550);
        ctx.font = '50px Open Sans';
        ctx.fillText(`${userDetails.mobile}`, 250, 700);
        ctx.font = '50px Open Sans';
        ctx.fillText(`${userDetails.address}`, 250, 850);

        // Create a new QRCode object
        const qrcodecontainer = new QRCode(document.createElement("div"), "");

        // Set the data to be encoded in the QR code
        qrcodecontainer.makeCode(`${userDetails.url}`);

        // Create an Image object from the QRCode data
        const qrImage = new Image();
        qrImage.src = qrcodecontainer._el.firstChild.toDataURL("image/png");
        qrImage.onload = function() {
            // Draw the QR code image onto the canvas
            ctx.drawImage(qrImage, canvas.width - 650, 400, 350, 350);

            // Download the canvas image
            const downloadLink = document.createElement('a');
            downloadLink.download = 'Business-Card-FH.png';
            downloadLink.href = canvas.toDataURL('image/png;base64');
            downloadLink.click();
        }

    }
    bgImage.src = `${BASE_URL}/images/BusinessCardFH.png`;
}

function generateLRBC()
{
    const canvas = document.createElement('canvas');
    canvas.width = 2008;
    canvas.height = 1181;
    const ctx = canvas.getContext('2d');

    const bgImage = new Image();
    bgImage.onload = function () {
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

        const userDetails = {
            name: generateMemberName,
            email: generateMemberEmail,
            mobile: generateMemberMobile,
            address: generateAddress,
            url: generateQRURL
        }

        ctx.font = 'bold 100px Open Sans';
        ctx.fillStyle = '#403F64';
        ctx.fillText(`${userDetails.name}`, 120, 300);
        ctx.font = '50px Open Sans';
        ctx.fillText(`${userDetails.email}`, 250, 550);
        ctx.font = '50px Open Sans';
        ctx.fillText(`${userDetails.mobile}`, 250, 700);
        ctx.font = '50px Open Sans';
        ctx.fillText(`${userDetails.address}`, 250, 850);

        // Create a new QRCode object
        const qrcodecontainer = new QRCode(document.createElement("div"), "");

        // Set the data to be encoded in the QR code
        qrcodecontainer.makeCode(`${userDetails.url}`);

        // Create an Image object from the QRCode data
        const qrImage = new Image();
        qrImage.src = qrcodecontainer._el.firstChild.toDataURL("image/png");
        qrImage.onload = function() {
            // Draw the QR code image onto the canvas
            ctx.drawImage(qrImage, canvas.width - 650, 400, 350, 350);

            // Download the canvas image
            const downloadLink = document.createElement('a');
            downloadLink.download = 'Business-Card-LR.png';
            downloadLink.href = canvas.toDataURL('image/png;base64');
            downloadLink.click();
        }

    }
    bgImage.src = `${BASE_URL}/images/BusinessCardLR.png`;
}

function generateRPHBC()
{
    const canvas = document.createElement('canvas');
    canvas.width = 2008;
    canvas.height = 1181;
    const ctx = canvas.getContext('2d');

    const bgImage = new Image();
    bgImage.onload = function () {
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

        const userDetails = {
            name: generateMemberName,
            email: generateMemberEmail,
            mobile: generateMemberMobile,
            address: generateAddress,
            url: generateQRURL
        }

        ctx.font = 'bold 100px Open Sans';
        ctx.fillStyle = '#403F64';
        ctx.fillText(`${userDetails.name}`, 120, 300);
        ctx.font = '50px Open Sans';
        ctx.fillText(`${userDetails.email}`, 250, 550);
        ctx.font = '50px Open Sans';
        ctx.fillText(`${userDetails.mobile}`, 250, 700);
        ctx.font = '50px Open Sans';
        ctx.fillText(`${userDetails.address}`, 250, 850);

        // Create a new QRCode object
        const qrcodecontainer = new QRCode(document.createElement("div"), "");

        // Set the data to be encoded in the QR code
        qrcodecontainer.makeCode(`${userDetails.url}`);

        // Create an Image object from the QRCode data
        const qrImage = new Image();
        qrImage.src = qrcodecontainer._el.firstChild.toDataURL("image/png");
        qrImage.onload = function() {
            // Draw the QR code image onto the canvas
            ctx.drawImage(qrImage, canvas.width - 650, 400, 350, 350);

            // Download the canvas image
            const downloadLink = document.createElement('a');
            downloadLink.download = 'Business-Card-RPH.png';
            downloadLink.href = canvas.toDataURL('image/png;base64');
            downloadLink.click();
        }

    }
    bgImage.src = `${BASE_URL}/images/BusinessCardRPH.png`;
}

var idpath = `${BASE_URL}/member-search`;
$("#idmembername").autocomplete({
    source: function (request, response) {

        $('#idmemberresults').html('');
        $('#idmemberresults').addClass('hide-this');

        $.ajax({
            url: idpath,
            type: 'GET',
            dataType: "json",
            data: {
                search: request.term
            },
            success: function (data) {
                data.forEach(obj => {
                    const node = document.createElement("li");
                    const lin = document.createElement("a");
                    const membertypespan = document.createElement("span");
                    const memberidspan = document.createElement("span");
                    const imgspan = document.createElement("span");
                    let text1 = obj.fn;
                    let text2 = obj.ln;
                    let result = text1.concat(" ", text2);
                    const memberspan = document.createTextNode(result);
                    const memberid = document.createTextNode(obj.memberid);
                    const membertype = document.createTextNode(obj.membertype);
                    const imgphoto = document.createTextNode(obj.photo);
                    node.className = "nav-item searchmember";
                    memberidspan.className = "hide-this memid";
                    membertypespan.className = "hide-this memtype";
                    imgspan.className = "hide-this memimg";
                    lin.className = "nav-link memname";
                    lin.appendChild(memberspan);
                    memberidspan.appendChild(memberid);
                    membertypespan.appendChild(membertype);
                    imgspan.appendChild(imgphoto);
                    node.appendChild(memberidspan);
                    node.appendChild(membertypespan);
                    node.appendChild(imgspan);
                    node.appendChild(lin);
                    document.getElementById("idmemberresults").appendChild(node);
                    $('#generateID').addClass('disabled');
                    $('#idmemberresults').removeClass('hide-this');
                    $('.searchmember').click(function () {
                        memname = $(this).find('.memname').text();
                        memid = $(this).find('.memid').text();
                        memtype = $(this).find('.memtype').text();
                        memimg = $(this).find('.memimg').text();
                        $('#idmembername').val(memname);
                        $('#idmember').val(memid);
                        $('#idmembertype').val(memtype);
                        $('#imglocation').val(
                            `${BASE_URL}/memberfiles/${memid}/${memimg}`
                        );
                        $('#idmemberresults').addClass('hide-this');
                        $('#generateID').removeClass('disabled');
                    });
                });
            }
        });
    },
    select: function (event, ui) {
        return false;
    }
});


