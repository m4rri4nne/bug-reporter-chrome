
# 🐞 Bug Reporter for Jira — Chrome Extension  
<div align='center'>


[![Chrome](https://img.shields.io/badge/Chrome_Extension-4285F4?logo=google-chrome&logoColor=white)](https://chrome.google.com/webstore) [![Jira](https://img.shields.io/badge/Integrated_with-Jira-0052CC?logo=jira&logoColor=white)](https://www.atlassian.com/software/jira) [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE) [![Made with ❤️](https://img.shields.io/badge/Made_with-❤️-red)](https://github.com/m4rri4nne)


</div>

---

## Description 


Bug Reporter for Jira is a Chrome extension built to automate and speed up the bug reporting process.
It connects to your Jira account, automatically records your browser screen, tracks user actions, and creates a fully detailed bug ticket directly in your Jira project — complete with video, steps, and environment data.
The goal is to make bug reporting fast, reliable, and accessible for QAs, Product Owners, and developers alike.

---

### ✨ Key Features

- 🔐 Secure authentication with user’s Jira account
- 🎥 Automatic screen recording during session
- 🧭 Tracks user actions (clicks, inputs, navigation, etc.)
- 🧾 Creates Jira tickets automatically with video and details
- 🌐 Works across multiple environments (prod, staging, dev)
- ⚡ Optimized for productivity — report bugs in seconds  

---

### 🧰 How It Works

1. User logs in with Jira credentials via the extension.
2. When activated, the extension records the browser screen and logs actions.
3. When stopped, the user confirms submission.
4. The extension creates a Jira bug ticket containing:
    - the session video,
    - reproducible action steps,
    - technical and browser info.

---

### 🧩 Installation (Developer Mode)

1. Clone the repo:  
   ```bash
   git clone https://github.com/seuuser/bug-reporter-for-jira.git
    ```
2. Open Chrome and go to:  `chrome://extensions`
3. Enable Developer mode.
4. Click “Load unpacked” and select the project folder.
5. The extension will appear in the Chrome toolbar.

### 🧠 Roadmap
- [ ] Full OAuth integration with Jira Cloud
- [ ] Audio and webcam recording support
- [ ] Ticket preview before submission
- [ ] Support for GitHub Issues / Linear
- [ ] Local bug report history

### 🤝 Contributing
Contributions are highly appreciated!
Feel free to open issues or submit pull requests to help improve the extension.

## 📜 License
Distributed under the MIT License.
See LICENSE for more details.