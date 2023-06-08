var  sect=document.getElementById("about");

var div1=document.createElement("div");
sect.appendChild(div1);
div1.classList.add("container");

var div2=document.createElement("div");
div1.appendChild(div2);
div2.classList.add("col");


var div3=document.createElement("div");
div2.appendChild(div3);
div3.classList.add("card");

var image=document.createElement("img");
div3.appendChild(image);
image.src="images/sarah.jpg";
image.setAttribute("width" , "40%");

var head=document.createElement("h1")
div3.appendChild(head);
head.classList.add("head")
head.innerHTML="Sarah Jhonson";

var hed=document.createElement("h4")
div3.appendChild(hed);
hed.classList.add("head")
hed.innerHTML="Web Developer";

var para=document.createElement("p")
div3.appendChild(para);
para.classList.add("para")
para.innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ";


var hed=document.createElement("a")
div3.appendChild(hed);
hed.classList.add("color")
hed.innerHTML="Read More";
hed.setAttribute("color","#2874A6");