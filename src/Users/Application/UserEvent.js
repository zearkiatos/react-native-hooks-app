class UserEvent {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getUsers() {
        const users = await this.userRepository.find();
        return users;
    }
}

export default UserEvent;