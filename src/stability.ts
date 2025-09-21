// src/stability.ts
export async function generateImage(prompt: string, engine = "sd3") {
  try {
    const formData = new FormData();
    formData.append("prompt", prompt);
    formData.append("output_format", "png"); // png | jpeg | webp
    formData.append("aspect_ratio", "1:1");

    const response = await fetch(
      `https://api.stability.ai/v2beta/stable-image/generate/${engine}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_STABILITY_API_KEY}`,
          Accept: "application/json",
        },
        body: formData,
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Stability API Error: ${response.status} ${errText}`);
    }

    const result = await response.json();
    console.log("🔎 Stability API raw result:", result);

    if (result.artifacts && result.artifacts.length > 0) {
      const base64 = result.artifacts[0].base64;
      return `data:image/png;base64,${base64}`;
    }

    if (result.image) {
      return `data:image/png;base64,${result.image}`;
    }

    throw new Error("No image returned from Stability API (check console log).");
  } catch (err: any) {
    console.error("Stability Image Error:", err);
    throw err;
  }
}
