/* Accordion Helper Helper */

// 1. Declare all variables

var options = INSTALL_OPTIONS;
var images = [];
var titles = [];
var captions = [];
var links = [];

var height = options.height;

for (i = 1; i < options.images.length; i ++)
{
	images.push(options.images[i].image);
	titles.push(options.images[i].title);
	captions.push(options.images[i].caption);
	links.push(options.images[i].link);
}

console.log(images);
console.log(titles);
console.log(captions);
console.log(links);
console.log(height);


//2. Append images and height into CSS 
// NEW LOGIC: Keep existing styles.css. Append rules that the involve either images or height properties


//3. Build accordion HTML
/*
	<div class="accordion">
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
