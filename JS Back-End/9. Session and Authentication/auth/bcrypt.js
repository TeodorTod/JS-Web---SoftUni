const bcrypt = require('bcrypt');

const pass1 = '123456';
const pass2 = '123457';
const hash = '$2b$10$xKZw546vF4dUTA15ZuyFbeGcLdBBJS70W9JkD1zM5UPBqIn2rQJNq';

async function start() {
    const hash1 = await bcrypt.hash(pass1, '$2b$10$xKZw546vF4dUTA15ZuyFbe');
    const hash2 = await bcrypt.hash(pass2, '$2b$10$xKZw546vF4dUTA15ZuyFbe');
    console.log(hash1);
    console.log(hash2);
    //  console.log(await bcrypt.compare(pass1, hash));
   
}
start();