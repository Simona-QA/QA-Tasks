const { test, expect, request } = require('@playwright/test');

const API_URL = 'https://graphqlzero.almansi.me/api';

test.describe('GraphQL API Tests - Users, Albums, Posts, Negative Cases', () => {
  let api;

  test.beforeAll(async () => {
    api = await request.newContext({ baseURL: API_URL });
  });

  // =========================
  // Queries
  // =========================

  test('Query: Fetch user by ID', async () => {
    const query = `query { user(id: 1) { id name email } }`;
    const res = await api.post('', { data: { query } });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.data.user.id).toBe('1');
    expect(body.data.user.name).toBeTruthy();
    expect(body.data.user.email).toContain('@');
  });

  test('Query: Fetch albums for a user', async () => {
    const query = `query { user(id: 1) { albums { data { id title } } } }`;
    const res = await api.post('', { data: { query } });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body.data.user.albums.data)).toBe(true);
  });

  test('Query: Fetch single album by ID', async () => {
    const query = `query { album(id: 1) { id title user { id name } } }`;
    const res = await api.post('', { data: { query } });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.data.album.id).toBe('1');
    expect(body.data.album.title).toBeTruthy();
    expect(body.data.album.user.id).toBeTruthy();
  });

  test('Query: Fetch todos (limit 5)', async () => {
    const query = `query { todos(options: { paginate: { page: 1, limit: 5 } }) { data { id title completed } } }`;
    const res = await api.post('', { data: { query } });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.data.todos.data.length).toBeGreaterThan(0);
  });

  // =========================
  // Mutations
  // =========================

  test('Mutation: Create a new post', async () => {
    const mutation = `mutation { createPost(input: { title: "Playwright Test Post", body: "Hello GraphQL", userId: 1 }) { id title body } }`;
    const res = await api.post('', { data: { query: mutation } });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.data.createPost.title).toBe("Playwright Test Post");
  });

  test('Mutation: Update a post', async () => {
    const mutation = `mutation { updatePost(id: 1, input: { title: "Updated Title" }) { id title } }`;
    const res = await api.post('', { data: { query: mutation } });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.data.updatePost.title).toBe("Updated Title");
  });

  test('Mutation: Delete a post', async () => {
    const mutation = `mutation { deletePost(id: 1) }`;
    const res = await api.post('', { data: { query: mutation } });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.data.deletePost).toBe(true);
  });

  // =========================
  // Negative / Error handling
  // =========================

  test('Query: Fetch non-existent user', async () => {
    const query = `query { user(id: 99999) { id name } }`;
    const res = await api.post('', { data: { query } });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.data.user).toBeNull();
  });

  test('Mutation: Invalid mutation', async () => {
    const mutation = `mutation { createPost(input: { invalidField: "test" }) { id } }`;
    const res = await api.post('', { data: { query: mutation } });
    const body = await res.json();
    expect(body.errors).toBeDefined();
  });
});