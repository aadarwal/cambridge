// API endpoint to verify if the API is working
export default function handler(req, res) {
  res.status(200).json({ 
    name: 'Cambridge Explorer API',
    status: 'Operational',
    message: 'Welcome to the Cambridge Explorer API!' 
  });
} 