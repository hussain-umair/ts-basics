interface MyUser {
  name: string,
  id: string,
  email?: string
}

type MyUserOptionals = Partial<MyUser>
// interface MyUserOptionals {
//   name?: string,
//   id?: string,
//   email?: string
// }

const merge = (user: MyUser, override: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...override
  }
}

type RequiredUser = Required<MyUser>
type JustEmailAndName = Pick<MyUser, "email" | "name">
type UserWithoutID = Omit<MyUser, "id">

const mapById = (users: MyUser[]): Record<string, UserWithoutID> => {
  return users.reduce((a, c) => {
    const { id, ...rest } = c
    return {
      ...a,
      [id]: rest
    }
  }, {})
}