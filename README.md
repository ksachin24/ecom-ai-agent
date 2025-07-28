# 🤖 E-commerce Data AI Agent

## Project Overview

This project implements an AI agent designed to answer complex questions about e-commerce data. By leveraging an in-browser SQLite database and Google's Gemini Large Language Model (LLM), the agent can interpret natural language queries, convert them into SQL, fetch data, and present answers in a human-readable format, optionally with visualizations.

This application is built entirely client-side using React, making it easy to deploy and use without a dedicated backend server for the database.

## 🌟 Features

* **Natural Language Understanding:** Converts user questions (e.g., "What is my total sales?") into SQL queries using the Gemini LLM.
* **In-Browser Database:** Utilizes `sql.js` (SQLite compiled to WebAssembly) to host your data directly in the browser's memory.
* **Dynamic Data Loading:** Allows users to upload product-level sales, metrics, and eligibility data via CSV files at runtime.
* **Data Visualization:** Integrates `Chart.js` to provide graphical representations of query results for better insights.
* **Streamed Responses:** Simulates a live-typing effect for AI agent responses, enhancing user experience.
* **Modular Architecture:** Separates concerns for LLM interaction, database querying, and UI presentation.


## 📊 Datasets Used

The AI agent processes data from three key product-level datasets. When uploading, ensure your CSVs have the exact column names as specified below:

1.  **Product-Level Ad Sales and Metrics** (`product_ad_sales_metrics.csv`):
    * `date` (TEXT)
    * `item_id` (TEXT) - Used as part of a composite primary key
    * `ad_sales` (REAL)
    * `impressions` (INTEGER)
    * `ad_spend` (REAL)
    * `clicks` (INTEGER)
    * `units_sold` (INTEGER)

2.  **Product-Level Total Sales and Metrics** (`product_total_sales_metrics.csv`):
    * `date` (TEXT)
    * `item_id` (TEXT) - Used as part of a composite primary key
    * `total_sales` (REAL)
    * `total_units_ordered` (INTEGER)

3.  **Product-Level Eligibility Table** (`product_eligibility.csv`):
    * `eligibility_datetime_utc` (TEXT) - Used as part of a composite primary key
    * `item_id` (TEXT) - Used as part of a composite primary key
    * `eligibility` (BOOLEAN - stored as INTEGER 0/1)
    * `message` (TEXT)

## 🛠️ Getting Started (Local Setup)

Follow these steps to set up and run the project on your local machine.

### Prerequisites

* **Node.js & npm:** Download and install the latest LTS version from [nodejs.org](https://nodejs.org/). Verify installation by running `node -v` and `npm -v` in your terminal.
* **Git:** Download and install from [git-scm.com](https://git-scm.com/downloads).

### 1. Clone the Repository

Open your terminal or command prompt and clone the project:

```bash
git clone [https://github.com/ksachin24/ecom-ai-agent.git](https://github.com/ksachin24/ecom-ai-agent.git)
cd ecom-ai-agent

🤝 How to Use the AI Agent
Once the application loads in your browser:

Enter your Gemini LLM API Key: Paste the API key you obtained into the designated input field.

Upload Datasets: Use the "Choose File" buttons to upload each of your three prepared CSV files.

Load Data: Click the "Load Data into Database" button. Wait for the "All data loaded successfully!" message.

Ask a Question: Type your question into the text area.

Get Answer: Click "Ask AI Agent". The AI will generate SQL, query the data, and provide a human-readable answer (with a live-typing effect) and, if applicable, a visualization.

Example Questions to Try:
What is my total sales?

Calculate the RoAS (Return on Ad Spend).

Which product had the highest CPC (Cost Per Click)?

What is the total revenue for eligible products?

Show me the impressions for item_id 101.

How many units were sold on 2025-06-01?

📂 Project Structure
ecom-ai-agent/
├── public/                 # Public assets (e.g., index.html)
├── src/                    # Source code for the React application
│   ├── App.js              # Main AI Agent component
│   ├── index.css           # Tailwind CSS directives
│   ├── index.js            # React app entry point
│   └── ...                 # Other React files
├── node_modules/           # Installed packages
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Exact dependency versions
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── config-overrides.js     # Webpack polyfill configuration
└── README.md               # This file
✨ Future Enhancements
More Advanced Visualizations: Offer a wider range of chart types and customization options.

Conversation History: Implement persistent chat history.

Error Handling Refinements: Provide more user-friendly error messages for specific database/LLM issues.

Data Validation: Add pre-upload validation for CSV column names and data types.

Unit Testing: Implement tests for data parsing, SQL generation, and LLM integration.

📞 Contact
For any questions or suggestions, feel free to reach out.

[Name] : Sachin.K
GitHub Profile Link -https://github.com/ksachin24]
