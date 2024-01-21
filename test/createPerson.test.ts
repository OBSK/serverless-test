import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import PersonService from '../src/services/personsService';
import Person from '../src/model/Person';

const mockDocClient = {} as DocumentClient;

describe('PersonService - createPerson', () => {
  it('should create a person', async () => {
    // Arrange
    const personService = new PersonService(mockDocClient);
    const mockPerson: Person = {
        personId: "1",
        name: "Jorge Arturo",
        birth_year: "1991",
        eye_color: "brown",
        gender: "Male",
        hair_color: "brown",
        height: "1.70",
        mass: "70",
        skin_color: "yellow",
        homeworld: "lala",
        films: [],
        species: [],
        starships: [],
        vehicles: [],
        url: "https://www.linkedin.com/in/jorge-arturo-huima-ruiz/",
        created: "2024",
        edited: "2024",
        status: true,
        createdAt: "2024"
    };

    // Act
    const result = await personService.createPerson(mockPerson);

    // Assert
    expect(result).toEqual(mockPerson);
  });
});