function generateHTML(data) {
    return `# ${data.title}
    ## User Story:
    ${data.description}

  `;
  }
  
  module.exports = generateHTML;
  
  