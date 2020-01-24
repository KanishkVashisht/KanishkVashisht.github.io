function setup() {
	createCanvas(1000,800); // make an HTML canvas element width x height pixels
}

let this_minute = 0;
function draw() {
	let last_minute = this_minute;
	this_minute = minute();
	if(this_minute !== last_minute){
		console.log(this_minute)
	}


	background(255);
	textSize(32);
	fill(255,187,1)
	text(hour(), 10, 30);
	fill(120,167,204)
	text(minute(), 10, 60);
	fill(204,103,100)
	text(second(), 10, 90);

	const scaling_factor = 200;
	const radius_hour = 1 * scaling_factor; 
	const radius_minute = 0.5 * scaling_factor;
	const radius_second = 0.3 * scaling_factor;
	const circle_radius = 12;
	const stroke_width = 3;
	const x_center = 500;
	const y_center = 400;
	const rad_clock_start = -1.57;
	const rad_clock_finish = 6.28319-1.57


	// mapping time to angle in radiians
	const theta_hour = map(hour(), 0, 24, rad_clock_start, rad_clock_finish, true);
	const theta_minute = map(minute(), 0, 60, rad_clock_start, rad_clock_finish, true);
	const theta_second = map(second(), 0, 60, rad_clock_start, rad_clock_finish, true);


	const x_hour = radius_hour*Math.cos(theta_hour);
	const y_hour = radius_hour*Math.sin(theta_hour);

	const x_minute = radius_minute*Math.cos(theta_minute);
	const y_minute = radius_minute*Math.sin(theta_minute);

	const x_second = radius_second*Math.cos(theta_second);
	const y_second = radius_second*Math.sin(theta_second);


	stroke(255,187,1)
	fill(255,187,1)
	circle(x_center, y_center, circle_radius);

	//hour hand
	fill(255,129,124)
	translate(x_hour, y_hour)
	strokeWeight(8)
	line( x_center-x_hour, y_center-y_hour, x_center, y_center);
	strokeWeight(0)
	circle(x_center, y_center, circle_radius/1.5);
	stroke(255,129,124)

	// minute hand
	fill(120,167,204)
	translate(x_minute, y_minute)
	strokeWeight(4)
	line(x_center-x_minute, y_center-y_minute, x_center, y_center);
	strokeWeight(0)
	circle(x_center, y_center, circle_radius/2);
	stroke(120,167,204)

	// second hand
	fill(204,103,100)
	translate(x_second, y_second)
	strokeWeight(2)
	line(x_center-x_second, y_center-y_second, x_center, y_center);
	strokeWeight(0)
	circle(x_center, y_center, circle_radius/4);


}
