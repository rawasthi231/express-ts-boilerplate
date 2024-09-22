import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number;

  @Column({ type: "varchar", length: 110, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 191, nullable: false, unique: true })
  email: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  password: string | undefined;

  @Column({
    name: "verified",
    type: "smallint",
    nullable: true,
    default: null,
  })
  isVerified: number | null;

  @Column({ name: "active", type: "smallint", default: 1 })
  isActive: number;

  @CreateDateColumn({
    name: "created_at",
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: "updated_at",
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}
