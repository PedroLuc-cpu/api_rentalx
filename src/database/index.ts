import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
 type: "postgres",
 host: "localhost",
 port: 5432,
 username: "postgres",
 password: "123",
 database: "rentalx",
 synchronize: true,
 logging: true,
 subscribers: [],
 migrations: ["./src/database/migrations/*.ts"],
 entities: ["./src/modules/**/entities/*.ts"],
})

AppDataSource.initialize()
 .then(() => {
  console.log("AppDataSource initialized")
 })
 .catch(err => {
  console.log("Error during initialization: " + err)
 })

 export { AppDataSource }