interface CreateUserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  petPreference: string;
  admin: boolean;
  avatar: string;
}

export default CreateUserDTO;
