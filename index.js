const AI_API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random"
let runnig = false;

setInterval(async () => {
  if (runnig) return;
  const res = await fetch(AI_API_URL, {
        headers: {
            "Content-Type": "application/json",
        }
    })

    if (res.status !== 200) {
        console.log("Error status:", res.status)
        return;
    }

    const data = await res.json()
    console.log(data.text)
}, 10 * 1000)