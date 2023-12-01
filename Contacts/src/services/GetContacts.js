import axios from 'axios'

const CONTACTS_URL = "https://jsonplaceholder.typicode.com/users"

export async function GetContacts() {
    const response = await axios.get(CONTACTS_URL).then(result => result);
    return response.data
}