function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Sergio', 'Admin');
usuarios.set('Bruna', 'Admin');
usuarios.set('Jose', 'User');

console.log(getAdmins(usuarios));