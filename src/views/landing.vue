<template>
    <div class="container mt-5">
        <h1 class="text-center">Pokemon</h1>

        <table class="table table-bordered">
            <thead class="bg-dark text-white">
                <tr>
                    <th scope="col">nama</th>
                </tr>
            </thead>

            <tbody class="table table-bordered table-striped w-auto mx-auto">
                <tr v-for="(pokemon) in pokemons">
                    <td class="border px-4 py-2 capitalize">
                        {{ pokemon.name }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue' 
import api from '../API/api.js' // sesuaikan path jika berbeda

const pokemons = ref([])

onMounted(async () => {
    try {
        const response = await api.get('pokemon?limit=20')
        pokemons.value = response.data.results
    } catch (error) {
        console.error('Gagal mengambil data Pokémon:', error)
    }
})

</script>

<style lang="scss" scoped>

</style>