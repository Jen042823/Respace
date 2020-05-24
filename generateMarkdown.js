function generateMarkdown(data) {
    const fs = require("fs");
    let filename = "README.md";
    fs.writeFile(
        filename,
`# ${data.title}\n\n
[![Github Badge](https://img.shields.io/badge/Github-Profile-blueviolet)](${data.githubprofile})\n\n
## Table of Contents\n\n
[Description](#Description)\n
[Installation](#Installation)\n
[Usage](#Usage)\n
[License](#License)\n
[Contributing](#Contributing)\n
[Tests](#Tests)\n\n
## Description\n
${data.description}\n\n
## Installation\n
${data.installation}\n\n
## Usage\n
${data.usage}\n\n 
## License\n
${data.licensing}\n\n
## Contributing\n
${data.contribution}\n\n
## Tests\n
${data.test}
`,

        function (err) {
            if (err) {
                return console.log(err)
        } else {
            console.log("Success! Your README.md has been generated.");
        }
        }
    
    
    
        );
}
module.exports = generateMarkdown

