import { getDocs, collection, db } from './initFirebase.js';

async function getRecords() {
    const recordsCol = collection(db, 'Records');
    const recordSnapshot = await getDocs(recordsCol);
    const recordsList = recordSnapshot.docs.map(doc => doc.data());
    return recordsList;
}

export default getRecords;