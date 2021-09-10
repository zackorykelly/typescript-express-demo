import Post from '../posts/posts.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Category {
    @PrimaryGeneratedColumn()
    public id: string;

    @Column()
    public name: string;

    @ManyToMany(() => Post, (post: Post) => post.categories)
    public posts: Post[];
}

export default Category;