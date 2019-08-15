<template>
  <div class="flex mb-4">
    <div
      v-for="(team, index) in teams"
      :key="index"
      class="pixel-border px-3 w-1/2 border-t-4 border-b-4"
      :class="index === 0 ? 'border-r-2 border-l-4' : 'border-l-2 border-r-4'"
    >
      <div class="bg-black -mt-4 block">
        <h1>Team {{ index + 1 }}</h1>
      </div>
      <ul>
        <li
          v-for="(player, playIndex) in team.players"
          :key="playIndex"
          class="my-2"
        >
          {{ player }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Teams',
  props: {
    teams: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
