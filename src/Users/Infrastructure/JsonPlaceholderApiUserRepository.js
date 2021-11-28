import UserRepository from "../Domain/UserRepository";
import config from '../../config';

class JsonPlaceholderApiUserRepository extends UserRepository {
    async find () {
        console.log(config);
        const response = await fetch(`${config.JSON_PLACEHOLDER_API_BASE_URL}/users`);
        console.log(response);
        const users = response.json();
        return users;
    }
}

export default JsonPlaceholderApiUserRepository;