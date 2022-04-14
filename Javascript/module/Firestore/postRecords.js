import { addDoc, collection, db } from './initFirebase.js';

async function postRecords({ player, rounds, win, lose }) {
    try {
        await addDoc(collection(db, "Records"), {
            player: player,
            rounds: rounds,
            win: win,
            lose: lose
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export default postRecords;