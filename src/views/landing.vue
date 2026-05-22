<script setup>
import { ref, onMounted } from 'vue'
import api from '../API/api'

// STATE
const users = ref([])

const name = ref('')
const email = ref('')

const editId = ref(null)

// GET DATA
const getUsers = async () => {

    try {

        const response = await api.get('/users')

        users.value = response.data

    } catch (error) {

        console.log(error)

    }
}

// CREATE + UPDATE
const saveUser = async () => {

    try {

        // CREATE
        if (editId.value === null) {

            await api.post('/users', {
                name: name.value,
                email: email.value
            })

        }

        // UPDATE
        else {

            await api.put(`/users/${editId.value}`, {
                name: name.value,
                email: email.value
            })

            editId.value = null
        }

        // RESET FORM
        name.value = ''
        email.value = ''

        // REFRESH DATA
        getUsers()

    } catch (error) {

        console.log(error)

    }
}

// EDIT
const editUser = (user) => {

    editId.value = user.id

    name.value = user.name
    email.value = user.email
}

// DELETE
const deleteUser = async (id) => {

    try {

        await api.delete(`/users/${id}`)

        getUsers()

    } catch (error) {

        console.log(error)

    }
}

// LOAD DATA
onMounted(() => {

    getUsers()

})
</script>

<template>

    <div class="container mt-5">

        <h1>CRUD USER</h1>

        <!-- FORM -->

        <div class="mb-3">

            <input
                type="text"
                v-model="name"
                placeholder="Nama"
                class="form-control mb-2"
            >

            <input
                type="email"
                v-model="email"
                placeholder="Email"
                class="form-control mb-2"
            >

            <button
                @click="saveUser"
                class="btn btn-primary"
            >
                {{ editId ? 'Update' : 'Tambah' }}
            </button>

        </div>

        <!-- TABLE -->

        <table class="table table-bordered">

            <thead>

                <tr>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Aksi</th>
                </tr>

            </thead>

            <tbody>

                <tr
                    v-for="user in users"
                    :key="user.id"
                >

                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>

                    <td>

                        <button
                            @click="editUser(user)"
                            class="btn btn-warning btn-sm me-2"
                        >
                            Edit
                        </button>

                        <button
                            @click="deleteUser(user.id)"
                            class="btn btn-danger btn-sm"
                        >
                            Hapus
                        </button>

                    </td>

                </tr>

            </tbody>

        </table>

    </div>

</template>