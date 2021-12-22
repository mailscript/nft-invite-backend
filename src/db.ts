
import { MongoClient} from "mongodb";
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017";

export function getClient() {
	const client = new MongoClient(MONGODB_URL);
	return client;
}
