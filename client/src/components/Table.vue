<template>
    <table>
        <tr>
            <th>Sorte</th>
            <th>Shop</th>
            <th>Preis/kg</th>
        </tr>
        <tr :key="result.id" v-for="result in results">
            <td>{{result.type}}</td>
            <td>{{result.shop}}</td>
            <td>{{result.price}}</td>
        </tr>
    </table>
</template>

<script>

export default {
    name: 'Table',
    props: {
        results: Array,
    },
}
</script>