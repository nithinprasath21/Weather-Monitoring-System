
# Weather Monitoring System

## Overview
The Weather Monitoring System is an IoT-based project designed to provide real-time weather data using an Automatic Weather Station (AWS). This system utilizes various sensors to monitor environmental parameters such as temperature, humidity, wind speed, and rainfall.

## Features
- **Real-Time Monitoring**: Access live weather data from anywhere.
- **User-Friendly Interface**: Simple and intuitive web interface for viewing weather conditions.
- **Data Logging**: Historical data storage for analysis and reporting.
- **IoT Integration**: Utilizes MQTT protocol for efficient data transmission.
- **Smart Campus Initiative**: Supports the development of a smart campus by providing timely weather updates.

## Website
![Website](https://github.com/user-attachments/assets/b1520217-1565-4776-a650-b422c479fcbb)


## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Methodology](#methodology)
   - [Flowchart of Methodology](#flowchart-of-methodology)
7. [Problem Statement](#problem-statement)
8. [Proposed Solution](#proposed-solution)
9. [Objectives](#objectives)
10. [Images and Figures](#images-and-figures)
    - [Figure 5.1.1: Components of Weather Station](#figure-511-components-of-weather-station)
    - [Figure 5.1.2: Weather Station](#figure-512-weather-station)
    - [Figure 5.4.1: Process Flow](#figure-541-process-flow)
    - [Figure 5.4.2: Flow of Weather Station](#figure-542-flow-of-weather-station)
    - [Figure 5.4.3: Flow of Database](#figure-543-flow-of-database)
11. [Contributing](#contributing)
12. [Contact](#contact)

### Weather Monitoring System
Weather monitoring systems are online platforms that provide real-time data on weather conditions and climate patterns. They are essential for forecasting, research, and planning, relying on a network of weather stations to collect data on temperature, humidity, wind speed, and rainfall. This data is processed to create weather reports, often accompanied by additional tools and resources.

### Problem Statement
Local weather conditions can vary significantly over short distances. While a local weather station offers an overview of the area's weather, it may not accurately reflect microclimates. Our college has a weather station, but it lacks a system to display real-time weather data. This deficiency impacts students who require accurate information for agriculture, engineering projects, outdoor events, and transportation. Without real-time data, students may make decisions based on outdated information, leading to potential safety hazards and missed academic opportunities.

### Existing Solution
Currently, our college utilizes a Davis weather station that transmits data to a console visible only within a limited range. To access weather data from a distance, users must connect to the Weather Link Live system developed by Davis. However, this system restricts visibility to administrators only.

### Proposed Solution
To address the identified problems, we propose developing a weather monitoring system that provides accurate and real-time weather data accessible to students via computers or mobile devices. This system will enable students to monitor conditions such as temperature and humidity, facilitating informed decision-making and enhancing safety and academic performance. Additionally, it will offer historical weather data and statistical analysis tools in an intuitive interface.

## Literature Survey
A review of existing literature highlights various approaches to weather monitoring systems using IoT technology, including:
- Wireless remote monitoring systems utilizing MEMS technologies.
- Real-time applications that connect AWS with mobile platforms.
- IoT-based systems employing MQTT for efficient data transmission.
- Frameworks integrating Arduino for local and remote communications.


## Technologies Used
- **Hardware**: Davis Vantage Vue Weather Station
- **Software**:
  - **Frontend**: ReactJS
  - **Backend**: Django
  - **Database**: Firebase Real-Time Database
  - **Communication Protocol**: MQTT

## Installation
To set up the Weather Monitoring System locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/nithinprasath21/Weather-Monitoring-System.git
   cd Weather-Monitoring-System
   ```

2. **Install Dependencies**
   - For the backend:
     ```bash
     cd backend
     pip install -r requirements.txt
     ```
   - For the frontend:
     ```bash
     cd frontend
     npm install
     npm install react-scripts
     npm install chartjs-plugin-datalabels
     npm install @mui/material @emotion/react @emotion/styled
     ```

3. **Configure Environment**
   - Create a `.env` file in the backend directory and add necessary environment variables (e.g., database credentials, API keys).

4. **Run the Backend Server**
   ```bash
   cd backend
   python manage.py runserver
   ```

5. **Run the Frontend Application**
   ```bash
   cd frontend
   npm start
   ```

6. **Access the Application**
   Open your web browser and navigate to `http://localhost:3000` to view the Weather Monitoring System.

## Usage
1. Upon loading the application, you will see real-time weather data displayed on the dashboard.
2. Use the provided controls to refresh data or view historical records.
3. The system automatically updates with new readings from the weather station.

## Methodology
The proposed system aims to provide comprehensive and up-to-date information about weather conditions in our college area. It employs statistical tools to analyze and present data effectively. Data is transmitted from the weather station to the console using a data logger and then sent to the development server via MQTT protocol. The processed data is made available through an API for user access via ReactJS.

### Flowchart of Methodology
![flowchart of methodology](https://github.com/user-attachments/assets/1ff2955d-659f-4fb1-9105-271bfe750087)

## Problem Statement
Local weather conditions can change over short distances, making it essential to have accurate and real-time weather data accessible to students and staff at our college.

## Proposed Solution
To address this problem, a weather monitoring system is needed that provides accurate and up-to-date weather data in real-time to students in our college through a user-friendly interface.

## Objectives
The primary objectives of the Weather Monitoring System include:
- Providing real-time updates on essential weather parameters.
- Supporting engineering students in understanding the impact of weather on projects.
- Enhancing students' skills in data analysis through interaction with large datasets.
- Creating a valuable resource for the college community to monitor and analyze local weather patterns effectively.

## Images and Figures

### Figure 5.1.1: Components of Weather Station
![station diagram](https://github.com/user-attachments/assets/f1a88a92-5063-4958-80c3-f1b450837729)

### Figure 5.1.2: Weather Station
![station pic](https://github.com/user-attachments/assets/04b8f129-fd8e-4f34-b706-e4f0067a64b0)

### Figure 5.4.1: Process Flow
![process flow](https://github.com/user-attachments/assets/3d3854d6-d86f-4a52-bd65-9cbe05e1f9a0)

### Figure 5.4.2: Flow of Weather Station
![flow of station](https://github.com/user-attachments/assets/51027a6b-9abf-4ad9-9d08-8a44ad0b0f7e)

### Figure 5.4.3: Flow of Database
![flow of database](https://github.com/user-attachments/assets/88cc4e3a-d218-456f-a8f5-c6de2adfc925)

## Contributing
Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to your branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

## Contact
For any inquiries or feedback, please contact:

- Nithin Prasath C
- Nandeeswaran K
- Randhini E L
- Agilarasu S
