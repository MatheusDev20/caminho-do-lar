/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { faker } from '@faker-js/faker';

const NUM_REQUESTS = 100;
const BASE_URL = 'http://localhost/api/pet';

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
    const response = await axios.post(BASE_URL, petData);
    console.log(`Pet criado com status: ${response.status}`);
  } catch (error) {
    console.error('Erro ao criar pet:', error.message);
  }
}

async function main() {
  const promises = [];

  for (let i = 0; i < NUM_REQUESTS; i++) {
    promises.push(criarPet());
  }

  // Executa todas as requisições em paralelo
  await Promise.all(promises);
}

main();
