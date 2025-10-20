// import type { HttpContext } from '@adonisjs/core/http'

import user from "#models/user";

export default class UsersController {

    public async store({ }: user) {
        return { message: 'User created successfully' };
    }


    

}