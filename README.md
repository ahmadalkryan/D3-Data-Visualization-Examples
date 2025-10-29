# D3 Data Visualization Examples

A comprehensive collection of interactive data visualizations built with D3.js v7, showcasing various charting techniques and data manipulation methods.

## 🚀 Features

- **Interactive Visualizations**: Multiple examples demonstrating D3.js capabilities
- **Vancouver Trails Visualization**: Geographic data visualization of hiking trails
- **Scalable Architecture**: Modular JavaScript structure for easy extension
- **Responsive Design**: CSS styling for optimal viewing across devices

## 📁 Project Structure

```
├── index.html                 # Main landing page
├── vancouver_trails_viz.html  # Vancouver trails visualization
├── without_js.html           # Static version without JavaScript
├── css/
│   └── style.css             # Styling for visualizations
├── js/
│   ├── d3.v7.min.js          # D3.js library
│   ├── main.js               # Main application logic
│   ├── scale.js              # Scaling utilities
│   └── trails_viz.js         # Trails visualization logic
└── data/
    └── vancouver_trails.csv  # Trail data for visualizations
```

## 🛠️ Setup and Installation

### Prerequisites

- Modern web browser with JavaScript enabled
- Local web server (required for data loading)

### ⚠️ Important Note: Server Requirement

**To avoid CORS errors when loading data files, you MUST serve this project through a local web server instead of opening HTML files directly in the browser.**

Opening HTML files statically (e.g., double-clicking or `file://` protocol) will result in data loading failures due to browser security restrictions.

### Running the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/emadof85/D3-Data-Visualization-Examples.git
   cd D3-Data-Visualization-Examples
   ```

2. **Start a local web server:**

   Choose one of the following methods:

   **Using Python 3:**
   ```bash
   python -m http.server 8000
   ```
   Then navigate to: `http://localhost:8000`

   **Using Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   Then navigate to: `http://localhost:8000`

   **Using Node.js (if you have http-server installed):**
   ```bash
   npx http-server -p 8000
   ```
   Then navigate to: `http://localhost:8000`

   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```
   Then navigate to: `http://localhost:8000`

   **Using Ruby:**
   ```bash
   ruby -run -e httpd . -p 8000
   ```
   Then navigate to: `http://localhost:8000`

3. **Open your browser** and navigate to the served URL to view the visualizations.

## 📊 Visualizations Included

- **Main Dashboard** (`index.html`): Overview of available visualizations
- **Vancouver Trails** (`vancouver_trails_viz.html`): Interactive map showing hiking trails with difficulty ratings and elevation data
- **Static Version** (`without_js.html`): Non-interactive version for comparison

## 🏗️ Architecture

The project follows a modular structure:
- **HTML files** provide the structure and entry points
- **JavaScript modules** handle data processing and visualization logic
- **CSS** provides responsive styling and visual enhancements
- **CSV data** contains the raw trail information for visualizations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-visualization`)
3. Commit your changes (`git commit -m 'Add amazing visualization'`)
4. Push to the branch (`git push origin feature/amazing-visualization`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Note:** Ensure your local server is running before attempting to view any visualizations to prevent data loading errors.