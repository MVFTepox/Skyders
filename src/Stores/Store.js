import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    user: {
      _id: null,
      first_name: "",
      last_name: "",
      birth_date: "",
      phone: "",
      email: "",
      password: "",
      roles: [],
      cliente: {
        purchase_history: [
          {
            purchase_id: null,
          },
        ],
        preferences: [],
      },
      organizador: {
        events: [
          {
            event_id: null,
          },
        ],
      },
      admin: {
        special_permissions: [],
      },
    },
    users: [], // Lista para todos los usuarios
    error: null, // Manejo de errores
    loading: false, // Indicador de carga
  }),
  actions: {
    // Obtener todos los usuarios
    async fetchUsers() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch("http://3.141.37.229:3000/api/users");
        if (!response.ok) throw new Error("Error al obtener los usuarios");
        const data = await response.json();
        this.users = data;
      } catch (error) {
        this.error = error.message;
        console.error("Error en fetchUsers:", error);
      } finally {
        this.loading = false;
      }
    },

    // Obtener un usuario por ID
    async fetchUserById(id) {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch(`http://3.141.37.229:3000/api/users/${id}`);
        if (!response.ok) throw new Error("Usuario no encontrado");
        const data = await response.json();
        this.user = data;
      } catch (error) {
        this.error = error.message;
        console.error("Error en fetchUserById:", error);
      } finally {
        this.loading = false;
      }
    },

    // Crear un usuario
    async createUser(newUser) {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch("http://3.141.37.229:3000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        if (!response.ok) throw new Error("Error al crear el usuario");
        const data = await response.json();
        this.users.push(data); // Agregar el usuario creado a la lista
      } catch (error) {
        this.error = error.message;
        console.error("Error en createUser:", error);
      } finally {
        this.loading = false;
      }
    },

    // Actualizar un usuario por ID
    async updateUser(id, updatedUser) {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch(`http://3.141.37.229:3000/api/users/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        });
        if (!response.ok) throw new Error("Error al actualizar el usuario");
        const data = await response.json();
        // Actualizar el usuario en la lista
        this.users = this.users.map((user) =>
          user._id === id ? data : user
        );
      } catch (error) {
        this.error = error.message;
        console.error("Error en updateUser:", error);
      } finally {
        this.loading = false;
      }
    },

    // Eliminar un usuario por ID
    async deleteUser(id) {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch(`http://3.141.37.229:3000/api/users/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Error al eliminar el usuario");
        // Eliminar el usuario de la lista
        this.users = this.users.filter((user) => user._id !== id);
      } catch (error) {
        this.error = error.message;
        console.error("Error en deleteUser:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
