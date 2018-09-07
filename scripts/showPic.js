
        function showPic(whichPic){
            //graps the image
            var source = whichPic.getAttribute("href");
            //grabs the image location
            var placeholder = document.getElementById("placeholder");
            //sets the image source to the placeholder
            placeholder.setAttribute("src", source);
            //graps the image title
            var titleText = whichPic.getAttribute("title");
            //grabs the caption location
            var description = document.getElementById("description");
            //sets image title to caption
            description.firstChild.nodeValue = titleText;

        }

        