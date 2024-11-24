import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

// L'API key doit être stockée dans une variable d'environnement
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "Vous êtes l'assistant de Collaba, une plateforme de collaboration. Aidez l'utilisateur de manière professionnelle et concise."
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 150
    });

    return res.status(200).json({
      response: completion.choices[0].message.content
    });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return res.status(500).json({
      error: 'Une erreur est survenue lors de la communication avec l'assistant'
    });
  }
}