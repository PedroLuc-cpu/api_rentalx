import { AppDataSource } from "../../../database";
import { Category } from "../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./implementations/ICategoriesRepository";

import { Repository } from "typeorm";

class CategoriesRepository implements ICategoriesRepository {

 //private categories: Category[];
 private repository: Repository<Category>;



 constructor() {
  //this.categories = [];
  this.repository = AppDataSource.getRepository(Category);
 }

 // public static getInstance(): CategoriesRepository {
 //  if (!CategoriesRepository.INSTANCE) {
 //   CategoriesRepository.INSTANCE = new CategoriesRepository();
 //  }
 //  return CategoriesRepository.INSTANCE;
 // }

 async create({ name, description }: ICreateCategoryDTO): Promise<void> {

  const category = this.repository.create({
   description,
   name,
  })

  await this.repository.save(category)
 }

 async list(): Promise<Category[]> {
  const categories = await this.repository.find()
  return categories
 }

 async findByName(name: string): Promise<Category> {
  const category = await this.repository.findOne({ where: { name } })
  return category;
 }
}

export { CategoriesRepository };