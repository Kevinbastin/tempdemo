const express = require('express');
const cors = require('cors');
const supportData = require('./data');
const workflowDataFn = require('./workflow_data');

const app = express();
app.use(cors());

// AI Support Agent
app.get('/api/support/all', (req, res) => {
  res.json(supportData);
});

// AI Workflow Copilot
app.get('/api/workflow/all', (req, res) => {
  const workflowData = workflowDataFn('#A855F7');
  res.json(workflowData);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend server running on http://127.0.0.1:${PORT}`));
