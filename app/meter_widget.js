/*
 * Copyright 2018 Peter Magnusson <kmpm@birchroad.net>
 */

export class MeterWidget {
  
  constructor(element, options = {}) {
    this._angle = 0;
    this._value = 0;
    
    this.element = element;
    this.options = options;
    this.arc = element.getElementById('arc');
    this.image = this.element.getElementById('image');
    this.goalValue = options.goalValue || 360;
    this.onChange = options.onChange;
    this._color = this.arc.style.fill;
  }
  
  setAngle(angle) {
    if (angle === this._angle) {
      return;
    }
    this._angle = angle;
    if (this._angle > 360) {
      this.setAngle(this._angle - 360);
    }
    this.arc.sweepAngle = this._angle;
    if (typeof this.onChange === 'function') {
      this.onChange(this, this._angle, this._value);
    }
  }

  getAngle() {
    return this._angle;
  }
  
  setValue(value) {
    this._value = value;
    let angle = Math.floor(360 * (value / this.goalValue));
    if (angle > 360) {
      angle = 360;
    }
    this.setAngle(angle);
  }
  
  setColor(color) {
    if (color === this._color) {
      return;
    }
    this._color = color;
    this.arc.style.fill = color;
    this.image.style.fill = color;
  }
}