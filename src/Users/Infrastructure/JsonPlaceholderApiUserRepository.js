import UserRepository from "../Domain/UserRepository";
import config from '../../config';

class JsonPlaceholderApiUserRepository extends UserRepository {
    async find () {
        const response = await fetch(`${config.JSON_PLACEHOLDER_API_BASE_URL}/users`);
        const users = response.json();
        return users;
    }
}

export default JsonPlaceholderApiUserRepository;