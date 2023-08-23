<script setup>

import { useDefaultStore } from '@/stores/DefaultStore'

const route = useRoute();
const { toTitleCase } = useUtilities();
useHead({
    title: `${toTitleCase(route.params.name)}`
})
definePageMeta({
    layout: "custom"
})

const formStore = useDefaultStore()
let formData = formStore.formData;

onUpdated(() => {
    saveForm();
})

onMounted(() => {
    console.log('getformdata',formStore.getFormData() ?? 'nada');
    const data = formStore.getFormData();
    formData.name = data.name
    formData.email = data.email
    formData.phone = data.phone
    formData.message = data.message
})

const saveForm = () => {
    formData.message = `${formData.name} (${formData.email}) said his number is: ${formData.phone}`;
    formStore.setFormData(formData)
}

</script>
<template>
    <!-- <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
        <NuxtLink class="text-3xl font-mono" to="/">{{ formData.name }} {{ formData.email }} {{ formData.phone }} {{
            formData.message }}
        </NuxtLink>
    </header> -->
    <div>
        <CarDetailHero />
        <CarDetailAttributes />
        <CarDetailDescription />
        <CarDetailContact v-model:name="formData.name" v-model:email="formData.email" v-model:phone="formData.phone"
            v-model:message="formData.message" />
    </div>
</template>