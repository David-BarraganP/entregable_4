import { IconEdit, IconGift, IconTrash } from "@tabler/icons-react";

const UsersList = ({ users, deleteUser, handleUpdateUser }) => {
  console.log(users);

  return (
    <section
      className="grid  gap-6 grid-cols-[repeat(auto-fill,_280px)] justify-center
     max-w-[1080px] mx-auto  py-10"
    >
      {users.map((user) => (
        <article
          key={user.id}
          className="border-2 rounded-md py-2 px4
        hover:shadow-lg transition-shadow grid gap-2"
        >
          <h2 className="capitaliza font-bold text-lg line-clamp-1 p-2">
            {user.first_name} {user.last_name}
          </h2>
          <ul>
            <li className="grid">
              <span className="text-black/40 p-2">Correo</span>
              <span className="font-semibold p-2">{user.email}  </span>
            </li>
            <li className="grid gap-2 ">
              <span className="text-black/40 p-2">Cumpleaños
              <div className="flex gap-1 items-center">
               <IconGift color="black"/><span className="text-black font-semibold p-2">{user.birthday}</span>
              </div>
              </span>
            </li>
          </ul>
          <div className="flex gap-2">
            <button
              onClick={() => deleteUser(user.id)}
              className="border-2 rounded-md p-1 text-white bg-red-500
            hover:shadow-lg hover:bg-red-600 transition-colors"
            >
              <IconTrash />
            </button>

            <button
              onClick={() => handleUpdateUser(user)}
              className="border-2 rounded-md p-1 text-white bg-violet-700
            hover:shadow-lg hover:bg-violet-900 transition-colors"
            >
              <IconEdit />
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default UsersList;
