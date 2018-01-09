MeterWidget
===========

This is a small project that shows of some simple meters.
To get it up and running will need some of the 32x32 pixel icons from 
https://github.com/Fitbit/sdk-design-assets and store them in the 
fitbit-design-assets folder

I didn't want to add the to the project as they fall under a different kind
of license and INAL so.

You will need...
* stat_am_solid32px.png
* stat_cals_solid_32px.png
* stat_eleveation_32px_p.png
* stat_hr_solid_32px.png
* stat_steps_solid_32px.png
* stat_floors_solid_32px.png

...or change the `index.gui` file.


Usage
=====
Include the [resources/meter_widget.gui](./resources/meter_widget.gui) and [app/meter_widget.js](./app/meter_widget.js) in you own project
along with any 32pxx32px icons that you would like in you own project.

Look at [app/index.js](./app/index.js) and [resources/index.gui](./resources/index.gui) for examples on how to use them. 
It's not that hard.
If you do your own icons, make sure they are 8-bit greyscale to work with the 
[GrayScale Magic!](https://dev.fitbit.com/build/guides/user-interface/css/#grayscale-magic-)
that I'm using.

License
=======
MIT License

Copyright (c) 2018 Peter Magnusson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
