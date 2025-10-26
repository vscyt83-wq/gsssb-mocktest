// Use environment variable for backend URL. Prefer Vite's import.meta.env but
// allow a process.env fallback so tests and non-Vite environments can set it.
const API_URL = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL) || process.env.VITE_API_URL;

// Warn if env var missing (keeps app running but makes debugging clearer)
if (!API_URL) {
  // eslint-disable-next-line no-console
  console.warn("VITE_API_URL is not set. API calls may fail.");
}

// Fetch 25 questions
export const fetchQuestions = async () => {
  const res = await fetch(`${API_URL}/api/questions`);
  if (!res.ok) throw new Error("Failed to fetch questions");
  return await res.json();
};

// Submit test results
export const submitResults = async (result) => {
  const res = await fetch(`${API_URL}/api/results`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(result),
  });
  if (!res.ok) throw new Error("Failed to submit results");
  return await res.json();
};
