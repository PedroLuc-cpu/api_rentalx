import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
class Users {
 @PrimaryColumn()
 id?: string;

 @Column()
 name: string;

 @Column()
 password: string;

 @Column({unique: true})
 email: string;

 @Column()
 driver_license: string;

 @Column()
 isAdmin: boolean;

 @CreateDateColumn()
 created_at: Date;

 constructor() {
  if (!this.id) {
   this.id = uuidV4();
  }
 };

}

export { Users }