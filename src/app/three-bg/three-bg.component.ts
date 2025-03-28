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
  particles!: THREE.Points;
  mouseX = 0;
  mouseY = 0;
  particleSystem!: THREE.Points;
  time = 0;

  ngAfterViewInit() {
    this.initThreeJS();
    this.animate();
  }

  initThreeJS() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000d1a);

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef.nativeElement, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const positions = new Float32Array(particlesCount * 3);
    const velocities = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15; 
      velocities[i] = (Math.random() - 0.5) * 0.1; 
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x33ccff,  
      size: 0.07,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    this.particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particleSystem);

    window.addEventListener('resize', () => this.onWindowResize());
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    
    this.time += 0.01;

    this.particleSystem.rotation.y += 0.002;

    this.camera.position.x += (this.mouseX * 0.001 - this.camera.position.x) * 0.05;
    this.camera.position.y += (-this.mouseY * 0.001 - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX - window.innerWidth / 2;
    this.mouseY = event.clientY - window.innerHeight / 2;
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
