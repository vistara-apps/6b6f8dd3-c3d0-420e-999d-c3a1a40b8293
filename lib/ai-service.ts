import OpenAI from 'openai';
import { AIScriptRequest, AIScriptResponse } from './types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
});

export async function generateRightsScript(request: AIScriptRequest): Promise<AIScriptResponse> {
  try {
    const prompt = `Generate a comprehensive "Know Your Rights" script for the following scenario:

Scenario: ${request.scenario}
State: ${request.state}
Language: ${request.language === 'es' ? 'Spanish' : 'English'}

Please provide:
1. A clear, concise script of what to say
2. Key points to remember
3. Important warnings about what NOT to say or do

Format the response as JSON with the following structure:
{
  "script": "The main script text",
  "keyPoints": ["Point 1", "Point 2", "Point 3"],
  "warnings": ["Warning 1", "Warning 2", "Warning 3"]
}

Make it practical, legally sound, and appropriate for ${request.state} state laws.`;

    const completion = await openai.chat.completions.create({
      model: 'google/gemini-2.0-flash-001',
      messages: [
        {
          role: 'system',
          content: 'You are a legal rights expert who provides accurate, state-specific guidance for civilian encounters with law enforcement. Always prioritize safety and legal compliance.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 1000,
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) {
      throw new Error('No response from AI service');
    }

    try {
      return JSON.parse(response);
    } catch (parseError) {
      // Fallback if JSON parsing fails
      return {
        script: response,
        keyPoints: ['Stay calm and respectful', 'Know your rights', 'Document the encounter'],
        warnings: ['Do not resist', 'Do not lie', 'Do not consent to searches without warrant']
      };
    }
  } catch (error) {
    console.error('Error generating AI script:', error);
    throw new Error('Failed to generate rights script');
  }
}

export async function generateRightsGuide(state: string, language: 'en' | 'es'): Promise<string> {
  try {
    const prompt = `Generate a comprehensive "Know Your Rights" guide for ${state} state in ${language === 'es' ? 'Spanish' : 'English'}.

Include:
1. Basic constitutional rights
2. State-specific laws and procedures
3. What to do during police encounters
4. What NOT to say or do
5. Emergency contact information guidelines

Make it mobile-friendly, concise but comprehensive, and legally accurate for ${state}.`;

    const completion = await openai.chat.completions.create({
      model: 'google/gemini-2.0-flash-001',
      messages: [
        {
          role: 'system',
          content: 'You are a legal expert specializing in civilian rights and state-specific law enforcement procedures.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.2,
      max_tokens: 1500,
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) {
      throw new Error('No response from AI service');
    }

    return response;
  } catch (error) {
    console.error('Error generating rights guide:', error);
    throw new Error('Failed to generate rights guide');
  }
}

export async function generateShareableCard(state: string, keyRights: string[]): Promise<string> {
  try {
    const prompt = `Create a shareable social media card text for ${state} state rights information.

Key rights to highlight:
${keyRights.map(right => `- ${right}`).join('\n')}

Make it:
- Concise (under 280 characters)
- Engaging and shareable
- Include relevant hashtags
- Emphasize the importance of knowing your rights`;

    const completion = await openai.chat.completions.create({
      model: 'google/gemini-2.0-flash-001',
      messages: [
        {
          role: 'system',
          content: 'You are a social media expert who creates engaging, informative content about legal rights.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.4,
      max_tokens: 200,
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) {
      throw new Error('No response from AI service');
    }

    return response;
  } catch (error) {
    console.error('Error generating shareable card:', error);
    throw new Error('Failed to generate shareable card');
  }
}
