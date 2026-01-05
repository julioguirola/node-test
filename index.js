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

while (true) {
    const res = await fetch(AI_API_URL, {
        body: JSON.stringify(BODY),
        headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": AI_API_KEY,
        },
        method: "POST",
    })

    const data = await res.json()
    console.log(data)
    await new Promise(resolve => setTimeout(resolve, 2000));
}