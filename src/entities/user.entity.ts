import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { AffiliatedOperations } from "./AffiliatedOperation";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(): void {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => AffiliatedOperations, (op) => op.user)
  @JoinColumn()
  affiliatedOperations: AffiliatedOperations[];
}
