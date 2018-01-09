/*
 * Entry point for the watch app
 */
import document from 'document';
import { MeterWidget } from './meter_widget';

console.log("App Started");

//this one uses goalValue and .setValue instead of the others that use angle.
let floors = new MeterWidget(document.getElementById('meter7'), {goalValue: 15});
floors.setValue(10);

//bunch of meters that use angle
let meters = [
  new MeterWidget(document.getElementById('meter1')),
  new MeterWidget(document.getElementById('meter2')),
  new MeterWidget(document.getElementById('meter3')),
  new MeterWidget(document.getElementById('meter4')),
  new MeterWidget(document.getElementById('meter5'), {onChange: colorHandler}),
  new MeterWidget(document.getElementById('meter6'))
];



//set them all to different start angles
var angle=0;
var step = 360/meters.length;
meters.forEach((meter, index) => {
  meter.setAngle(angle);
  angle += step;
});


//handler to change color depending on angle
function colorHandler(sender, angle) {
  //change some colors.
  if (angle < 90) {
    sender.setColor('fb-red');
  }
  else if (angle < 180) {
    sender.setColor('fb-blue');
  }
  else if (angle < 270) {
    sender.setColor('fb-orange');
  }
  else {
    sender.setColor('fb-green');
  }
}

//make most of them move on regular interval.
setInterval(() => {
  meters.forEach( (meter, index) => {
    let angle = meter.getAngle();
    meter.setAngle(angle + 10);
  });
},1000);


