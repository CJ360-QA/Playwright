import { test, expect, request } from '@playwright/test';

test('has title', async ({ request }) => {

  const response=await request.get('https://example.com');
  const responseText=await response.text();
  await response.json();
  const status=await response.status();

  response.headers();
  await expect(status).toBe(200);
  await expect(status).toBeGreaterThanOrEqual(200);
  await expect(responseText).toContain('Example Domain');
  await expect(responseText).not.toBeNull();
  await expect(responseText).toEqual("spk");

});
test('post api ',  async ({ request }) => {

  const response=await request.post('https://example.com', {
    headers: {
      authorization: 'Bearer token'
    },
    data: {
      key: 'value'
    }
  });
  const responseText=await response.text();
  await response.json();
  const status=await response.status();
  const headers=response.headers();
  const pin=headers['pin'];
  await expect(status).toBe(200);
  await expect(status).toBeGreaterThanOrEqual(200);
  await expect(responseText).toContain('Example Domain');
  await expect(responseText).not.toBeNull();
  await expect(responseText).toEqual("spk");
});
