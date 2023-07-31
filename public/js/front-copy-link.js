function copyShareLink() {
    // Get the text field
    var copyText = document.getElementById("sharedlink");
    console.log(copyText);
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    var Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
    });
    // Alert the copied text
    Toast.fire({
        icon: "info",
        title: "Share link copied to clipboard.",
    });
}

function copyRefShareLink() {
    // Get the text field
    var copyText = document.getElementById("sharedReflink");
    console.log(copyText);
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    var Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
    });
    // Alert the copied text
    Toast.fire({
        icon: "info",
        title: "Share link copied to clipboard.",
    });
}
