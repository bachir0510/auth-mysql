import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { hash } from 'bcryptjs';
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn('increment')
    id: string;
  
    @Column({
      type: 'varchar',
    })
    name: string;
  
    @Column({
      type: 'varchar',
      length: 150,
    })
    email: string;
  
    @Column({
      type: 'varchar',
      length: 100,
    })
    password: string;

    @Column()
    refreshtoken:string;
  
    @CreateDateColumn()
    createdOn: Date;
  
    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
      if (!this.password) {
        return;
      }
      this.password = await hash(this.password, 10);
    }
  }