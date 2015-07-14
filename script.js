/* Accordion Helper Helper */
(function(){
  if (!document.addEventListener) return;

  // 1. Declare all variables

	var options = INSTALL_OPTIONS;
	
	var locationToAdd = options.location;
	var images = [];
	var titles = [];
	var captions = [];
	var links = [];
	
	var height = options.height;
	
	
	for (i = 0; i < options.imagesArr.length; i ++)
	{
		images.push(options.imagesArr[i].image);
		titles.push(options.imagesArr[i].title);
		captions.push(options.imagesArr[i].caption);
		links.push(options.imagesArr[i].link);
	}
	
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
		imagesRule.push(".eager-accordion ul li:nth-child(" + (i+1) + ") {background-image: url(https:" + images[i] + ");}")
	}
	
	//C. Add css rule to page
	var entireCSSRule = heightRule;
	for (i = 0; i < images.length; i ++)
	{
		entireCSSRule += imagesRule[i];
	}
	
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


	var add = function(){
		//document.body.appendChild(div);
  		div = Eager.createElement(locationToAdd);
  	}

  	if (document.readyState == 'loading')
    	document.addEventListener('DOMContentLoaded', add);
	else
    	add();
})()
