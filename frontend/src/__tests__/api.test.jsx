import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// We set process.env before importing the module so the module reads the test URL
beforeEach(() => {
  process.env.VITE_API_URL = 'http://test-api.local';
  global.fetch = vi.fn();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('api functions', () => {
  it('fetchQuestions calls the correct endpoint and returns JSON', async () => {
    const mockData = [{ id: 1, question: 'q' }];

    // Import module after setting env so it captures the fallback
    const { fetchQuestions } = await import('../api');

    fetch.mockResolvedValueOnce({ ok: true, json: async () => mockData });

    const data = await fetchQuestions();

    expect(fetch).toHaveBeenCalledWith(`${process.env.VITE_API_URL}/api/questions`);
    expect(data).toEqual(mockData);
  });

  it('submitResults POSTs to the correct endpoint and returns JSON', async () => {
    const result = { score: 5 };
    const response = { id: 'abc' };

    const { submitResults } = await import('../api');

    fetch.mockResolvedValueOnce({ ok: true, json: async () => response });

    const res = await submitResults(result);

    expect(fetch).toHaveBeenCalledWith(`${process.env.VITE_API_URL}/api/results`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result),
    });

    expect(res).toEqual(response);
  });
});
