class UserRepository {

  async find() {
    throw new Error("Abstract Method has no implementation");
  }
}

export default UserRepository;