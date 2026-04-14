function testHTML() {
  const results = [];
  
  function assert(condition, message) {
    if (condition) {
      results.push({ status: 'pass', message });
    } else {
      results.push({ status: 'fail', message });
    }
  }

  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <title>My Site</title>
</head>
<body>
  <h1>Hello GitHub Actions!</h1>
  
  <h2>🚀 Sprinternship Team Contributors</h2>

<p>Add your name below using a Pull Request!</p>

<ul id="team-list">

    <li>Kerene Wright (Instructor)</li>
    <li>Paul Piotrowski (1. Student)</li>
    <li>Michael Venous (2. Student)</li>

    <li>Lorena Salinas</li>

</ul>
</body>
</html>`;

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  
  assert(doc.title === 'My Site', 'Title should be "My Site"');
  assert(doc.querySelector('h1').textContent === 'Hello GitHub Actions!', 'H1 should contain "Hello GitHub Actions!"');
  assert(doc.querySelector('#team-list') !== null, 'Team list should exist');
  assert(doc.querySelectorAll('#team-list li').length === 4, 'Should have 4 team members');
  
  return results;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testHTML };
}