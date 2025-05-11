const core = require('@actions/core');

try {
  // Get the input
  const input = core.getInput('my-input');
  console.log(`Received input: ${input}`);

  // Process the input (e.g., convert to uppercase)
  const result = input.toUpperCase();

  // Set the output
  core.setOutput('my-output', result);
} catch (error) {
  // Handle errors
  core.setFailed(`Action failed: ${error.message}`);
}