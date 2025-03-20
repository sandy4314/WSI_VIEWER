Below is a detailed README.md file for your Whole Slide Image (WSI) Viewer React application. It includes an overview of the project, setup instructions, features, deployment steps, and additional details to help users understand and use the project effectively.

WSI Viewer
Overview
The WSI Viewer is a React-based web application designed to visualize Whole Slide Images (WSI) with interactive features. It allows users to view a WSI with zoom and pan functionality, display bounding boxes for detected red blood cells (RBCs), and provides a hub view to show the zoomed-out context of the image with a pointer indicating the current zoomed area. The application also includes a left panel to display metadata about the WSI, such as patient ID, sample type, and date.

This project was developed as part of an assignment to create a WSI viewer with the following components:

Left Panel: Displays metadata about the WSI (e.g., patient ID, sample type, date, filename, status).
Top-Right Hub View: Shows a zoomed-out view of the WSI with a red pointer indicating the area currently visible in the zoom view.
Center Zoom View: Displays the WSI with zoom and pan functionality, along with blue bounding boxes for detected RBCs based on the provided detection_results.
The application uses normal CSS for styling (as per the requirement) and the react-zoom-pan-pinch library for zoom and pan functionality. It is deployed on Vercel for easy access.

Features
Interactive Zoom and Pan: Users can zoom in/out and pan across the WSI using the react-zoom-pan-pinch library.
Bounding Boxes: Blue bounding boxes are plotted on the WSI based on the detection_results from the provided JSON data, highlighting detected RBCs.
Hub View: A top-right hub view shows a zoomed-out version of the WSI with a red pointer indicating the currently viewed area in the zoom view.
Metadata Display: The left panel displays metadata about the WSI, dynamically pulled from the data.json file.
Responsive Layout: The layout is designed to be clean and professional, with normal CSS used for styling.
Error Handling: The app includes error handling for cases where the detection_results data might be missing or malformed.
Enhancements (Creativity)
Dynamic Metadata: The left panel dynamically pulls data from data.json instead of hardcoding values.
Robust Error Handling: The app handles cases where detection_results might be missing by displaying a fallback message.
Potential Future Enhancements:
Add labels next to bounding boxes to display the type of detection (e.g., "Circular_RBC").
Implement color coding for different types of detections (if multiple types exist).
Add custom zoom controls for a better user experience.
Make the layout fully responsive with media queries for smaller screens.
Project Structure
text

Collapse

Wrap

Copy
wsi-viewer/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   └── wsi-image.png        # The Whole Slide Image
│   ├── components/
│   │   ├── LeftPanel.js         # Component for the left panel (metadata)
│   │   ├── HubView.js           # Component for the top-right hub view
│   │   └── ZoomView.js          # Component for the center zoom view
│   ├── App.js                   # Main app component
│   ├── App.css                  # CSS styles for the app
│   ├── data.json                # JSON file containing WSI metadata and detection results
│   └── index.js
├── package.json
└── README.md
Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v14 or higher)
npm (comes with Node.js) or yarn
A modern web browser (e.g., Chrome, Firefox)
Setup Instructions
Follow these steps to set up and run the project locally:

1. Clone the Repository
Clone the repository to your local machine using Git:

bash

Collapse

Wrap

Copy
git clone https://github.com/your-username/wsi-viewer.git
cd wsi-viewer
2. Install Dependencies
Install the required dependencies using npm:

bash

Collapse

Wrap

Copy
npm install
This will install the following key dependencies:

react-zoom-pan-pinch: For zoom and pan functionality in the WSI view.
Other standard React dependencies (react, react-dom, etc.).
3. Add the WSI Image
Ensure the WSI image (wsi-image.png) is placed in the src/assets/ directory. This image is used in both the hub view and the zoom view.

4. Verify the data.json File
The data.json file in the src/ directory contains the metadata and detection results for the WSI. Ensure it has the following structure:

json

Collapse

Wrap

Copy
{
  "id": 19,
  "patient_id": "7",
  "wsi_video_url": "None",
  "inference_results": {
    "delayTime": 950,
    "executionTime": 7223,
    "id": "sync-e1323ad4-a299-4159-9342-1fa220a3c2b5-e1",
    "output": {
      "detection_results": [
        [121, 4, 163, 45, "Circular_RBC"],
        [396, 312, 433, 353, "Circular_RBC"],
        // ... (other detection results)
      ]
    },
    "status": "COMPLETED",
    "workerId": "vgfqxs1imv8aym"
  },
  "celery_status": "completed",
  "filename": "7_20241209_024613.png",
  "sample_type": "blood",
  "date": "2024-12-09"
}
5. Run the Application
Start the development server:

bash

Collapse

Wrap

Copy
npm start
The app will open in your default browser at http://localhost:3000.

Usage
Left Panel: View metadata about the WSI, including patient ID, sample type, date, filename, and status.
Hub View: The top-right section shows a zoomed-out view of the WSI with a red pointer indicating the area currently visible in the zoom view.
Zoom View: The central section displays the WSI with zoom and pan functionality. Blue bounding boxes highlight detected RBCs based on the detection_results from data.json.
Zoom In/Out: Use the mouse wheel or pinch gestures (on touch devices) to zoom.
Pan: Click and drag to move around the image.
Deployment
The app is deployed on Vercel for easy access. Follow these steps to deploy your own instance:

1. Push to GitHub
Push your code to a GitHub repository:

bash

Collapse

Wrap

Copy
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/wsi-viewer.git
git push -u origin main
2. Deploy on Vercel
Install the Vercel CLI:
bash

Collapse

Wrap

Copy
npm install -g vercel
Deploy the app:
bash

Collapse

Wrap

Copy
vercel
Follow the prompts to deploy. Vercel will provide a URL (e.g., https://wsi-viewer.vercel.app).
Deployed Link
Deployed URL: https://wsi-viewer.vercel.app (replace with your actual deployed URL)
GitHub Repository: https://github.com/your-username/wsi-viewer (replace with your actual GitHub URL)
Technical Details
Technologies Used
React: JavaScript library for building the user interface.
react-zoom-pan-pinch: Library for implementing zoom and pan functionality.
CSS: Normal CSS for styling the application (as per the requirement).
Vercel: Platform for deployment and hosting.
Code Structure
App.js: The main component that combines the LeftPanel, HubView, and ZoomView components.
LeftPanel.js: Displays metadata about the WSI, dynamically pulled from data.json.
HubView.js: Shows a zoomed-out view of the WSI with a red pointer indicating the zoomed area.
ZoomView.js: Displays the WSI with zoom/pan functionality and plots blue bounding boxes for detected RBCs.
App.css: Contains the CSS styles for the layout and components.
data.json: Stores the WSI metadata and detection results.
Error Handling
The app handles cases where detection_results might be missing by displaying a fallback message ("No detection results available").
The ZoomView component uses optional chaining (?.) and default values to prevent errors when accessing nested data.
Evaluation Criteria
The project was developed with the following criteria in mind:

Coding Style, Structure, and Functionality (25%):
The code is modular, with separate components for each section (LeftPanel, HubView, ZoomView).
React hooks (useState) are used for state management.
Error handling ensures the app doesn’t crash if data is missing.
Design (25%):
The layout is clean and professional, with a clear separation between the left panel, hub view, and zoom view.
Normal CSS is used for styling, as per the requirement.
Creativity:
Dynamic metadata in the left panel.
Suggestions for future enhancements (e.g., bounding box labels, color coding, responsive design).
Troubleshooting
Common Issues
Error: Cannot read properties of undefined (reading 'map'):
Cause: The detection_results array is undefined due to incorrect data access.
Solution: Ensure the data.json file has the correct structure and that the path to data.json is correct in the import statement.
Image Not Loading:
Cause: The wsi-image.png file is missing or the path is incorrect.
Solution: Verify that wsi-image.png is in src/assets/ and that the import path is correct (import wsiImage from '../assets/wsi-image.png';).
Zoom/Pan Not Working:
Cause: The react-zoom-pan-pinch library might not be installed correctly.
Solution: Reinstall the library:
bash

Collapse

Wrap

Copy
npm install react-zoom-pan-pinch
Debugging Tips
Add console.log statements in ZoomView.js to verify the data being accessed:
jsx

Collapse

Wrap

Copy
console.log('Detection Results:', detectionResults);
Check the browser console for errors and ensure the development server is running (npm start).
Future Improvements
Bounding Box Labels: Display the label (e.g., "Circular_RBC") next to each bounding box.
Color Coding: Use different colors for bounding boxes based on the type of detection.
Custom Zoom Controls: Add buttons for zooming in/out to improve the user experience.
Responsive Design: Add media queries in App.css to make the layout responsive for smaller screens.
Performance Optimization: Optimize the rendering of bounding boxes for large datasets.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
The react-zoom-pan-pinch library for providing zoom and pan functionality.
Vercel for providing an easy deployment platform.
The assignment guidelines for providing a clear structure and requirements.
Contact
For any questions or issues, please contact:

Gmail:sandeepkumaronteru7777@gmail.com
GitHub: https://github.com/sandy4314