export default function handler(req, res) {
  if (req.method === 'POST') {
    const newOrder = {
      ...req.body,
      _id: Date.now(),
      createdAt: new Date().toISOString(),
      status: "W przygotowaniu"
    };
    global.orders = global.orders || [];
    global.orders.push(newOrder);
    return res.status(201).json(newOrder);
  }

  if (req.method === 'GET') {
    global.orders = global.orders || [];
    return res.status(200).json(global.orders);
  }

  res.status(405).end(); // Method Not Allowed
}
