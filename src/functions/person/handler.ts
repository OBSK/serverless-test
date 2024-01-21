import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from '@libs/api-gateway';
import fetch from 'node-fetch';
import { middyfy } from '@libs/lambda';
import personsService from '../../services';
import { dataTranslate } from './../../helpers/dataTranslate';
import { v4 } from "uuid";
import { translateAttributes } from 'src/helpers/translateAttributes';

export const getAllPersons = middyfy(async (): Promise<APIGatewayProxyResult> => {
    const persons = await personsService.getAllPersons();
    return formatJSONResponse({
        persons
    })
})

export const createPerson = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const id = v4();
        const person = await personsService.createPerson({
            personId: id,
            name: event.body.name,
            birth_year: event.body.birth_year,
            eye_color: event.body.eye_color,
            gender: event.body.gender,
            hair_color: event.body.hair_color,
            height: event.body.height,
            mass: event.body.mass,
            skin_color: event.body.skin_color,
            homeworld: event.body.homeworld,
            films: event.body.films,
            species: event.body.species,
            starships: event.body.starships,
            vehicles: event.body.vehicles,
            url: event.body.url,
            created: event.body.created,
            edited: event.body.edited,
            createdAt: new Date().toISOString(),
            status: false
        })
        return formatJSONResponse({
            person
        });
    } catch (e) {
        return formatJSONResponse({
            status: 500,
            message: e
        });
    }
})

export const getPerson = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const id = event.pathParameters.id;
    try {
        const person = await personsService.getPerson(id)
        const translateData: Record<string, string> = translateAttributes(
            person,
            dataTranslate
        )
        console.log(translateData, ">>Data");
        return formatJSONResponse({
            translateData, id
        });
    } catch (e) {
        return formatJSONResponse({
            status: 500,
            message: e
        });
    }
})

export const updatePerson = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const id = event.pathParameters.id;
    try {
        const person = await personsService.updatePerson(id, { status: event.body.status })
        return formatJSONResponse({
            person, id
        });
    } catch (e) {
        return formatJSONResponse({
            status: 500,
            message: e
        });
    }
})

export const deletePerson = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const id = event.pathParameters.id;
    try {
        const person = await personsService.deletePerson(id)
        return formatJSONResponse({
            person, id
        });
    } catch (e) {
        return formatJSONResponse({
            status: 500,
            message: e
        });
    }
})

export const swapi = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

    const requestUrl: string = `https://swapi.py4e.com/api/people/${event.pathParameters.id}`;
    console.log(requestUrl, ">>RequestUrl");
    try {
        const response = await fetch(requestUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return formatJSONResponse({
            data
        });
    } catch (e) {
        return formatJSONResponse({
            status: 500,
            message: e
        });
    }
})

export const swagger = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    return formatJSONResponse({
        status: 200,
        body: '<html><head><title>Swagger UI</title></head><body><div id="swagger-ui"></div><script src="/swagger-ui-bundle.js"></script><script src="/swagger-ui-standalone-preset.js"></script><script>const ui = SwaggerUIBundle({url: "/swagger.json", dom_id: "#swagger-ui"});</script></body></html>',
        headers: {
            'Content-Type': 'text/html',
        },
    });
})
