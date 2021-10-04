//Mass downloads images from a page
//The query selector argument, is a css selector(see css selector reference) and should be changed based
//on current site needs.
//e.g: .class / #id / div / a[href$=".jpg"];
var images = document.querySelectorAll('a[href$=".jpg"]');
var srcList = [];
var i = 0;

console.log(images.length);

setInterval(function(){
    if(images.length > i){
        srcList.push(images[i].href);
        var link = document.createElement("a");
        link.id=i;
        link.download = images[i].title;
        link.href = images[i].href;
        link.click();
        i++;
    }
},1500);
