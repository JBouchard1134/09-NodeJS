function generateMarkdown(data, githubInfo) {
  return `

// Title
${data.title}

// Badge
${data.badge}

// Description
${data.description}

// Installation
${data.installation}

// Usage
${data.usage}

// Licence
${data.licence}

// Contributors
${data.contributing}

// Test
${data.test}

// GitHub
${githubInfo.githubImage})
${githubInfo.name}
${githubInfo.profile})
${githubInfo.email}
`;
}

module.exports = generateMarkdown;
