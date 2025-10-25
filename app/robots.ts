export async function GET() {
  return new Response(
    [
      'User-agent: *',
      'Allow: /',
      'User-agent: GPTBot',
      'Allow: /',
      'User-agent: OAI-SearchBot',
      'Allow: /',
      'User-agent: ClaudeBot',
      'Allow: /',
      'User-agent: anthropic-ai',
      'Allow: /',
      'User-agent: PerplexityBot',
      'Allow: /',
      'User-agent: ChatGPT-User',
      'Allow: /',
      'User-agent: Meta-ExternalAgent',
      'Allow: /',
      'Sitemap: https://bespoketravelcolombia.com/sitemap.xml',
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
}
