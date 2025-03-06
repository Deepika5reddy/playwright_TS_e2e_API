import { test, expect } from "@playwright/test";

const baseUrl = 'https://reqres.in/api';

test("Get API request- Assert response code 200", async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/2`, {
        ignoreHTTPSErrors: true // This will ignore SSL verification issues
    });
    expect(response.status()).toBe(200);
});

test("GET API request- Validate the contents of response ", async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/2`, {
        ignoreHTTPSErrors: true 
    });
    const responsebody = JSON.parse(await response.text());
    console.log(responsebody);
    expect(responsebody.data.id).toBe(2);
    expect(responsebody.data.first_name).toBe("Janet");
    expect(responsebody.data.last_name).toBe("Weaver");
    expect(responsebody.data.email).toBeTruthy();
});
test("POST API request- Create user", async ({ request }) => {
    const response = await request.post(`${baseUrl}/users`, {
        data: {
            name: "morpheus",
            job: "leader"
        },
        ignoreHTTPSErrors: true
    });

    const responsebody = await response.json();
    expect(responsebody.createdAt).toBeTruthy();
    expect(responsebody.id).toBeTruthy();
    expect(responsebody.name).toBe("morpheus");
    expect(responsebody.job).toBe("leader");
    console.log(responsebody);
});


test('POST Request - Login', async ({ request }) => {
    const response = await request.post(`${baseUrl}/api/login`, {
        data: {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
          },
        ignoreHTTPSErrors: true
    });
      
   
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(201);
    expect(responseBody.token).toBeTruthy();
    console.log(responseBody);
  });

test('PUT Request - Update', async ({ request }) => {
    const response = await request.put(`${baseUrl}/api/users/2`, {
        data: {
            name: 'morpheus',
            job: 'zion resident'
          },
        ignoreHTTPSErrors: true
    });
     
   
    const responseBody = JSON.parse(await response.text());
    console.log("Full Response Body:", responseBody);
    expect(response.status()).toBe(200);   
  });


test('DELETE Request - Delete', async ({ request }) => {
    const response = await request.delete(`${baseUrl}/api/users/2`, {
        ignoreHTTPSErrors: true
    });
    expect(response.status()).toBe(204);
  });



  





