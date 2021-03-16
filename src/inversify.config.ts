
import { AsyncContainerModule } from "inversify";
import { INVERSIFY_TYPES } from "./Config/";

// Controllers
import "./Api/Controllers";

// Servicios
import { UserService } from './App/Services/UserService';
import { BookService } from './App/Services/BookService';
import { BookingService } from './App/Services/BookingService';

import { getDbConnection } from "./Data/connection"
import { UserRepository } from "./Data/Repositories/UserRepository";
import { BookRepository } from "./Data/Repositories/BookRepository";
import { BookingRepository } from "./Data/Repositories/BookingRepository";


export const bindings = new AsyncContainerModule(async (bind) => {
    // Aca conexion a db
    await getDbConnection()
    bind<UserService>(INVERSIFY_TYPES.UserService).to(UserService);
    bind<UserRepository>(INVERSIFY_TYPES.UserRepository).to(UserRepository);

    // Books
    bind<BookService>(INVERSIFY_TYPES.BookService).to(BookService);
    bind<BookRepository>(INVERSIFY_TYPES.BookRepository).to(BookRepository);

    // Bookings
    bind<BookingService>(INVERSIFY_TYPES.BookingService).to(BookingService);
    bind<BookingRepository>(INVERSIFY_TYPES.BookingRepository).to(BookingRepository);
});