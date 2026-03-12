import { GoogleGenAI } from "@google/genai";

const FALLBACK_MESSAGE = "Der KI-Assistent ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.";

export const getCareerAdvice = async (userQuery: string, context: string): Promise<string> => {
  const apiKey = process.env.API_KEY || '';
  if (!apiKey) {
    return FALLBACK_MESSAGE;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      Du bist ein erfahrener Karriereberater für die Energietechnik-Branche in Deutschland.
      Deine Aufgabe ist es, Arbeitssuchende basierend auf ihren Fähigkeiten und Interessen zu beraten.
      
      Kontext der Seite: ${context}
      
      Antworte professionell, ermutigend und konkret.
      Strukturiere deine Antwort mit Markdown (Fettgedrucktes, Listen).
      Nenne konkrete Berufsbezeichnungen, potenzielle Arbeitgebertypen (z.B. ÜNB, VNB, Stadtwerke) und relevante Technologien.
      Fasse dich kurz (max 200 Wörter).
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Entschuldigung, ich konnte keine Beratung generieren.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return FALLBACK_MESSAGE;
  }
};