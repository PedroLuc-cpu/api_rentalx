import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AlterUserAvatar1692835922294 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users", 
            new TableColumn({
                name:"avatar",
                type:"varchar",
                isNullable: false,
                default:"null"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "avatar")
    }

}
