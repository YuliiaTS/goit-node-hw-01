const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require('./contacts');

const argv = require("yargs").argv;

const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const list = await listContacts();
      console.table(list);
      break;

    case "get":
      const oneContact = await getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({action: "list"});
invokeAction({action: "get", id: "5"});