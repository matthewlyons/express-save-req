# Express Save Request

> Actively save requests that come in as a JSON file.

The JSON file will be saved in ./logs and be named by the date and time of the request.

## Install

```bash
npm i express-save-req
```

## Example

```javascript
const express = require('express');

const { saveREQ } = require('express-save-req');

const app = express();

app.get('/', saveREQ, (req, res) => {
  res.send('Hello World!');
});

const port = 3000;

app.listen(port, () => `Server running on port ${port}`);
```
