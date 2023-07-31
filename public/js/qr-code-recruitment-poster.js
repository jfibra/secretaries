function qrCodeRecruitment() {
    var recruitname = document.querySelector('#recruitname').innerHTML;
    var sharedReflink = document.querySelector('#sharedReflink').value;
  
    const canvas = document.createElement('canvas');
    canvas.width = 2000;
    canvas.height = 2000;
    const ctx = canvas.getContext('2d');
  
    const bgImage = new Image();
    bgImage.onload = function() {
      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
  
      // Create a new QRCode object
      const qrcodecontainer = new QRCode(document.createElement("div"), "");
  
      // Set the data to be encoded in the QR code
      qrcodecontainer.makeCode(sharedReflink);
  
      // Create an Image object from the QRCode data
      const qrImage = new Image();
      qrImage.src = qrcodecontainer._el.firstChild.toDataURL("image/png");
      qrImage.onload = function() {
        // Calculate the position to center the QR code
        const qrX = (canvas.width - qrImage.width) / 2;
        const qrY = (canvas.height - qrImage.height) / 2;
  
        // Draw the QR code image onto the canvas
        ctx.drawImage(qrImage, 700, 800, 550, 550);
  
        // Set the text properties
        ctx.font = '150px Impact';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
  
        // Calculate the text width and height
        const textWidth = ctx.measureText(recruitname).width;
        const lineHeight = 250;
  
        // Calculate the position to center the text
        const textX = canvas.width / 2;
        const textY = canvas.height - lineHeight;
  
        // Wrap the text if it exceeds the canvas width
        const words = recruitname.split(' ');
        let line = '';
        let wrappedText = '';
  
        for (let i = 0; i < words.length; i++) {
          const testLine = line + words[i] + ' ';
          const testWidth = ctx.measureText(testLine).width;
          if (testWidth > canvas.width) {
            wrappedText += line.trim() + '\n';
            line = words[i] + ' ';
          } else {
            line = testLine;
          }
        }
        wrappedText += line.trim();
  
        // Draw the wrapped text onto the canvas
        const lines = wrappedText.split('\n');
        const startY = 1800 - (lines.length - 1) * lineHeight / 2;
        for (let i = 0; i < lines.length; i++) {
          ctx.fillText(lines[i], textX, startY + i * lineHeight);
        }
  
        // Download the canvas image
        const downloadLink = document.createElement('a');
        downloadLink.download = 'Recruitment QR Code.png';
        downloadLink.href = canvas.toDataURL('image/png;base64');
        downloadLink.click();
      }
    }
    bgImage.src = `${BASE_URL}/RegistrationQR/Square/3.png`;
  }
  