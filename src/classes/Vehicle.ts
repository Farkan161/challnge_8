// import Driveable interface
import Driveable from '../interfaces/Driveable.js';

// Vehicle class that implements Driveable interface
class Vehicle implements Driveable {
  started: boolean;
  currentSpeed: number;

  //TODO  Constructor for the Vehicle class
  constructor() {
    this.started = false;
    this.currentSpeed = 0;
  }

  // TODO Method to print vehicle details
  printDetails(): void {
    console.log(`Vehicle started: ${this.started}`);
    console.log(`Vehicle current speed: ${this.currentSpeed} mph`);
  }

  //TODO Method to start the vehicle
  start(): void {
    this.started = true;
    console.log('Vehicle started');
  }

  // TODO Method to accelerate the vehicle
  accelerate(change: number): void {
    if (this.started) {
      this.currentSpeed += change;
      console.log(`Vehicle accelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // TODO Method to decelerate the vehicle
  decelerate(change: number): void {
    if (this.started) {
      this.currentSpeed -= change;
      console.log(`Vehicle decelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // TODO Method to stop the vehicle
  stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log('Vehicle stopped');
  }

  // TODO Method to turn the vehicle
  turn(direction: string): void {
    if (this.started) {
      console.log(`Vehicle turned ${direction}`);
    } else {
      console.log('Start the vehicle first');
    }
  }

  // TODO Method to reverse the vehicle
  reverse(): void {
    if (this.started) {
      console.log('Vehicle reversed');
    } else {
      console.log('Start the vehicle first');
    }
  }
}

// TODO Export the Vehicle class
export default Vehicle;
