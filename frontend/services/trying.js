import { Storage } from '@google-cloud/storage';
import dotenv from 'dotenv';

dotenv.config();

const MY_BUCK = process.env.MY_BUCKETNAME;
const storage = new Storage();


export async function Docs() {
	if (!MY_BUCK) {
				throw new Error('Bucket name is not defined');
			}
	const [files] = await storage.bucket(MY_BUCK).getFiles();
	const documents = [];
	files.forEach(file => {
		const document = file.name
		if (document.startsWith('Documents/') && document.split('/')[1]){
			documents.push(document);
		}
	});
	console.log(documents)
	return documents;
	
}

Docs();