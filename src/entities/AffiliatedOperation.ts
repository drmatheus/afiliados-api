import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
}
