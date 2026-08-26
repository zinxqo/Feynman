# Feynman

# Feynman AI Study App

A full-stack web application designed to help users learn topics using the **Feynman Technique** and active recall.

## experience
The application transports the user into a cozy pixel-art workspace. The user assumes the role of a teacher, explaining concepts to an AI student named **Feynman**. 

## Tech Stack & Architecture
* **Frontend:** HTML, CSS  and JavaScript.
* **Backend:** Python, Flask, and Flask-CORS for secure local cross-origin data routing.
* **AI Engine:** Groq API Cloud Protocol utilizing the powerful `openai/gpt-oss-120b` mega-model architecture.

## Special Features Engineered
* **Conversation Memory Ledger:** Uses a global session history matrix to track contextual multi-turn conversations without server memory loss.
* **Knowledge Auditor Prompting:** The AI acts as a strict auditor, actively hunting for jargon gaps and preventing repetitive questioning loops.
* **Anti-Cheat Validation:** Features a high-priority structural guard that prevents users from exploiting math loopholes or using incorrect arithmetic.

## How to Run and Edit Locally

Since secret API keys are kept secure and are not uploaded to this repository, you will need your own free API key from Groq to run this project.

1. **Clone the repository** to your local machine.
2. **Install the required packages** using your terminal:
   ```bash
   pip install -r requirements.txt
   ```
3. **Get a free API key** from the [Groq Console](https://groq.com).
4. **Set your environment variable** and launch the Flask server inside your Windows PowerShell terminal:

   ```powershell
   \$env:GROQ_API_KEY="your_actual_groq_key_here"
   python -m backend.app
   ```
5. Open your frontend using a local server extension (like Live Server) and start studying!
