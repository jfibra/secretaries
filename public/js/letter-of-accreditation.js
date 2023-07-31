

function generatePDF() {
    const member = document.getElementById("membersearch").value;
    const startdate = document.getElementById("startdate").value;
    const membertype = document.getElementById("membertype").value;
    const memberid = document.getElementById("memberid").value;
    const lrlogo = "{{ asset('images/certificate-img.jpg') }}"
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
        "November", "December"
    ];
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = month[date.getMonth()];
    var yyyy = date.getFullYear();
    date = mm + ' ' + dd + ', ' + yyyy;
    var name = member; /* Replace uName with the Storyline variable holding the user's name */
    var doc = new jsPDF({
        orientation: 'p',
        lineHeight: '3.0',
        unit: 'mm',
        format: 'legal',
        putOnlyUsedFonts: true
    })
    var img = new Image;
    var lMargin = 15; //left margin in mm
    var rMargin = 15; //right margin in mm
    var pdfInMM = 210; // width of A4 in mm
    img.onload = function() {
        doc.addImage(this, 15, 15, 98, 32);
        doc.setFontSize(9); /* Set the font size by changing the number between the parentheses */
        doc.setTextColor(0, 0,
            0); /* Change the RGB text color by changing the numbers between the parentheses */
        //doc.text("133 Aznar Road, Cebu City \nPhilippines 6000 \nTel: (6332) 254-8900 \nFax: (6332) 253-5300 \nEmail: filipinohomes@gmail.com", 78, 27, null, null, 'center');
        doc.setFontSize(12);
        doc.fromHTML('<b>CERTIFICATE OF ACCREDITATION</b>', 73, 77);
        doc.setFontSize(10);
        doc.text("TO WHOM IT MAY CONCERN:", 15, 97, null, null, 'center');
        doc.setFontSize(10);
        var paragraph = "This is to certify that " + name +
            " is recognized and accredited by Leuterio Realty And Brokerage as " + membertype + " since " +
            startdate +
            " up to the present and as such, is bestowed with the privileges and entitlements appurtenant to this accreditation.";
        var lines = doc.splitTextToSize(paragraph, (pdfInMM - lMargin - rMargin));
        doc.text(lMargin, 107, lines);
        doc.setFontSize(10);
        doc.text("This certificate has been issued for whatever legal purpose it may serve.", 15, 146, null,
            null, 'center');
        doc.setFontSize(10);
        doc.text("Signed:", 15, 166, null, null, 'center');
        doc.setFontSize(11);
        doc.text("Anthony Gerard O. Leuterio", 15, 183, null, null, 'center');
        doc.setFontSize(11);
        doc.text("Founder, President", 15, 190, null, null, 'center');
        doc.setFontSize(10);
        doc.text("ID:", 15, 206, null, null, 'center');
        doc.setFontSize(10);
        doc.text(date, 15, 55, null, null,
            'center'); /* See above for the full explanation of the doc.text() function */
        doc.text(memberid, 23, 206, null, null,
            'center'); /* See above for the full explanation of the doc.text() function */
        doc.save(
            "Certificate of Accreditation.pdf"
        ); /* Swap out ‘Certificate’ with what you want your certificate to be named */
    };
    img.crossOrigin = "";
    img.src =
        lrlogo; /* Change the file name between these quotes to the file that you exported as the base certificate */
}



var path = `${BASE_URL}/member-search`;
$("#membersearch").autocomplete({
    source: function(request, response) {

        $('#membersearchresults').html('');
        $('#membersearchresults').addClass('hide-this');

        $.ajax({
            url: path,
            type: 'GET',
            dataType: "json",
            data: {
                search: request.term
            },
            success: function(data) {
                data.forEach(obj => {
                    const node = document.createElement("li");
                    const lin = document.createElement("a");
                    const membertypespan = document.createElement("span");
                    const memberidspan = document.createElement("span");
                    let text1 = obj.fn;
                    let text2 = obj.ln;
                    let result = text1.concat(" ", text2);
                    const memberspan = document.createTextNode(result);
                    const memberid = document.createTextNode(obj.memberid);
                    const membertype = document.createTextNode(obj.membertype);
                    node.className = "nav-item searchmember";
                    memberidspan.className = "hide-this memid";
                    membertypespan.className = "hide-this memtype";
                    lin.className = "nav-link memname";
                    lin.appendChild(memberspan);
                    memberidspan.appendChild(memberid);
                    membertypespan.appendChild(membertype);
                    node.appendChild(memberidspan);
                    node.appendChild(membertypespan);
                    node.appendChild(lin);
                    document.getElementById("membersearchresults").appendChild(
                        node);
                    $('#generateaccreditation').addClass('disabled');
                    $('#membersearchresults').removeClass('hide-this');

                    $('.searchmember').click(function() {
                        memname = $(this).find('.memname').text();
                        memid = $(this).find('.memid').text();
                        memtype = $(this).find('.memtype').text();
                        $('#membersearch').val(memname);
                        $('#memberid').val(memid);
                        $('#membertype').val(memtype);
                        $('#membersearchresults').addClass('hide-this');
                        $('#generateaccreditation').removeClass('disabled');
                    });
                });
            }
        });
    },
    select: function(event, ui) {
        return false;
    }
});