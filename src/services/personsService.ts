import { DocumentClient } from "aws-sdk/clients/dynamodb";

import Person from "../model/Person";

export default class PersonServerice {

    private Tablename: string = "PersonsTable";

    constructor(private docClient: DocumentClient) { }

    async getAllPersons(): Promise<Person[]> {
        const persons = await this.docClient.scan({
            TableName: this.Tablename,
        }).promise()
        return persons.Items as Person[];
    }

    async createPerson(person: Person): Promise<Person> {
        await this.docClient.put({
            TableName: this.Tablename,
            Item: person
        }).promise()
        return person as Person;

    }

    async getPerson(id: string): Promise<any> {

        const person = await this.docClient.get({
            TableName: this.Tablename,
            Key: {
                personId: id
            }
        }).promise()
        if (!person.Item) {
            throw new Error("Id does not exit");
        }
        return person.Item as Person;

    }

    async updatePerson(id: string, person: Partial<Person>): Promise<Person> {
        const updated = await this.docClient
            .update({
                TableName: this.Tablename,
                Key: { personId: id },
                UpdateExpression:
                    "set #status = :status",
                ExpressionAttributeNames: {
                    "#status": "status",
                },
                ExpressionAttributeValues: {
                    ":status": person.status,
                },
                ReturnValues: "ALL_NEW",
            })
            .promise();

        return updated.Attributes as Person;
    }

    async deletePerson(id: string): Promise<any> {
        return await this.docClient.delete({
            TableName: this.Tablename,
            Key: {
                personId: id
            }
        }).promise()
    }
}
