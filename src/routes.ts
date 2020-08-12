import { Router } from "express";

const router = Router();

router.post('/', (request, response) => {
  return response.status(201).send('Created user');
});

router.get('/', (request, response) => {
  return response.status(201).send('Listed useres');
});

router.put('/:id', (request, response) => {
  return response.status(201).send('Information updated');
});

router.delete('/:id', (request, response) => {
  return response.status(201).send('User deleted');
});

export { router };