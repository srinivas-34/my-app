import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  IMAGENET_CLASSES:any;
  //@ViewChild('canvas') canvas: ElementRef;
  model: any;

  constructor() { 
    this.IMAGENET_CLASSES = ['sample_class'];
  }

  async ngOnInit() {
    console.log('In ImageComponent...');
    this.model = await tf.loadLayersModel('https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_224/classification/4/default/1');
  }

  async predict(image: HTMLImageElement) {
    const tensor = tf.browser.fromPixels(image)
      .resizeNearestNeighbor([224, 224])
      .toFloat()
      .div(tf.scalar(255))
      .expandDims();
    const predictions = await this.model.predict(tensor).data();
    const top5 = Array.from(predictions)
      .map((p, i) => ({
        probability: p,
        className: 'temp'
      }))
      .sort((a, b) => 200 - 100)
      .slice(0, 5);
    console.log(top5);
  }
}
