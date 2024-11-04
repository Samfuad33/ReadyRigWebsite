document.getElementById('problem-selection').addEventListener('change', function() {

    // These values are ids given based on user selection on the form box
    const selectedValue = this.value; // Value will be the id we get from above
    const nothingStatusDiv = document.getElementById("nothing");
    const orderStatusDiv = document.getElementById("order-status");
    const refundStatusDiv = document.getElementById("refund-status");
    const trackStatusDiv = document.getElementById("track-status");
    const contactSupportDiv = document.getElementById("contact-support");
    const subjectBoxDiv = document.getElementById("subject-box");
    const descriptionBoxDiv = document.getElementById("description-box");
    const attachmentBoxDiv = document.getElementById("attachment-box");

    // We change the display value on the css depending on user selection to display only what user needs
    switch (selectedValue) {
        case "nothing":
            orderStatusDiv.style.display = "none";
            refundStatusDiv.style.display = "none";
            trackStatusDiv.style.display = "none";
            contactSupportDiv.style.display = "none";
            subjectBoxDiv.style.display = "none";
            descriptionBoxDiv.style.display = "none";
            attachmentBoxDiv.style.display = "none";
            break;
        case "status":
            orderStatusDiv.style.display = "block";
            refundStatusDiv.style.display = "none";
            trackStatusDiv.style.display = "none";
            contactSupportDiv.style.display = "none";
            subjectBoxDiv.style.display = "none";
            descriptionBoxDiv.style.display = "none";
            attachmentBoxDiv.style.display = "none";
            break;
        case "refund":
            refundStatusDiv.style.display = "block";
            orderStatusDiv.style.display = "none";
            trackStatusDiv.style.display = "none";
            contactSupportDiv.style.display = "none";
            subjectBoxDiv.style.display = "none";
            descriptionBoxDiv.style.display = "none";
            attachmentBoxDiv.style.display = "none";
            break;
        case "contact":
            refundStatusDiv.style.display = "none";
            orderStatusDiv.style.display = "block";
            trackStatusDiv.style.display = "none";
            contactSupportDiv.style.display = "block";
            subjectBoxDiv.style.display = "block";
            descriptionBoxDiv.style.display = "block";
            attachmentBoxDiv.style.display = "block";
            break;
        case "track":
            refundStatusDiv.style.display = "none";
            orderStatusDiv.style.display = "none";
            trackStatusDiv.style.display = "block";
            contactSupportDiv.style.display = "none";
            subjectBoxDiv.style.display = "none";
            descriptionBoxDiv.style.display = "none";
            attachmentBoxDiv.style.display = "none";
            break;
    }
});
