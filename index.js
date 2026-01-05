const AI_API_KEY = process.env.AI_API_KEY;
const AI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent"
const BODY = {
    "contents": [
      {
        "parts": [
          {
            "text": "Dime una curiosidad."
          }
        ]
      }
    ]
  }
let runnig = false;

setInterval(async () => {
  if (runnig) return;
  const res = await fetch(AI_API_URL, {
        body: JSON.stringify(BODY),
        headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": AI_API_KEY,
        },
        method: "POST",
    })

    if (res.status !== 200) {
        console.log("Error status:", res.status)
        return;
    }

    const data = await res.json()
    console.log(data.candidates[0].content.parts[0].text)
}, 10 * 1000)