window._img = function(containerId, config) {
    var containerElement = document.getElementById(containerId);
    
    var images = config.images;
    prepareView(images);
    
    function prepareView(images) {
        var galleryElement = document.createElement("div");
        galleryElement.setAttribute("class", "image-gallery");
        
        createTitleBar(galleryElement);
        
        createSelectedImageDiv(galleryElement);
        
        createImageRibbonDiv(galleryElement);
        
        containerElement.appendChild(galleryElement);
        
    }
    
    function createTitleBar(galleryElement) {
        var titleBarElement = document.createElement("div");
        if ((config) && (config.title)) {
            titleBarElement.innerHTML = config.title;
        }
        galleryElement.appendChild(titleBarElement);
    }
    
    function createSelectedImageDiv(galleryElement) {
        var selectedImageDiv = document.createElement("div");
        selectedImageDiv.setAttribute("class", "selectedImageDiv");
        
        var imageDiv = createImageDiv("selected-image", images[0]);
        
        selectedImageDiv.appendChild(imageDiv);
        
        galleryElement.appendChild(selectedImageDiv);
    }
    
    function changeImage(image) {
        var selectedImageDiv = document.querySelector(".selectedImageDiv");
        
        var imageDiv = createImageDiv("selected-image", image);
        
        //TODO remove old child
        var childCount = selectedImageDiv.childNodes.length;
        for (var i=0;i<childCount;i++) {
            selectedImageDiv.removeChild(selectedImageDiv.childNodes[0]);
        }
        selectedImageDiv.appendChild(imageDiv);
        
    }
    function createImageRibbonDiv(galleryElement) {
        for (var imgIndex in images) {
            var imgElement = createImageDiv("ribbon-img", images[imgIndex]);
            
            imgElement.addEventListener("click", changeImage.bind(imgElement, images[imgIndex]));
            
            galleryElement.appendChild(imgElement);
        }
    }
    
    function createImageDiv(cssClass, image) {
        var imageDiv = document.createElement
        var imgElement = document.createElement("img");
            imgElement.setAttribute("src",image.src);
        return imgElement;
    }
};

window._img.on = function(eventName, callbackFn) {
    
}
