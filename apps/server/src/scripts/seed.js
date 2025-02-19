/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
const { faker } = require('@faker-js/faker');
const axios = require('axios');

const NUM_REQUESTS = 2000;
const BASE_URL = 'http://localhost:3001/api/pet';

// Defina o valor do cookie conforme necessário
const COOKIE_VALUE = 'Cookie Value';

async function criarPet() {
  const petData = {
    name: faker.animal.dog(),
    gender: faker.helpers.arrayElement(['M', 'F']),
    size: faker.helpers.arrayElement(['Pequeno', 'Médio', 'Grande']),
    history: faker.lorem.sentence(),
    castrated: faker.datatype.boolean(),
    vaccinated: faker.datatype.boolean(),
    city: faker.location.city(),
    uf: faker.location.state(),
    specie: faker.helpers.arrayElement(['Gato', 'Cachorro']),
  };

  try {
    const response = await axios.post(
      BASE_URL,
      petData,
      {
        headers: {

          Cookie: `connect.sid=${COOKIE_VALUE}`,
        },
      },
    );
    console.log(`Pet criado com status: ${response.status}`);
  } catch (error) {
    console.log('e', error);
    console.error('Erro ao criar pet:', error.message);
  }
}

async function main() {
  const promises = [];
  for (let i = 0; i < NUM_REQUESTS; i++) {
    promises.push(criarPet());
  }
  await Promise.all(promises);
}

main();
