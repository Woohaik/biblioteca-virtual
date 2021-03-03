
import { AsyncContainerModule } from "inversify";
import { TYPES } from "./Config/constants";

// Controllers
import "./Api/Controllers";

// Servicios
import { UserService } from './App/Services/UserService';
import { BookService } from './App/Services/BookService';

import { getDbConnection } from "./Data/connection"
import { UserRepository } from "./Data/Repositories/UserRepository";
import { BookRepository } from "./Data/Repositories/BookRepository";


export const bindings = new AsyncContainerModule(async (bind) => {
    // Aca conexion a db
    await getDbConnection()
    bind<UserService>(TYPES.UserService).to(UserService);
    bind<UserRepository>(TYPES.UserRepository).to(UserRepository);

    // Books
    bind<BookService>(TYPES.BookService).to(BookService);
    bind<BookRepository>(TYPES.BookRepository).to(BookRepository);
});  