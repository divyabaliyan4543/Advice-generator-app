async function getRandomAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const paragraph = document.querySelector("p"); // fixed selector
    const advice = data?.slip?.advice;

    if (advice === undefined) {
      alert("Error: Fetching Advice");
      return;
    }

    paragraph.textContent = advice;
  } catch (error) {
    console.error(error);
  }
}
getRendomAdvice();
