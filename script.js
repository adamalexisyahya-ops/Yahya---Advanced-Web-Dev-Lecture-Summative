function upDate(previewPic) {
    console.log("Event Triggered: Updating image to " + previewPic.alt);
    let displayDiv = document.getElementById("image");
    
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    displayDiv.innerHTML = previewPic.alt;
}

function unDo() {
    console.log("Event Triggered: Resetting image");
    let displayDiv = document.getElementById("image");
    
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}

/* New function triggered by onload */
function initializeGallery() {
    console.log("Page loaded. Initializing tabfocus...");
    
    // Select all images with the class 'preview'
    let images = document.querySelectorAll(".preview");

    // For loop to add tabindex and log progress
    for (let i = 0; i < images.length; i++) {
        console.log("Adding tabindex to image " + (i + 1));
        images[i].setAttribute("tabindex", "0");
    }
}