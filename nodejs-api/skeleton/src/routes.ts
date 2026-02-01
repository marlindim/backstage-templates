import { Router, Request, Response } from 'express';

const router = Router();

// Example route
router.get('/items', (req: Request, res: Response) => {
  res.json({
    items: [
      { id: 1, name: 'Item 1', description: 'First item' },
      { id: 2, name: 'Item 2', description: 'Second item' },
      { id: 3, name: 'Item 3', description: 'Third item' }
    ]
  });
});

// Example POST route
router.post('/items', (req: Request, res: Response) => {
  const { name, description } = req.body;
  res.status(201).json({
    id: Date.now(),
    name,
    description,
    createdAt: new Date().toISOString()
  });
});

export default router;
