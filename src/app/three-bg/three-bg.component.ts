import { Component, ElementRef, AfterViewInit, HostListener, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-bg',
  templateUrl: './three-bg.component.html',
  styleUrls: ['./three-bg.component.css']
})
export class ThreeBgComponent implements AfterViewInit {
  @ViewChild('backgroundCanvas', { static: true }) canvasRef!: ElementRef;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  stars: THREE.Mesh[] = [];
  mouseX = 0;
  mouseY = 0;
  time = 0;

  ngAfterViewInit() {
    this.initThreeJS();
    this.addSpheres();
    this.animate();
  }

  initThreeJS() {

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.z = 5;
  

    this.scene = new THREE.Scene();
  
  
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef.nativeElement, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 1);  
  

    document.body.appendChild(this.renderer.domElement);
  
    window.addEventListener('resize', () => this.onWindowResize(), false);
  }
  

  addSpheres() {
  
    for (let z = -1000; z < 1000; z += 6) {
      const random = +(Math.random() * 10).toFixed(0);
      let colorValue = null;
      switch (random) {
        case 0:
        case 1:
        case 2:
        case 3:
          colorValue = 0x8cde0d;
          break;
        case 4:
        case 5:
        case 6:
          colorValue = 0x00bfff;
          break;
        case 7:
        case 8:
        case 9:
          colorValue = 0x8855f3;
          break;
        default:
          colorValue = 0x8cde0d;
          break;
      }

      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: colorValue });

      const sphere = new THREE.Mesh(geometry, material);
      const sphere1 = new THREE.Mesh(geometry, material);

      sphere.position.x = Math.random() * 1000 - 500;
      sphere.position.y = Math.random() * 1000 - 500;
      sphere1.position.x = Math.random() * 1000 - 500;
      sphere1.position.y = Math.random() * 1000 - 500;

      sphere.position.z = z;
      sphere1.position.z = z;


      sphere.scale.x = sphere.scale.y = 2;
      sphere1.scale.x = sphere1.scale.y = 2;


      this.scene.add(sphere);
      this.scene.add(sphere1);

      this.stars.push(sphere);
      this.stars.push(sphere1);
    }
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
  
    this.time += 0.01;
  
    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];
  
      // Here I slow down the star movement 
      star.position.z += (i / 120); 
  
      if (star.position.z > 1000) {
        star.position.z -= 2000;
      }
    }
  

    const cameraSpeed = 0.02; 
    this.camera.position.x += (this.mouseX * 0.001 - this.camera.position.x) * cameraSpeed;
    this.camera.position.y += (-this.mouseY * 0.001 - this.camera.position.y) * cameraSpeed;
    this.camera.lookAt(this.scene.position);
  
    this.renderer.render(this.scene, this.camera);
  }
  

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX - window.innerWidth / 2;
    this.mouseY = event.clientY - window.innerHeight / 2;
  }
}
