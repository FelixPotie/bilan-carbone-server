import app from './config/app'
import env from './environments'
import {AddressInfo} from 'net'

const PORT = env.getPort();

/*
app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
 });
*/
 
const server = app.listen(5000, '0.0.0.0', () => {

    const {port, address} = server.address() as AddressInfo;
    console.log('Server listening on:','http://' + address + ':'+port);

});