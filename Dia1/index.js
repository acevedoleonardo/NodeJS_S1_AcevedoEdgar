// Importacion de modulos 

const { MongoClient, ObjectId } = require('mongodb'); //Permite conectar y manipular una base de datos en mongodb 
const readline = require('readline-sync'); //Permite leerdatos desde la consola de forma interactiva. 
require('dotenv').config(); //Permite cargar variables de entorno. 

// La configuracion de conexion 
const uri = 'mongodb+srv://NodeJS:NodeJS@cluster0.jy2o2v3.mongodb.net/'; // o desde process.env.MONGO_URI
const client = new MongoClient(uri);
const dbName = 'Node_js'; // Nombre de la base de datos 
const collectionName = 'Campuslands'; // Nombre de la coleccion 

async function main() {
  try {
    await client.connect();
    const db = client.db(dbName);
    const Campuslands = db.collection(collectionName);

    let running = true;

    while (running) {
      console.log('\n--- CRUD MENU ---');
      console.log('1. Crear usuario');
      console.log('2. Listar usuarios');
      console.log('3. Actualizar usuario');
      console.log('4. Eliminar usuario');
      console.log('5. Salir');

      const option = readline.question('Selecciona una opción: ');

      switch (option) {
        case '1': {
          const name = readline.question('Nombre: ');
          const email = readline.questionEMail('Email: ');
          const telefono = readline.question('Telefono: ');
          await Campuslands.insertOne({ name, email, telefono });
          console.log('Usuario creado.');
          break;
        }
        case '2': {
          const allUsers = await Campuslands.find().toArray();
          console.log('\nUsuarios:');
          allUsers.forEach(Campuslands => {
            console.log(`${Campuslands._id}: ${Campuslands.name} - ${Campuslands.email} - ${Campuslands.telefono} `);
          });
          break;
        }
        case '3': {
          const id = readline.question('ID del usuario a actualizar: ');
          const name = readline.question('Nuevo nombre: ');
          const email = readline.questionEMail('Nuevo email: ');
          const result = await Campuslands.updateOne(
            { _id: new ObjectId(id) },
            { $set: { name, email, telefeno } }
          );
          console.log(result.modifiedCount ? 'Usuario actualizado.' : 'Usuario no encontrado.');
          break;
        }
        case '4': {
          const id = readline.question('ID del usuario a eliminar: ');
          const result = await Campuslands.deleteOne({ _id: new ObjectId(id) });
          console.log(result.deletedCount ? 'Usuario eliminado.' : 'Usuario no encontrado.');
          break;
        }
        case '5': {
          running = false;
          break;
        }
        default:
          console.log('Opción no válida.');
      }
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
    console.log('Conexión cerrada.');
  }
}

main();