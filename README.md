# Radar Detection using Arduino Uno and Ultrasonic Sensor

This project demonstrates a **mini radar detection system** using an **Arduino Uno**, **HC-SR04 ultrasonic sensor**, and **servo motor**. The system scans its surroundings and detects obstacles, displaying the data on a **real-time radar interface** created with **Processing IDE**.

---

## 🔧 Features
- Detects objects using the **HC-SR04 Ultrasonic Sensor**
- Rotates sensor with a **servo motor** for scanning
- Displays detected objects on a **radar-like visualization**
- Adjustable detection range and sensitivity
- Simple, cost-effective Arduino-based project

---

## 🛠️ Components Required
- Arduino Uno  
- HC-SR04 Ultrasonic Sensor  
- SG90 Servo Motor  
- Jumper wires  
- Breadboard (optional)  
- USB cable for Arduino  

---

## 📋 Circuit Diagram
- Connect **VCC** of HC-SR04 to **5V**, **GND** to **GND**  
- Connect **Trig** to Arduino **pin 9**, **Echo** to **pin 10**  
- Connect **Servo signal** to Arduino **pin 11**, **VCC** to **5V**, **GND** to **GND**  

*(Include an image of the circuit diagram here if available)*

---

## 💻 Software Requirements
- [Arduino IDE](https://www.arduino.cc/en/software)  
- [Processing IDE](https://processing.org/download/)  

---

## ⚡ How to Run
1. Connect all components as per the circuit diagram.  
2. Open the Arduino code (`Radar.ino`) in Arduino IDE and upload it to the Arduino Uno.  
3. Open the Processing sketch (`RadarVisualization.pde`) and run it to see the real-time radar display.  
4. Move objects in front of the sensor and observe them on the radar visualization.  

---

## 🧠 Working Principle
1. The **ultrasonic sensor** sends out a sound pulse and measures the time it takes to bounce back from an object.  
2. The **servo motor** rotates the sensor across a defined angle range to scan the environment.  
3. Distance data is sent from Arduino to Processing IDE via serial communication.  
4. Processing displays the object positions on a radar-like screen in real-time.  

---

## 📈 Applications
- Object detection and distance measurement  
- Robotics and autonomous systems  
- Security monitoring  
- Educational purposes to understand radar/sonar concepts  

---

## 📂 Repository Structure
