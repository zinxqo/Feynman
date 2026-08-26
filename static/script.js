console.log("JS STARTED");

let message;

const dialog = document.getElementById("Popup")
const teachButton = document.getElementById("teachbutton")

teachButton.onclick = async function() {

    const message = document.getElementById('teachtext').value;
    console.log("sending to flask", message);

    if (!message.trim()) return;

    try {

        const response = await fetch("http://localhost:3000/chat-gpt-ai/message", {
            method: "POST",
            headers: {

                "Content-Type": "application/json"
            
            },
            body: JSON.stringify({
                question:message
            })
        });

        const data = await response.json();

        const aiStudentAnswer = data.answer;
        
        document.getElementById("heading2").textContent = aiStudentAnswer

        dialog.showModal();

    } catch (error) {
        console.error("Error communicating with backend", error);
        document.getElementById("heading2").textContent = "Error reaching your ai student";
        dialog.showModal();
    }
}

// popup reply conversation loop thing

const replyButton  = document.getElementById("replybutton");
const replyText = document.getElementById("replytext");

replyButton.onclick = async function() {
    const userReply = replyText.value;
    console.log("sending follow up reply:", userReply);

    if (!userReply.trim()) return;

    try {
        const response = await fetch("http://localhost:3000/chat-gpt-ai/message",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: userReply 

            })
        });

        const data = await response.json();
        const nextStudentQuestion = data.answer.trim() || "that doesnt sound right. can you say that again?"
        document.getElementById("heading2").textContent = nextStudentQuestion;

        replyText.Value = '';

    } catch (error){
        console.error("Error sending follow up reply:", error);
        document.getElementById("heading2").textContent = "Error reaching your ai student";
        
    }
};