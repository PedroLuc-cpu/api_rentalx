import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserDeleteUsername1692659742047 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("users");
        const usernameColumn = table?.findColumnByName("username");

        if (usernameColumn) {
            await queryRunner.dropColumn("users", "username");
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("users");
        const usernameColumn = table?.findColumnByName("username");

        if (!usernameColumn) {
            await queryRunner.addColumn(
                "users",
                new TableColumn({
                    name: "username",
                    type: "varchar",
                }),
            );
        }
    }
}
