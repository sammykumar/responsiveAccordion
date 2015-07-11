/* Accordion Helper Helper */

// 1. Declare all variables

var options = INSTALL_OPTIONS;
var images = [];
var titles = [];
var captions = [];
var links = [];

var height = options.height;


for (i = 0; i < options.images.length; i ++)
{
	images.push(options.images[i].image);
	titles.push(options.images[i].title);
	captions.push(options.images[i].caption);
	links.push(options.images[i].link);
}

/*console.log(images);
console.log(titles);
console.log(captions);
console.log(links);
console.log(height);*/


//2. Append images and height into CSS 
// NEW LOGIC: Keep existing styles.css. Append rules that the involve either images or height properties
var css = document.createElement("style");
css.type = "text/css";

//A. Add height to .eager-accordion
var heightRule = ".eager-accordion { height:" + height + "px; }";

//B. Add images to eager-accordion ul li:nth-child(ARRAY INDEX HERE)
var imagesRule = [];
for (i = 0; i < images.length; i ++)
{
	imagesRule.push(".eager-accordion ul li:nth-child(" + (i+1) + ") {background-image: url(http://" + images[i] + ");}")
}

//C. Add css rule to page
var entireCSSRule = heightRule;
for (i = 0; i < images.length; i ++)
{
	entireCSSRule += imagesRule[i];
}

//console.log(entireCSSRule);

css.innerHTML = entireCSSRule;
//css.innerHTML = ".test { color:aqua;}"; testing
document.body.appendChild(css); //DOM loads before so you dont see this in source (POTENTIAL LOADING PROBLEM)

//3. Build accordion HTML
/*
	<div class="eager-accordion">
		<ul>
		
		<!--- Duplcate from here -->
			<li>
				<div>
					<a href = "$link">
						<h2>$title</h2>
						<p>$caption</p>
					</a>
				</div>
			</li>
		<!-- End Duplication -->
			
		</ul>
	</div>
		
*/

var div = document.createElement("div");
var parentul = document.createElement("ul");



var slides = []; //contains repeatable elements

for (i = 0; i < images.length; i ++)
{
	var li = document.createElement("li");
	var liDiv = document.createElement("div");
	var anchor = document.createElement("a");
	var h2 = document.createElement("h2");
	var p = document.createElement("p");
	
	p.innerHTML = captions[i];
	h2.innerHTML = titles[i];
	anchor.href = links[i];
	
	//Building that repeatable elements
	anchor.appendChild(h2);
	anchor.appendChild(p);
	liDiv.appendChild(anchor);
	li.appendChild(liDiv);
	
	parentul.appendChild(li);
	
}

div.appendChild(parentul);
div.classList.add("eager-accordion");
document.body.appendChild(div);
