<template>
    <span :title="humanFriendlyDate()">
        {{ difForHumans()  }}
    </span>
</template>

<script setup>
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedDate from 'dayjs/plugin/localizedFormat'
import dayjs from 'dayjs'


dayjs.extend(relativeTime)
dayjs.extend(localizedDate)

const {timestamp} = defineProps(['timestamp'])

const difForHumans = () => {
  return dayjs.unix(timestamp).fromNow()
}
const humanFriendlyDate = () => {
  return dayjs.unix(timestamp).format('llll')
}
</script>

<style scoped>

</style>