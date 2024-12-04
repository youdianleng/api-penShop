import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryColumn()
    id: number
    
    @Column({
        type: "varchar",
        nullable: false
    })
    name: String;


    @Column({
        type: "varchar",
        nullable: false
    })
    password: String;


    @Column({
        type: "varchar",
        nullable: false
    })
    email: String;

    @Column({
        type: "tinyint"
        
    })
    role: Number;

    @Column({
        type: "tinyint"
    })
    active: Number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}