import dynamoDBClient from "../model";
import PersonServerice from "./personsService"

const personService = new PersonServerice(dynamoDBClient());

export default personService;