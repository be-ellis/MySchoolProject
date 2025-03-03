const express = require('express');
const app = express();
app.use(express.json());
app.post('/api/users', (req, res) => {
  const user = req.body;
  if (!user.name || !user.email || !user.password) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }
  users.push(user);
  res.json(users);
});
app.get('/api/users', (req, res) => {
  res.json(users);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
