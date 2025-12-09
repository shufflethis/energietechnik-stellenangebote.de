import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getCareerAdvice = async (userQuery: string, context: string): Promise<string> => {
  if (!apiKey) {
    return "API Key fehlt. Bitte konfigurieren Sie die Umgebungsvariablen.";
  }

  try {
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
    return "Es gab ein technisches Problem bei der Anfrage. Bitte versuchen Sie es später erneut.";
  }
};