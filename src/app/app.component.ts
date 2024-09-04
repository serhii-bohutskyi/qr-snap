import { Component, ViewChild, ElementRef } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QRCodeModule, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QR Code Generator';
  qrData: string = ''; // QR code input data
  elementType: 'canvas' = 'canvas'; // Default to canvas
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H' = 'M'; // Default error correction level
  margin: number = 4;
  width: number = 300;
  colorDark: string = '#000000'; // Default dark color for the QR code
  colorLight: string = '#ffffff'; // Default light color (background)
  transparentBackground: boolean = false; // Background transparency toggle

  @ViewChild('qrcode') qrcodeElement!: ElementRef;

  // Toggle background transparency
  toggleTransparentBackground() {
    this.colorLight = this.transparentBackground ? '#ffffff00' : '#ffffff';
  }

  // Function to download the QR code as an image (PNG)
  downloadQR() {
    const canvas = this.qrcodeElement.nativeElement.querySelector('canvas');
    if (canvas) {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'qr-code.png';
      link.click();
    }
  }
}
