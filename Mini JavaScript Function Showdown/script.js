const counterDisplay = document.getElementById('counter');
const lastUpdatedDisplay = document.getElementById('last-updated');

async function fetchPRCount() {
  try {
    const url = 'https://api.github.com/repos/cbitosc/HackWeek-Create-A-Pull-Request/pulls?state=all&per_page=1';
    const response = await fetch(url);
    if (!response.ok) throw new Error('GitHub API error');
    const linkHeader = response.headers.get('Link');
    let count = 0;
    if (linkHeader) {
      // Extract the last page number from the Link header
      const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
      if (match) {
        count = parseInt(match[1], 10);
      }
    } else {
      // If only one page, count PRs in the response
      const data = await response.json();
      count = data.length;
    }
    counterDisplay.textContent = count;
    const now = new Date();
    lastUpdatedDisplay.textContent = `Last updated: ${now.toLocaleTimeString()}`;
  } catch (err) {
    counterDisplay.textContent = 'Error';
    lastUpdatedDisplay.textContent = '';
  }
}

// Initial fetch
fetchPRCount();
// Poll every 30 seconds
setInterval(fetchPRCount, 30000);
