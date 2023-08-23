<template>
    <!-- CAR CONTACT -->
    <div class="mt-10">
        <div class="flex w-[600px] justify-between">
            <input type="text" class="border p-1" placeholder="Name" :value="name"
                @input="$emit('update:name', $event.target.value)" />
            <input type="text" class="border p-1" placeholder="Email" :value="email"
                @input="$emit('update:email', $event.target.value)" />
            <input type="text" class="border p-1" placeholder="Phone" :value="phone"
                @input="$emit('update:phone', $event.target.value)" />
        </div>
        <div class="flex mt-4 w-[600px]">
            <textarea class="border p-1 w-full" placeholder="Message" :value="message"
                @input="$emit('update:message', $event.target.value)"></textarea>
        </div>
        <div class="flex w-[600px] justify-between">
        <button class="bg-blue-400 text-white px-10 py-3 rounded mt-4">
            Submit
        </button>
        <button class="bg-red-400 text-white px-10 py-3 rounded mt-4" @click="clearFormData">
            Clear Store
        </button>

        </div>
    </div>
    <!-- CAR CONTACT -->
</template>

<script setup>
import { useDefaultStore } from '@/stores/DefaultStore'
defineProps({
    name: String,
    email: String,
    phone: String,
    message: String
})
defineEmits(['update:name', 'update:email', 'update:phone', 'update:message'])
const formStore = useDefaultStore()

const clearFormData = () => {
    formStore.clearFormData();
}
</script>