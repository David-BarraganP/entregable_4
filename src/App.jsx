import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import { IconUserPlus } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import UsersList from "./components/UsersList";

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  const [users, setUsers] = useState([]);
  const [showUserCard, setUserCard] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const { 
    register,
     handleSubmit, 
     reset, 
     formState: {errors},
     } = useForm();

  const handleOpenUserCard = () => {
    setUserCard(true);
  };

  const handleCloseUserCard = () => {
    setUserCard(false);
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
    setUserToEdit(null);
  };

  const handleUpdateUser = (user) => {
    handleOpenUserCard();
    setUserToEdit(user);
  };

  const createUser = (newUser) => {
    axios
      .post(BASE_URL + "/users/", newUser)
      .then(({ data: newUser }) => {
        setUsers([...users, newUser]);
        handleCloseUserCard();
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (idUserToDelete) => {
    axios
      .delete(BASE_URL + `/users/${idUserToDelete}/`)
      .then(() => {
        const newUsers = users.filter((user) => user.id !== idUserToDelete);
        setUsers(newUsers);
      })
      .catch((err) => console.log(err));
  }; 

  const updateUser = (user) => {
    axios
      .patch(BASE_URL + `/users/${userToEdit.id}/`, user)
      .then(({ data: updateUser }) => {
        const newUsers = users.map((user) => 
        user.id === userToEdit.id ? updateUser : user
        )
        setUsers(newUsers) 
        handleCloseUserCard()
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios 
      .get(BASE_URL + "/users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (userToEdit !== null) {
      reset(userToEdit);
    }
  }, [userToEdit]);

  return (
    <main className="text-[18px]">
      <header className="flex justify-between p-2">
        <h1 className="text-center p-2 font-bold">Usuarios</h1>
        <button
          onClick={handleOpenUserCard}
          className="bg-violet-700  text-white font-semibold p-2 rounded-md 
         hover:bg-violet-900 transition-all flex gap-1"
        >
          <IconUserPlus /> Crear nuevo usuario
        </button>
      </header>

      <UserCard
        showUserCard={showUserCard}
        onCloseUserCard={handleCloseUserCard}
        handleSubmit={handleSubmit}
        register={register}
        createUser={createUser}
        isUpdating={!!userToEdit}
        updateUser={updateUser}
        errors={errors} 
      />

      <UsersList
        users={users}
        deleteUser={deleteUser}
        handleUpdateUser={handleUpdateUser}
      />
    </main>
  );
}

export default App;
