export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Preflight check
  }

  global.orders = global.orders || [];

  if (req.method === 'POST') {
    const newOrder = {
      ...req.body,
      _id: Date.now(),
      createdAt: new Date().toISOString(),
      status: "W przygotowaniu"
    };
    global.orders.push(newOrder);
    return res.status(201).json(newOrder);
  }

  if (req.method === 'GET') {
    return res.status(200).json(global.orders);
  }

  res.status(405).end(); // Method Not Allowed
}
