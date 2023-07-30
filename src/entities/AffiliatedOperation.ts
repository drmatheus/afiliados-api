import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("Affiliated_Operations")
export class AffiliatedOperations {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  type: string;

  @Column()
  date: string;

  @Column()
  product: string;

  @Column()
  value: string;

  @Column()
  seller: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}
